import suburbsData from '@/data/suburbs.json';
import agentsData from '@/data/agents.json';


// Types
export interface SourceNote {
    label: string;
    url: string;
}

export interface PriceBand {
    min: number;
    max: number;
    currency: string;
}

export interface AmenityPlace {
    name: string;
    rating?: number;
    priceLevel?: string;
    distance?: string;
    description?: string;
    image?: string; // Optional specific image for the place
}

export interface DataPoints {
    priceBand: PriceBand;
    propertyTypes: string[];
    commuteAnchors: string[];
    lifestyleTags: string[];
    schoolsNote: string;
    safetyNote: string;
    walkability: string;
    investmentPotential: string;
    sourceNotes: SourceNote[];
    amenityHighlights?: Record<string, AmenityPlace[]>;
}

export interface ImagePlan {
    hero: { alt: string };
    snapshotTiles: string[];
    lifestyleGalleryCount: number;
    amenities: {
        schools: number;
        clinics: number;
        shopping: number;
    };
    transportGalleryCount: number;
}

import { SuburbImages } from '@/types/images';

export interface Suburb {
    slug: string;
    name: string;
    summary: string;
    centroid: { lat: number; lng: number };
    dataPoints: DataPoints;
    imagePlan: ImagePlan;
    relatedSuburbs: string[];
}

export interface SuburbsData {
    city: string;
    province: string;
    suburbs: Suburb[];
}

export interface AgentVerification {
    ffcStatus: 'verified' | 'unverified';
    ffcNumber: string | null;
    ffcExpiry: string | null;
    verifiedAt: string | null;
}

export interface Agent {
    agentId: string;
    name: string;
    agency: string;
    phone: string;
    email: string;
    suburbsServed: string[];
    verification: AgentVerification;
}

export interface AgentsData {
    agents: Agent[];
    fallbackAgentPool: string[];
}



// Data getters
export function getSuburbsData(): SuburbsData {
    return suburbsData as SuburbsData;
}

export function getAllSuburbs(): Suburb[] {
    return getSuburbsData().suburbs;
}

export function getSuburbBySlug(slug: string): Suburb | undefined {
    return getAllSuburbs().find(s => s.slug === slug);
}

export function getSuburbSlugs(): string[] {
    return getAllSuburbs().map(s => s.slug);
}

export function getAgentsData(): AgentsData {
    return agentsData as AgentsData;
}

export function getAllAgents(): Agent[] {
    return getAgentsData().agents;
}

export function getAgentById(agentId: string): Agent | undefined {
    return getAllAgents().find(a => a.agentId === agentId);
}

export function getVerifiedAgents(): Agent[] {
    return getAllAgents().filter(a => a.verification.ffcStatus === 'verified');
}



// Format utilities
export function formatPrice(amount: number): string {
    if (amount >= 1000000) {
        return `R${(amount / 1000000).toFixed(1)}M`;
    }
    return `R${(amount / 1000).toFixed(0)}K`;
}

export function formatPriceBand(priceBand: PriceBand): string {
    return `${formatPrice(priceBand.min)} - ${formatPrice(priceBand.max)}`;
}
