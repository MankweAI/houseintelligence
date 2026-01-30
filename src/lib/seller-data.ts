import { supabase } from './supabase';

// --- Interfaces (Kept for Type Safety) ---

export interface SellerPricing {
    freehold: {
        avgPrice: string; // "R4.2M"
        range: string; // "R3.5M - R12M"
        trend: 'UP' | 'DOWN' | 'STABLE';
        trendValue?: string; // "+5% YoY"
    };
    sectional: {
        avgPrice: string; // "R1.8M"
        trend: 'UP' | 'DOWN' | 'STABLE';
        trendValue?: string; // "-2% YoY"
    };
    insight: string; // "Top-end clusters >R8M are moving fastest due to security demand."
}

export interface SellerSupplyDemand {
    temperature: 'Sellers' | 'Buyers' | 'Balanced';
    estDaysOnMarket: number; // 95
    salesPerYear?: number;
}

export interface SellerMarketComposition {
    activeListings: number;
    dominantType: 'Freehold' | 'Cluster' | 'Sectional';
}

export interface SellerBuyerProfile {
    dominant: string; // "Young Professionals"
    secondary?: string; // "Upgraders from Rivonia"
    insight?: string;
    split: { label: string; percentage: number; color: string }[];
    motivations: string[];
    variations?: {
        sectional?: {
            dominant?: string;
            motivations?: string[];
        }
    };
}

export interface ValueProp {
    headline: string;
    points: string[];
    fast: { metric: string; context: string; };
    premium: { metric: string; context: string; };
    growth: { metric: string; context: string; };
}

export interface OwnerStability {
    longTerm: number; // % owners > 11 years
}

export interface MicroMarket {
    name: string; // e.g. "Hurlingham Proper (Boomed)"
    sentiment: 'Positive' | 'Negative' | 'Neutral';
    insight: string; // "High demand, low stock. Premium pricing."
}

export interface SellerIntelligence {
    timeline: {
        wellPriced: string;
        negotiationRoom: string;
        bestSeason: string;
    };
    pricingMistakes: string[];
    marketingAngles: string[];
    variations?: {
        sectional?: {
            timeline?: { wellPriced?: string; negotiationRoom?: string; bestSeason?: string };
            pricingMistakes?: string[];
            marketingAngles?: string[];
        }
    };
}

export interface ComparisonData {
    competitorName: string;
    competitorSlug: string;
    features: {
        label: string;
        us: boolean | string;
        them: boolean | string;
    }[];
    priceDiff: string;
    verdict: string;
}

export interface SuburbSellerData {
    suburbSlug: string;
    headline: string;
    description?: string; // Auto-generated SEO intro
    lastUpdated: string; // e.g., "Jan 2025"
    author: {
        name: string;
        role: string;
        image?: string;
    };

    // 1. Pricing Intelligence (The "What")
    pricing: SellerPricing;

    // 2. Supply & Demand (The "Why")
    supplyDemand: SellerSupplyDemand;

    // 3. Market Composition (The "Who")
    marketComposition: SellerMarketComposition;

    // 4. Buyer Demographics (The "Target")
    buyerProfile: SellerBuyerProfile;

    // 5. Narrative / Storytelling (The "Hook")
    valueProp?: ValueProp;

    // 6. Stability (The "Risk")
    ownerStability: OwnerStability;

    // 7. Micro-Markets (New Layer)
    microMarkets?: MicroMarket[];

    // 8. Seller Intelligence (Strategy)
    sellerIntelligence: SellerIntelligence;

    // 9. Comparison (Optional)
    comparison?: ComparisonData;

    // 10. Narrative Summary (Editorial Prose)
    narrativeSummary?: string;
}

// --- Fetcher ---

export async function getSellerData(slug: string): Promise<SuburbSellerData | null> {
    const { data, error } = await supabase
        .from('suburbs')
        .select('seller_report')
        .eq('slug', slug)
        .single();

    if (error || !data || !data.seller_report) {
        // Fallback for missing data or error
        console.warn(`Missing seller report for ${slug}`, error);
        return null;
    }

    return data.seller_report as SuburbSellerData;
}

// Deprecated: Empty object to prevent immediate crash if something still imports it directly
// Consumers should switch to getSellerData(slug)
export const sellerData: Record<string, SuburbSellerData> = {};
