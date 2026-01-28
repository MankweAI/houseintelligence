import Database from 'better-sqlite3';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';
import * as fs from 'fs';
import type { LeadWithConsent, LeadCreateInput } from './validation';
import { CONSENT_TEXT_VERSION, CONSENT_PURPOSE } from './validation';

// Lead repository interface - enables easy swap to Supabase later
export interface LeadRepository {
    createLead(input: LeadCreateInput, assignedAgentId?: string): Promise<LeadWithConsent>;
    getLead(id: string): Promise<LeadWithConsent | null>;
    listLeads(filters?: LeadFilters): Promise<LeadWithConsent[]>;
    updateLeadStatus(id: string, status: 'new' | 'contacted' | 'closed'): Promise<boolean>;
}

export interface LeadFilters {
    suburb?: string;
    agentId?: string;
    status?: 'new' | 'contacted' | 'closed';
    startDate?: string;
    endDate?: string;
}

// SQLite implementation
export class SQLiteLeadRepository implements LeadRepository {
    private db: Database.Database;

    constructor(dbPath?: string) {
        const dataDir = path.join(process.cwd(), 'data');
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir, { recursive: true });
        }

        const finalPath = dbPath || path.join(dataDir, 'app.db');
        this.db = new Database(finalPath);
        this.initSchema();
    }

    private initSchema(): void {
        this.db.exec(`
      CREATE TABLE IF NOT EXISTS leads (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        phone TEXT NOT NULL,
        email TEXT,
        buyer_type TEXT NOT NULL,
        budget_range TEXT NOT NULL,
        preferred_suburbs TEXT NOT NULL,
        timeline TEXT NOT NULL,
        pre_approved TEXT NOT NULL,
        consent_given INTEGER NOT NULL,
        consent_timestamp TEXT NOT NULL,
        consent_text_version TEXT NOT NULL,
        consent_purpose TEXT NOT NULL,
        source_url TEXT NOT NULL,
        user_agent TEXT NOT NULL,
        ip_address TEXT,
        created_at TEXT NOT NULL,
        status TEXT NOT NULL DEFAULT 'new',
        assigned_agent_id TEXT
      );
      
      CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
      CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at);
      CREATE INDEX IF NOT EXISTS idx_leads_assigned_agent_id ON leads(assigned_agent_id);
    `);
    }

    async createLead(input: LeadCreateInput, assignedAgentId?: string): Promise<LeadWithConsent> {
        const id = uuidv4();
        const now = new Date().toISOString();

        const lead: LeadWithConsent = {
            id,
            ...input.formData,
            consentTimestamp: now,
            consentTextVersion: CONSENT_TEXT_VERSION,
            consentPurpose: CONSENT_PURPOSE,
            sourceUrl: input.sourceUrl,
            userAgent: input.userAgent,
            ipAddress: input.ipAddress,
            createdAt: now,
            status: 'new',
            assignedAgentId,
        };

        const stmt = this.db.prepare(`
      INSERT INTO leads (
        id, name, phone, email, buyer_type, budget_range, preferred_suburbs,
        timeline, pre_approved, consent_given, consent_timestamp, consent_text_version,
        consent_purpose, source_url, user_agent, ip_address, created_at, status, assigned_agent_id
      ) VALUES (
        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
      )
    `);

        stmt.run(
            lead.id,
            lead.name,
            lead.phone,
            lead.email || null,
            lead.buyerType,
            lead.budgetRange,
            JSON.stringify(lead.preferredSuburbs),
            lead.timeline,
            lead.preApproved,
            lead.consentGiven ? 1 : 0,
            lead.consentTimestamp,
            lead.consentTextVersion,
            lead.consentPurpose,
            lead.sourceUrl,
            lead.userAgent,
            lead.ipAddress || null,
            lead.createdAt,
            lead.status,
            lead.assignedAgentId || null
        );

        return lead;
    }

    async getLead(id: string): Promise<LeadWithConsent | null> {
        const stmt = this.db.prepare('SELECT * FROM leads WHERE id = ?');
        const row = stmt.get(id) as Record<string, unknown> | undefined;

        if (!row) return null;

        return this.rowToLead(row);
    }

    async listLeads(filters?: LeadFilters): Promise<LeadWithConsent[]> {
        let query = 'SELECT * FROM leads WHERE 1=1';
        const params: unknown[] = [];

        if (filters?.status) {
            query += ' AND status = ?';
            params.push(filters.status);
        }

        if (filters?.agentId) {
            query += ' AND assigned_agent_id = ?';
            params.push(filters.agentId);
        }

        if (filters?.suburb) {
            query += ' AND preferred_suburbs LIKE ?';
            params.push(`%${filters.suburb}%`);
        }

        if (filters?.startDate) {
            query += ' AND created_at >= ?';
            params.push(filters.startDate);
        }

        if (filters?.endDate) {
            query += ' AND created_at <= ?';
            params.push(filters.endDate);
        }

        query += ' ORDER BY created_at DESC';

        const stmt = this.db.prepare(query);
        const rows = stmt.all(...params) as Record<string, unknown>[];

        return rows.map(row => this.rowToLead(row));
    }

    async updateLeadStatus(id: string, status: 'new' | 'contacted' | 'closed'): Promise<boolean> {
        const stmt = this.db.prepare('UPDATE leads SET status = ? WHERE id = ?');
        const result = stmt.run(status, id);
        return result.changes > 0;
    }

    private rowToLead(row: Record<string, unknown>): LeadWithConsent {
        return {
            id: row.id as string,
            name: row.name as string,
            phone: row.phone as string,
            email: (row.email as string) || undefined,
            buyerType: row.buyer_type as 'first-time' | 'upgrading' | 'investing',
            budgetRange: row.budget_range as '<1.5m' | '1.5-3m' | '3-6m' | '6-10m' | '10m+',
            preferredSuburbs: JSON.parse(row.preferred_suburbs as string),
            timeline: row.timeline as '0-3' | '3-6' | '6-12' | '12+',
            preApproved: row.pre_approved as 'yes' | 'no',
            consentGiven: true, // If in DB, consent was given
            consentTimestamp: row.consent_timestamp as string,
            consentTextVersion: row.consent_text_version as string,
            consentPurpose: row.consent_purpose as string,
            sourceUrl: row.source_url as string,
            userAgent: row.user_agent as string,
            ipAddress: (row.ip_address as string) || undefined,
            createdAt: row.created_at as string,
            status: row.status as 'new' | 'contacted' | 'closed',
            assignedAgentId: (row.assigned_agent_id as string) || undefined,
        };
    }

    close(): void {
        this.db.close();
    }
}

// Singleton instance for the application
let repositoryInstance: SQLiteLeadRepository | null = null;

export function getLeadRepository(): LeadRepository {
    if (!repositoryInstance) {
        repositoryInstance = new SQLiteLeadRepository();
    }
    return repositoryInstance;
}
