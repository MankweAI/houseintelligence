// Part 1: SuburbData Schema (Reusable Component)

export interface SellerIntelligence {
    premiumDrivers: string[];
    pricingMistakes: string[];
    marketingAngles: string[];
    timeline: {
        wellPriced: string;
        premium: string;
        negotiationRoom: string;
        bestSeason: string;
    };
}

export interface MarketComposition {
    activeListings: number;
    split: {
        freehold: number; // percentage
        sectional: number; // percentage
    };
    dominantFeatures: string; // e.g., "4-5 bed freehold"
}

export interface PricingIntelligence {
    freehold: {
        avgPrice: string;
        range: string;
        trend: "UP" | "DOWN" | "FLAT";
        trendValue?: string;
    };
    sectional: {
        avgPrice: string;
        range: string;
        trend: "UP" | "DOWN" | "FLAT";
        trendValue?: string;
    };
    insight: string;
}

export interface BuyerProfile {
    dominant: string; // e.g. "35-50 year old executives"
    split: {
        label: string;
        percentage: number;
    }[];
    motivations: string[];
    variations?: Record<string, {
        dominant: string;
        motivations: string[];
    }>;
}

export interface SellerIntelligence {
    premiumDrivers: string[];
    pricingMistakes: string[];
    marketingAngles: string[];
    timeline: {
        wellPriced: string;
        premium: string;
        negotiationRoom: string;
        bestSeason: string;
    };
    variations?: Record<string, {
        premiumDrivers: string[];
        pricingMistakes: string[];
        marketingAngles: string[];
    }>;
}

export interface OwnerStability {
    longTerm: number; // 11+ years %
    mediumTerm: number; // 5-11 years %
    shortTerm: number; // <5 years %
    avgOwnership: string;
}

export interface MicroMarket {
    name: string; // e.g. "The Grid" or "River Side"
    sentiment: "Positive" | "Neutral" | "Negative";
    insight: string; // "Chester Road suffers William Nicol noise, price 15% lower."
}

export interface ValueProp {
    fast: { metric: string; context: string };
    premium: { metric: string; context: string };
    growth: { metric: string; context: string };
}

export interface SuburbComparison {
    competitorName: string; // e.g. "Bryanston"
    competitorSlug: string; // e.g. "bryanston"
    priceDiff: string; // e.g. "+18% Higher"
    features: {
        label: string;
        us: string | boolean;
        them: string | boolean;
    }[];
    verdict: string; // "Choose Hurlingham for..."
}

export interface SuburbSellerData {
    suburbSlug: string;
    headline: string;
    description?: string;
    lastUpdated: string; // ISO Date e.g. 2024-11-24
    author: {
        name: string;
        role: string;
        verified: boolean;
    };
    valueProp?: ValueProp; // NEW: Above-the-fold value propositions
    marketComposition: MarketComposition;
    pricing: PricingIntelligence;
    supplyDemand: {
        units?: number;
        salesPerYear?: number;
        monthsSupply?: number;
        temperature: "Buyers" | "Sellers" | "Balanced";
        estDaysOnMarket: number;
        stockLevel?: string;
        insight?: string;
    };
    buyerProfile: BuyerProfile;
    ownerStability: OwnerStability;
    sellerIntelligence: SellerIntelligence;
    microMarkets: MicroMarket[];
    comparison?: SuburbComparison;
}

// ... inside Hurlingham object ...


// Part 2: Hurlingham Research (Fully Populated)

export const sellerData: Record<string, SuburbSellerData> = {
    "hurlingham": {
        suburbSlug: "hurlingham",
        headline: "Prime Central Address With Boomed Security Appeal",
        description: "Hurlingham remains a highly sought-after Sandton address favored by established families and corporate professionals, though pricing is holding firm with limited negotiation room for sellers. Strong rental demand, particularly in secure, boomed-off properties, continues to support investor interest despite moderate transaction volumes.",
        lastUpdated: "January 2026",
        author: {
            name: "Research Team",
            role: "Market Analyst",
            verified: true
        },
        valueProp: {
            fast: {
                metric: "40% faster",
                context: "Well-priced R3-3.6M properties sell within 6-8 weeks"
            },
            premium: {
                metric: "R5.2M",
                context: "Average price for 4-bedroom freehold homes"
            },
            growth: {
                metric: "+1.5%",
                context: "Modest year-on-year appreciation"
            }
        },
        marketComposition: {
            activeListings: 141,
            dominantFeatures: "Spacious freehold homes on 0.5-1 acre stands; older properties with renovation potential; modern cluster complexes emerging",
            split: {
                freehold: 95,
                sectional: 5
            }
        },
        pricing: {
            freehold: {
                avgPrice: "R5.2M",
                range: "R3.5M - R18M",
                trend: "FLAT",
                trendValue: "+1.5%"
            },
            sectional: {
                avgPrice: "R3.9M",
                range: "R2.8M - R5M",
                trend: "FLAT",
                trendValue: "+0.5%"
            },
            insight: "Low stock of vacant stands supports prices, but sellers holding firm creates mild buyer leverage."
        },
        supplyDemand: {
            estDaysOnMarket: 105,
            temperature: "Balanced",
            stockLevel: "Moderate",
            insight: "Low stock of vacant stands supports prices, but sellers holding firm on asking prices is creating mild buyer leverage for well-negotiated offers."
        },
        buyerProfile: {
            dominant: "Corporate Families & Established Professionals",
            motivations: [
                "Proximity to Sandton CBD (under 10 minutes)",
                "Secure boomed-off lifestyle with low density",
                "Established schools nearby (St. Stithians, Redhill)"
            ],
            split: [
                { label: "Owner-Occupier Families", percentage: 55 },
                { label: "Buy-to-Let Investors", percentage: 30 },
                { label: "Expatriates & Young Professionals", percentage: 15 }
            ]
        },
        ownerStability: {
            longTerm: 38,
            mediumTerm: 32,
            shortTerm: 30,
            avgOwnership: "7.2 years"
        },
        sellerIntelligence: {
            premiumDrivers: [
                "Boomed-off status with 24/7 security (commands 15-20% premium)",
                "Renovated modern kitchens with contemporary finishes",
                "Solar panels and backup power systems (load-shedding hedge)",
                "Large north-facing established gardens with mature trees",
                "Proximity to private schools (within 10-15 min drive)"
            ],
            pricingMistakes: [
                "Overpricing older homes requiring renovation",
                "Ignoring William Nicol Highway noise/traffic impact",
                "Asking above R4M without clear justification",
                "Listing generically without highlighting security/sports amenities"
            ],
            marketingAngles: [
                "Lead with boomed-off enclosure and security credentials",
                "Emphasize 'lock-up-and-go convenience' for corporate expatriates",
                "Highlight proximity to schools + Sandton CBD commute",
                "Position as 'value alternative to Sandhurst'"
            ],
            timeline: {
                wellPriced: "Top 20% sell in 4-8 weeks",
                premium: "12+ weeks (Over R4M)",
                negotiationRoom: "5-8% well-priced; 10-15% overpriced",
                bestSeason: "Spring (Sept-Nov) and late summer (Feb-Mar)"
            }
        },
        microMarkets: [
            {
                name: "Hurlingham Manor (Gated Enclave)",
                sentiment: "Positive",
                insight: "Most affordable micro-market (R2.8M-R4.5M), attracts first-time buyers and investors. Properties sell faster here."
            },
            {
                name: "Willowild (Country Feel Enclave)",
                sentiment: "Positive",
                insight: "Only accessible through Hurlingham Manor boom; largest stands (2000+ sqm) with country ambiance."
            },
            {
                name: "Main Hurlingham Proper",
                sentiment: "Neutral",
                insight: "Grand old homes on established estates; R5M-R18M range; older properties requiring investment."
            },
            {
                name: "Sandhurst Ridge & Aurora Developments",
                sentiment: "Positive",
                insight: "New cluster/townhouse complexes (2025-2026 delivery); appeals to investors seeking lock-up-and-go rental potential."
            }
        ],
        comparison: {
            competitorName: "Sandhurst",
            competitorSlug: "sandhurst",
            priceDiff: "+235% Higher",
            verdict: "Sandhurst commands 3x Hurlingham pricing due to ultra-premium positioning. Hurlingham is the strategic value alternative.",
            features: [
                { label: "Avg. House Price", us: "R5.2M", them: "R16.5M" },
                { label: "Avg Land Size", us: "1000-4000 sqm", them: "2000 sqm +" },
                { label: "Traffic Perception", us: "Moderate", them: "Minimal" },
                { label: "Security Model", us: "Boomed-off", them: "Premium estates" },
                { label: "Rental Yield", us: "10-15%", them: "Similar" }
            ]
        }
    },
    "bryanston": {
        suburbSlug: "bryanston",
        headline: "Steady Growth & Strong Rental Demand",
        description: "Bryanston remains South Africa's top transaction suburb with consistent 5% price appreciation and robust sectional title demand. High rental yields (10-15%) and strong professional buyer base create a balanced market favoring well-priced properties.",
        lastUpdated: "January 2026",
        author: { name: "Review Team", role: "Senior Analyst", verified: true },
        valueProp: {
            fast: {
                metric: "70-90 days",
                context: "Average market time for well-priced properties; top 10% sell in 6 weeks"
            },
            premium: {
                metric: "R5.2M",
                context: "Median sectional title + freehold blended average"
            },
            growth: {
                metric: "+5%",
                context: "Year-on-year price appreciation, outpacing Gauteng's 0.39%"
            }
        },

        pricing: {
            freehold: {
                avgPrice: "R6.5M",
                range: "R3M (West entry) - R40M (East luxury)",
                trend: "UP",
                trendValue: "+5%"
            },
            sectional: {
                avgPrice: "R1.8M",
                range: "R900k (studios) - R4.7M (3-bed townhouses)",
                trend: "UP",
                trendValue: "+3%"
            },
            insight: "Properties well-priced achieve 8-10% better absorption than market average."
        },
        supplyDemand: {
            estDaysOnMarket: 80,
            temperature: "Sellers",
            stockLevel: "Moderate",
            insight: "Moderate supply balanced by strong professional/family demand; new sectional title developments competing with resale stock, tightening margins for underpriced homes."
        },
        buyerProfile: {
            dominant: "Established Families & Professional Investors",
            motivations: [
                "Proximity to world-class schools (St Stithians, Redhill, Bryanston High)",
                "Lock-up-and-go security estates catering to busy professionals",
                "High rental yields (10-15%) attracting buy-to-let investors"
            ],
            split: [
                { label: "Established Families (35-49yrs)", percentage: 45 },
                { label: "Buy-to-Let Investors", percentage: 30 },
                { label: "First-Time Buyers (Sectional)", percentage: 25 }
            ]
        },
        sellerIntelligence: {
            premiumDrivers: [
                "Renovated modern kitchens with gas appliances (SMEG preferred)",
                "Solar panels with battery backup (critical given load-shedding concerns)",
                "Boomed/gated community location (safety premium commands 8-15% uplift)",
                "Proximity to top-rated schools within 2km radius"
            ],
            pricingMistakes: [
                "Overpricing freehold homes by 12-15% based on renovation spend without market comps",
                "Underestimating structural issues in older West Bryanston homes",
                "Overvaluing stands >2000sqm without considering subdivision potential"
            ],
            marketingAngles: [
                "Highlight Sandton CBD proximity (5-10min commute) for executive buyers",
                "Emphasize tree-lined suburb status (Johannesburg's urban forest accolade)",
                "Position sectional titles as 'lock-up-and-go' for expats",
                "Lead with school catchment area for family upgrades"
            ],
            timeline: {
                wellPriced: "Top 15% sell in 4-6 weeks",
                premium: "16-24 weeks (luxury estates)",
                negotiationRoom: "8-12% below asking",
                bestSeason: "Spring (Sep-Nov) and Summer (Dec-Feb)"
            }
        },
        marketComposition: {
            activeListings: 250,
            dominantFeatures: "Sectional titles dominating new supply; large freehold stands attracting developers",
            split: {
                freehold: 40,
                sectional: 60
            }
        },
        ownerStability: {
            longTerm: 45,
            mediumTerm: 30,
            shortTerm: 25,
            avgOwnership: "9 years"
        },
        microMarkets: [
            {
                name: "Bryanston East",
                sentiment: "Positive",
                insight: "Premium micro-market with freehold entry at R5M+; newer developments attracting luxury buyers."
            },
            {
                name: "Bryanston West",
                sentiment: "Neutral",
                insight: "Entry-level freehold market (R3M starts); attracts developers and value-conscious upgraders."
            },
            {
                name: "Mount Street ('Millionaire Row')",
                sentiment: "Positive",
                insight: "Ultra-luxury segment with exclusive estates. Limited supply maintains premium 20-30% pricing uplift."
            },
            {
                name: "Sectional Title Clusters (Mixed)",
                sentiment: "Positive",
                insight: "Strong demand from first-time buyers; new builds undercutting resale units by 5-10%."
            }
        ],
        comparison: {
            competitorName: "Fourways",
            competitorSlug: "fourways",
            priceDiff: "Bryanston 25-35% Higher",
            verdict: "Bryanston commands premium for school proximity; Fourways offers stronger rental yields.",
            features: [
                { label: "Avg Land Size (Freehold)", us: "2000-2500sqm", them: "1500-2000sqm" },
                { label: "Sectional Title Entry", us: "R900k", them: "R600k" },
                { label: "School Ecosystem", us: "World-class", them: "Good" },
                { label: "Rental Demand", us: "Professionals/Families", them: "Young Professionals" },
                { label: "Security (Boomed %)", us: "60-70%", them: "40-50%" },
                { label: "Development Activity", us: "Moderate", them: "High" }
            ]
        }
    },
    "sandown": {
        suburbSlug: "sandown",
        headline: "Young Professional Hub With Strong Rental Yields",
        description: "Sandown has emerged as Johannesburg's premier micro-market for first-time buyers and young professionals, with 44% of buyers aged 18-35. Strong sectional title growth (+1.66% YTD) and proximity to Sandton CBD create a buyer's market offering 8-12% negotiation room on competitively priced units.",
        lastUpdated: "January 2026",
        author: { name: "Review Team", role: "Market Analyst", verified: true },
        valueProp: {
            fast: {
                metric: "90-110 days",
                context: "Average market time; well-priced apartments sell within 4-6 weeks"
            },
            premium: {
                metric: "R2.8M",
                context: "Blended average for modern sectional titles and cluster homes"
            },
            growth: {
                metric: "+1.6%",
                context: "Sectional title YTD appreciation outpacing freehold (+1.53%)"
            }
        },
        pricing: {
            freehold: {
                avgPrice: "R4.2M",
                range: "R3.5M (clusters) - R20M (established street homes)",
                trend: "UP",
                trendValue: "+1.53%"
            },
            sectional: {
                avgPrice: "R2.09M",
                range: "R900k (studios) - R14M (luxury high-rise penthouses)",
                trend: "UP",
                trendValue: "+1.66%"
            },
            insight: "Strong sectional title growth (+1.66%) indicates clear shift toward apartment living over freehold."
        },
        supplyDemand: {
            estDaysOnMarket: 100,
            temperature: "Buyers",
            stockLevel: "Moderate",
            insight: "Buyer's market with moderate-to-high inventory of new developments creating competitive pressure on older units."
        },
        buyerProfile: {
            dominant: "Young Professionals & First-Time Buyers",
            motivations: [
                "Lock-up-and-go convenience; minimal maintenance for busy corporate professionals",
                "2km proximity to Sandton CBD reduces commute and maximizes work-life balance",
                "Strong rental yields (11-16% gross) attracting buy-to-let investors"
            ],
            split: [
                { label: "Young Professionals (18-35yrs)", percentage: 44 },
                { label: "First-Time Buyers", percentage: 28 },
                { label: "Upgraders/Families (36-49yrs)", percentage: 28 }
            ]
        },
        sellerIntelligence: {
            premiumDrivers: [
                "North-facing balconies with Sandton CBD views (10-15% uplift on high-rise units)",
                "Modern open-plan layouts with home office nooks (critical for post-COVID buyers)",
                "Backup power and solar installations (15-20% premium given load-shedding concerns)",
                "Direct Gautrain accessibility within 1km radius"
            ],
            pricingMistakes: [
                "Overpricing sectional titles by 15-18% based on comparable freehold prices",
                "Ignoring maintenance reserve fund obligations—buyers discount 3-5%",
                "Underestimating sectional title levy impact on net yield"
            ],
            marketingAngles: [
                "Emphasize Gautrain connectivity (5-10min commute to OR Tambo, Pretoria CBD)",
                "Highlight lock-up-and-go appeal for expats and frequent business travelers",
                "Lead with rental yield opportunity for investor audiences (11-16% gross benchmarking)",
                "Position proximity to Sandton CBD amenities for corporate buyers"
            ],
            timeline: {
                wellPriced: "Modern apartments in R1.8M-R3M range sell in 3-5 weeks",
                premium: "8-12 weeks (luxury penthouses)",
                negotiationRoom: "8-12% discount typical",
                bestSeason: "Summer (Dec-Feb) and spring (Sep-Nov)"
            }
        },
        marketComposition: {
            activeListings: 280,
            dominantFeatures: "Modern high-rise apartments, secure estates/clusters, mixed-use development zones",
            split: {
                freehold: 35,
                sectional: 65
            }
        },
        ownerStability: {
            longTerm: 25,
            mediumTerm: 45,
            shortTerm: 30,
            avgOwnership: "5 years"
        },
        microMarkets: [
            {
                name: "Maude Street/Patricia Road (Luxury High-Rise)",
                sentiment: "Positive",
                insight: "Ultra-premium micro-market anchored by The Leonardo. International demand maintains 5-10% price premium."
            },
            {
                name: "Central Sandown Clusters (The Finn)",
                sentiment: "Positive",
                insight: "New development clusters attracting young families. Developer pricing discipline outcompetes older resale units."
            },
            {
                name: "Willowbrook Estate",
                sentiment: "Neutral",
                insight: "Established estate living with townhouse/cluster focus. Mature buyer demographic with security preferences."
            },
            {
                name: "Street-Facing Freehold Homes",
                sentiment: "Neutral",
                insight: "Larger stands on tree-lined streets (R5M+ entry). Mixed sentiment: appeal for renovation upside vs rising commercial encroachment."
            }
        ],
        comparison: {
            competitorName: "Morningside",
            competitorSlug: "morningside",
            priceDiff: "Sandown 10-15% Lower",
            verdict: "Sandown offers better value for first-time buyers and investors; Morningside commands premium for larger family homes.",
            features: [
                { label: "Avg Sectional Title Price", us: "R2.09M", them: "R2.4M-R2.8M" },
                { label: "Buyer Age Profile", us: "44% under 35", them: "Higher proportion 40-55" },
                { label: "Rental Yield Range", us: "11-16%", them: "10-13%" },
                { label: "Days on Market", us: "90-110 days", them: "75-95 days" },
                { label: "Levy Costs (Avg)", us: "R1.8k-R3k/month", them: "R2.5k-R4.5k/month" },
                { label: "Commercial Encroachment", us: "Moderate", them: "Limited" }
            ]
        }
    },
    "sandton-cbd": {
        suburbSlug: "sandton-cbd",
        headline: "Strong Rental Yields, Buyer-Friendly Apartments",
        description: "Sandton CBD remains Africa's financial hub with resilient rental demand (6% YoY growth, 11-16% yields). However, the sales market is buyer-friendly due to oversupply, with typical negotiation margins of 8-12%.",
        lastUpdated: "January 2026",
        author: { name: "Review Team", role: "Market Analyst", verified: true },
        valueProp: {
            fast: {
                metric: "6%",
                context: "Rental growth YoY (best performance in years)"
            },
            premium: {
                metric: "R1.9M",
                context: "Average actual sale price"
            },
            growth: {
                metric: "+1.66%",
                context: "Sectional title price growth YTD"
            }
        },
        pricing: {
            freehold: {
                avgPrice: "R3.25M",
                range: "R2.7M - R8M+",
                trend: "UP",
                trendValue: "+1.53%"
            },
            sectional: {
                avgPrice: "R1.22M",
                range: "R800K - R100M (penthouses)",
                trend: "UP",
                trendValue: "+1.66%"
            },
            insight: "Hundreds of new apartment units launching create competitive pressure."
        },
        supplyDemand: {
            estDaysOnMarket: 98,
            temperature: "Buyers",
            stockLevel: "Oversupplied",
            insight: "Hundreds of new apartment units launching from developers; rental market supply-constrained."
        },
        buyerProfile: {
            dominant: "Young Professionals, Expatriates & International Investors",
            motivations: [
                "Proximity to Africa's financial hub",
                "Lifestyle amenities: Gautrain, shopping",
                "Security and 24/7 protection"
            ],
            split: [
                { label: "Young Professionals", percentage: 42 },
                { label: "International Investors", percentage: 35 },
                { label: "Families", percentage: 23 }
            ]
        },
        sellerIntelligence: {
            premiumDrivers: [
                "Solar panels + battery backup (critical)",
                "24/7 armed security, biometric access",
                "Modern kitchen finishes",
                "Gautrain proximity (3.5km walkable)"
            ],
            pricingMistakes: [
                "Overpricing by 10-15% above market",
                "Ignoring load-shedding crisis",
                "Pricing for 'luxury' in glutted market",
                "Holding property too long without adjustment"
            ],
            marketingAngles: [
                "Energy independence: Lead with solar capacity",
                "CBD lifestyle: 5-minute walk to Sandton City",
                "Investor yield: Advertise 11-16% rental yield",
                "Lock-up-and-go convenience"
            ],
            timeline: {
                wellPriced: "Competitively priced: 6-10 weeks",
                premium: "12-16 weeks (R1.9M+ ranges)",
                negotiationRoom: "8-12% below asking",
                bestSeason: "Summer (Dec-Feb)"
            }
        },
        marketComposition: {
            activeListings: 1247,
            dominantFeatures: "Apartment-heavy market: high-rise complexes and luxury penthouses",
            split: {
                freehold: 15,
                sectional: 85
            }
        },
        ownerStability: {
            longTerm: 20,
            mediumTerm: 35,
            shortTerm: 45,
            avgOwnership: "4 years"
        },
        microMarkets: [
            {
                name: "Morningside (CBD Fringe)",
                sentiment: "Positive",
                insight: "Premium proximity to CBD, exclusive apartments R1.1M-R3.3M. Gateway to CBD without noise."
            },
            {
                name: "Sandton City Core",
                sentiment: "Neutral",
                insight: "Premium penthouses (R10M-R85M). Extremely walkable. High cost of living premium."
            },
            {
                name: "Rosebank Adjacent",
                sentiment: "Positive",
                insight: "Spillover demand from Rosebank (30-40% cheaper). Gaining traction with 280 sales."
            }
        ],
        comparison: {
            competitorName: "Rosebank",
            competitorSlug: "rosebank",
            priceDiff: "Sandton +40% Premium",
            verdict: "Choose Sandton CBD for prestige and corporate access; Rosebank for value and better momentum.",
            features: [
                { label: "Average 2-Bed", us: "R3.5M - R4.0M", them: "R2.5M" },
                { label: "Median Price", us: "R1.9M", them: "R1.9M (faster)" },
                { label: "Supply Status", us: "Oversupplied", them: "Demand > Supply" },
                { label: "Rental Yield", us: "11% - 16%", them: "12% - 15%" },
                { label: "Vacancy Rate", us: "4.5% - 6%", them: "3% - 4%" }
            ]
        }
    },
    "hyde-park": {
        suburbSlug: "hyde-park",
        headline: "Ultra-Luxury Stronghold with Mixed Mid-Market Dynamics",
        description: "Hyde Park remains Johannesburg's premier address for high-net-worth buyers and international investors, with strong demand in the ultra-luxury segment (R15M+) but softer mid-market activity. Younger buyer demographics and growing sectional title demand signal shifting preferences toward lifestyle convenience and security.",
        lastUpdated: "January 2026",
        author: { name: "Review Team", role: "Market Analyst", verified: true },
        valueProp: {
            fast: {
                metric: "55.4%",
                context: "Buyers under 49 indicate younger demographic driving activity"
            },
            premium: {
                metric: "R4.7M",
                context: "Average sale price across all property types (2025)"
            },
            growth: {
                metric: "-3.2%",
                context: "YoY price contraction (R4.85M in 2024 to R4.70M in 2025)"
            }
        },
        pricing: {
            freehold: {
                avgPrice: "R10.5M",
                range: "R8M - R30M+",
                trend: "FLAT",
                trendValue: "0% to +1%"
            },
            sectional: {
                avgPrice: "R3.0M",
                range: "R1.3M - R5.0M",
                trend: "UP",
                trendValue: "+1.8%"
            },
            insight: "Mid-market inventory contracting as buyer negotiating power increases."
        },
        supplyDemand: {
            estDaysOnMarket: 105,
            temperature: "Balanced",
            stockLevel: "Moderate",
            insight: "Inventory contracting in mid-market as buyer negotiating power increases; ultra-luxury remains resilient."
        },
        buyerProfile: {
            dominant: "Corporate Executives, High-Net-Worth Professionals & International Investors",
            motivations: [
                "Proximity to Sandton CBD and commercial hubs within 6km",
                "Security, gated estates, and 24-hour guard protection",
                "Access to top-tier schools (Redhill, etc.)"
            ],
            split: [
                { label: "Corporate Families & Executives", percentage: 48 },
                { label: "International & African Investors", percentage: 27 },
                { label: "Young Professionals (Sectional)", percentage: 25 }
            ]
        },
        sellerIntelligence: {
            premiumDrivers: [
                "Full solar/backup power systems (critical for load-shedding market)",
                "Boomed roads, armed guards, 24-hour CCTV systems",
                "Renovated kitchens and modern finishes (command +10-15% premium)",
                "Proximity to Hyde Park Corner and Sandton CBD"
            ],
            pricingMistakes: [
                "Overpricing above market comps (expect 8-12% haircut)",
                "Ignoring location premiums within suburb (4th Road avg R16.9M)",
                "Underestimating buyer negotiation power in mid-market",
                "Positioning sectional title as 'luxury' when buyers see it as entry-level convenience"
            ],
            marketingAngles: [
                "Security theater: emphasize boomed status, guard house, multiple access controls",
                "School accessibility: highlight proximity to Redhill",
                "Load-shedding solution: lead with solar capacity and inverter specs",
                "Investment potential: target buy-to-let investors with rental yield data"
            ],
            timeline: {
                wellPriced: "Top 20% sell within 6-8 weeks",
                premium: "16-24 weeks (High-Value Homes)",
                negotiationRoom: "Expect 8-12% below asking price",
                bestSeason: "Spring (September-November)"
            }
        },
        marketComposition: {
            activeListings: 304,
            dominantFeatures: "Mixed portfolio: luxury freehold estates, sectional title apartments/clusters, boomed enclaves",
            split: {
                freehold: 50,
                sectional: 50
            }
        },
        ownerStability: {
            longTerm: 55,
            mediumTerm: 30,
            shortTerm: 15,
            avgOwnership: "12 years"
        },
        microMarkets: [
            {
                name: "4th Road & The Avenues",
                sentiment: "Positive",
                insight: "Most expensive enclave, average R16.9M per home. Large freehold estates attract ultra-HNW buyers."
            },
            {
                name: "Boomed Enclaves & Gated Estates",
                sentiment: "Positive",
                insight: "3-4 bed cluster homes on 450-800sqm fetch R5-7.5M. Strong demand from families."
            },
            {
                name: "Sectional Title Complexes",
                sentiment: "Positive",
                insight: "Strong buyer momentum from first-time buyers. Rental yields 11-16% in Sandton vicinity."
            },
            {
                name: "Hydewoods & Residential Clusters",
                sentiment: "Neutral",
                insight: "Mixed pricing R2.5-5M. Mid-market segment showing slight softness, longer DOM."
            },
            {
                name: "Hyde Park Corner Proximity",
                sentiment: "Positive",
                insight: "Premium positioning for retail-adjacent units. Walkability adds intangible value."
            }
        ],
        comparison: {
            competitorName: "Bryanston",
            competitorSlug: "bryanston",
            priceDiff: "Hyde Park 15-25% Higher",
            verdict: "Hyde Park commands premium on location prestige; Bryanston offers better value and broader price range.",
            features: [
                { label: "Average Freehold Price", us: "R10.5M", them: "R4.3M" },
                { label: "Buyer Age Profile", us: "55.4% under 49", them: "33% new residents" },
                { label: "Security availability", us: "High in enclaves", them: "Mixed" },
                { label: "Sectional Title Appeal", us: "Growing", them: "Stronger base" },
                { label: "International Appeal", us: "Very High", them: "Local families dominant" },
                { label: "Average DOM", us: "~105 days", them: "~60-80 days" }
            ]
        }
    },
    "morningside": {
        suburbSlug: "morningside",
        headline: "Seller's Market in Sandton's Top Suburb",
        description: "Morningside is one of Sandton's most sought-after residential markets, with strong buyer demand from young professionals and families.",
        lastUpdated: "2026-01-27",
        author: { name: "Research Team", role: "Market Analyst", verified: true },
        valueProp: {
            fast: {
                metric: "40-50%",
                context: "Well-priced homes in premium estates sell faster than market average"
            },
            premium: {
                metric: "R2.87M",
                context: "Average sale price 2024-2025 across all property types"
            },
            growth: {
                metric: "+1.5%",
                context: "Year-on-year freehold appreciation (Gauteng tracking +2.17%)"
            }
        },
        pricing: {
            freehold: {
                avgPrice: "R3.6M",
                range: "R4.2M - R12M",
                trend: "UP",
                trendValue: "+1.5%"
            },
            sectional: {
                avgPrice: "R1.96M",
                range: "R1.8M - R3.8M",
                trend: "UP",
                trendValue: "+1.66%"
            },
            insight: "Properties well-priced achieve 8-10% better absorption than market average."
        },
        supplyDemand: {
            estDaysOnMarket: 95,
            temperature: "Sellers",
            stockLevel: "Moderate",
            insight: "Morningside remains top-selling with strong buyer interest relative to available stock."
        },
        buyerProfile: {
            dominant: "Corporate Families & Upwardly Mobile Professionals (36-49)",
            motivations: [
                "Proximity to Sandton CBD and major employers",
                "Access to elite schools (Redhill, Crawford College)",
                "Security and boomed residential enclaves"
            ],
            split: [
                { label: "Families (36-49)", percentage: 42 },
                { label: "Young Professionals (25-35)", percentage: 36 },
                { label: "Investors/Buy-to-Let", percentage: 22 }
            ]
        },
        sellerIntelligence: {
            premiumDrivers: [
                "Renovated kitchens and modern finishes (commands +5-8% premium)",
                "Solar/backup power systems and energy-efficient upgrades",
                "Boomed estate positioning and 24-hour security features",
                "Proximity to Redhill School and Crawford College",
                "Mature gardens, tree-lined properties, and original architectural charm"
            ],
            pricingMistakes: [
                "Overpricing by 10%+ relative to comparable properties",
                "Ignoring Rivonia Road traffic/noise impact (5-7% discount needed)",
                "Listing sectional titles above R2.4M when sweet spot is R1.5M-R2.2M",
                "Failing to highlight school proximity and CBD commute benefits"
            ],
            marketingAngles: [
                "Highlight walking distance to Redhill School and Crawford College",
                "Emphasize lock-up-and-go security for busy professionals",
                "Position boomed estates as sanctuary from traffic",
                "Showcase proximity to Sandton City and Gautrain",
                "Target investor angle: high rental demand"
            ],
            timeline: {
                wellPriced: "Top 20% sell in 6-8 weeks",
                premium: "12-16 weeks (niche properties)",
                negotiationRoom: "8-10% below asking price",
                bestSeason: "Spring (September-November)"
            }
        },
        marketComposition: {
            activeListings: 902,
            dominantFeatures: "Mixed freehold homes, modern sectional title apartments, boomed security estates",
            split: {
                freehold: 60,
                sectional: 40
            }
        },
        ownerStability: {
            longTerm: 42,
            mediumTerm: 35,
            shortTerm: 23,
            avgOwnership: "8 years"
        },
        microMarkets: [
            {
                name: "Morningside Ext 40",
                sentiment: "Positive",
                insight: "Premium boomed enclosure commanding 8-12% price premium. Highly secure, attracts affluent families."
            },
            {
                name: "Millionaires Row (Off Rivonia Rd)",
                sentiment: "Positive",
                insight: "Prestige freehold properties on large stands. Rivonia Road noise requires 5-7% discount."
            },
            {
                name: "Morningside Hills & Apartment Complexes",
                sentiment: "Neutral",
                insight: "Sectional title apartment market. Strong rental appeal. Oversupply of older units depressing bottom-end pricing."
            },
            {
                name: "Central Morningside (Near Shopping Centre)",
                sentiment: "Positive",
                insight: "Mixed residential/commercial. Strong foot traffic. Moderate noise offset by convenience."
            }
        ],
        comparison: {
            competitorName: "Bryanston",
            competitorSlug: "bryanston",
            priceDiff: "-8% Lower (Morningside)",
            verdict: "Morningside offers similar lifestyle at 8% lower entry price. Closer to Sandton CBD (2-3 min vs 5-7 min).",
            features: [
                { label: "Avg. Freehold Price", us: "R3.6M", them: "R3.9M-R5M" },
                { label: "Avg. Sectional Title", us: "R1.96M", them: "R1.7M-R2.2M" },
                { label: "Distance to Sandton CBD", us: "2-3 min", them: "5-7 min" },
                { label: "Traffic/Congestion", us: "High", them: "Severe" },
                { label: "School Proximity", us: "Excellent", them: "Excellent" },
                { label: "Security/Boomed", us: "Mixed", them: "More widespread" },
                { label: "Market Velocity", us: "Moderate-Fast", them: "Fast" }
            ]
        }
    },
    "fourways": {
        suburbSlug: "fourways",
        headline: "Selling in Fourways: Suburban Convenience",
        lastUpdated: "2025-01-27",
        author: { name: "Research Team", role: "Market Analyst", verified: true },
        valueProp: {
            fast: {
                metric: "130 Days",
                context: "28% faster than Sandton average"
            },
            premium: {
                metric: "Value Entry",
                context: "Affordable Sandton access"
            },
            growth: {
                metric: "+3.2%",
                context: "New developments driving growth (YoY)"
            }
        },
        marketComposition: {
            activeListings: 450,
            split: { freehold: 40, sectional: 60 },
            dominantFeatures: "Modern estates, shopping access"
        },
        pricing: {
            freehold: { avgPrice: "R3.9M", range: "R2.5M - R8M", trend: "UP" },
            sectional: { avgPrice: "R2.4M", range: "R1.5M - R4M", trend: "UP" },
            insight: "High demand from first-time buyers."
        },
        supplyDemand: {
            units: 3200,
            salesPerYear: 550,
            monthsSupply: 7.0,
            temperature: "Buyers",
            estDaysOnMarket: 130
        },
        buyerProfile: {
            dominant: "First-time Buyers",
            split: [{ label: "First Buyers", percentage: 45 }, { label: "Young Families", percentage: 35 }],
            motivations: ["Mall access", "Value", "Modern estates"]
        },
        ownerStability: {
            longTerm: 30,
            mediumTerm: 40,
            shortTerm: 30,
            avgOwnership: "6 years"
        },
        sellerIntelligence: {
            premiumDrivers: ["Fourways Mall proximity", "New estates", "Modern finishes"],
            pricingMistakes: ["Overpricing older sectional titles"],
            marketingAngles: ["Affordable Sandton living", "Mall lifestyle", "Modern security estates"],
            timeline: { wellPriced: "13 weeks", premium: "22 weeks", negotiationRoom: "9%", bestSeason: "Summer" }
        },
        microMarkets: []
    },
    "rivonia": {
        suburbSlug: "rivonia",
        headline: "Densifying Urban Village With Strong Rental Demand",
        description: "Rivonia has transformed from exclusive residential enclave into a vibrant mixed-use hub with growing sectional title appeal to young professionals and investors. Strong rental demand (estimated 5,000+ unit deficit), Gautrain connectivity, and reverse-traffic commute advantages position the suburb as an attractive value play relative to Sandton CBD and Morningside.",
        lastUpdated: "January 2026",
        author: { name: "Review Team", role: "Market Analyst", verified: true },
        valueProp: {
            fast: {
                metric: "12.8%",
                context: "Rental yield on competitively priced apartments"
            },
            premium: {
                metric: "R1.15M",
                context: "Average sectional title sale price"
            },
            growth: {
                metric: "+3.0%",
                context: "Estimated annual appreciation"
            }
        },
        pricing: {
            freehold: {
                avgPrice: "R3.17M",
                range: "R2.2M - R8M+",
                trend: "UP",
                trendValue: "+5.7%"
            },
            sectional: {
                avgPrice: "R1.15M",
                range: "R650K - R1.76M",
                trend: "UP",
                trendValue: "+4.3%"
            },
            insight: "Sectional title developments densifying the suburb faster than standalone homes sell."
        },
        supplyDemand: {
            estDaysOnMarket: 98,
            temperature: "Balanced",
            stockLevel: "Moderate",
            insight: "Strong rental demand and estimated 5,000+ unit shortage in next 5 years creates underlying buyer strength."
        },
        buyerProfile: {
            dominant: "Young Professionals, Entrepreneurs & Young Families",
            motivations: [
                "Reverse-traffic commute advantage",
                "Gautrain proximity (3-5km walkable)",
                "Growing commercial hub on Rivonia Boulevard"
            ],
            split: [
                { label: "Young Professionals", percentage: 48 },
                { label: "Buy-to-Let Investors", percentage: 28 },
                { label: "Young Families", percentage: 24 }
            ]
        },
        sellerIntelligence: {
            premiumDrivers: [
                "Sectional title convenience",
                "Gautrain walkability (3-5km)",
                "Modern apartment developments with full amenities",
                "Nearby schools (Rivonia Primary)"
            ],
            pricingMistakes: [
                "Overpricing to 'leave negotiation room'",
                "Not highlighting rental income potential",
                "Underestimating Gautrain proximity value",
                "Failing to emphasize sectional title tax incentives"
            ],
            marketingAngles: [
                "Rental yield focus: Market as investment property",
                "Commute savings: Highlight reverse-traffic advantage",
                "Densification upside: Position as emerging mixed-use hub",
                "Value relative to Sandton: Emphasize 40-50% cheaper"
            ],
            timeline: {
                wellPriced: "Competitively priced sectional titles sell in 8-12 weeks",
                premium: "16+ weeks (Overpriced Inventory)",
                negotiationRoom: "7-12% below asking price",
                bestSeason: "Spring (Sep-Nov) and Summer (Dec-Feb)"
            }
        },
        marketComposition: {
            activeListings: 370,
            dominantFeatures: "Increasingly mixed: sectional title apartments and townhouses, standalone freehold homes, growing commercial properties",
            split: {
                freehold: 38,
                sectional: 62
            }
        },
        ownerStability: {
            longTerm: 35,
            mediumTerm: 40,
            shortTerm: 25,
            avgOwnership: "7 years"
        },
        microMarkets: [
            {
                name: "Rivonia Boulevard / Commercial Hub",
                sentiment: "Positive",
                insight: "Densifying commercial strip with offices, retail, and restaurants. Mixed-use developments commanding premium."
            },
            {
                name: "Gated Residential Enclaves",
                sentiment: "Positive",
                insight: "Secure boomed areas with 8-15 freehold homes per enclave. Premium for security and privacy."
            },
            {
                name: "Modern Apartment Developments",
                sentiment: "Positive",
                insight: "New sectional titles with high amenity value. R1.15M-R1.76M entry point attracts young professionals."
            },
            {
                name: "Established Residential Streets",
                sentiment: "Neutral",
                insight: "Older standalone homes on large stands. Character appeal but aging infrastructure. Renovation potential."
            }
        ],
        comparison: {
            competitorName: "Morningside",
            competitorSlug: "morningside",
            priceDiff: "-40% to -50% Cheaper",
            verdict: "Rivonia offers superior value for young professionals and investors versus premium-positioned Morningside.",
            features: [
                { label: "Average 1-Bed", us: "R900K - R1.1M", "them": "R1.5M - R2.0M" },
                { label: "Rental Yield", us: "12-16% (higher)", "them": "10-12% (lower)" },
                { label: "Property Type Mix", us: "62% sectional", "them": "40% sectional" },
                { label: "Commercial Vibrancy", us: "Growing", "them": "Residential-focused" },
                { label: "Days on Market", us: "~95 days", "them": "~75 days" }
            ]
        }
    },
    "craighall-park": {
        suburbSlug: "craighall-park",
        headline: "Stable Mid-Market with Strong Female Buyer Demand",
        description: "Craighall Park maintains consistent sales momentum with balanced supply-demand dynamics and increasing interest from security-conscious single women buyers. Median prices have risen 13% year-on-year, signaling modest appreciation in a stable, family-oriented market.",
        lastUpdated: "January 2026",
        author: { name: "Review Team", role: "Market Analyst", verified: true },
        valueProp: {
            fast: {
                metric: "70 days",
                context: "Competitive pace for well-priced properties; top 10% of homes sell within 6 weeks"
            },
            premium: {
                metric: "R3.35M",
                context: "Median freehold price; strong value vs Sandton/Bryanston neighbors"
            },
            growth: {
                metric: "+13%",
                context: "Median price growth 2024-2025 (R2.45M to R2.78M); modest YoY appreciation"
            }
        },
        marketComposition: {
            activeListings: 65,
            dominantFeatures: "Large stands (1000-2000sqm), mature gardens, swimming pools; mixed ages from heritage homes to contemporary builds and new clusters",
            split: {
                freehold: 51,
                sectional: 49
            }
        },
        pricing: {
            freehold: {
                avgPrice: "R3.35M",
                range: "R2.8M - R8.0M",
                trend: "UP",
                trendValue: "+3%"
            },
            sectional: {
                avgPrice: "R1.5M",
                range: "R1.0M - R2.97M",
                trend: "UP",
                trendValue: "+2%"
            },
            insight: "Stable mid-market with strong value proposition compared to premium neighbors."
        },
        supplyDemand: {
            estDaysOnMarket: 82,
            temperature: "Balanced",
            stockLevel: "Moderate",
            insight: "Consistent 173 annual sales with stable inventory creates balanced conditions; active listings ~60-70 properties suggest moderate competition without oversupply."
        },
        buyerProfile: {
            dominant: "Security-Conscious Single Women & Established Families",
            motivations: [
                "Enhanced security features (biometric access, panic rooms, armed response)",
                "Proximity to top schools and family amenities",
                "Value for money vs premium neighbors (Sandton, Hyde Park, Sandhurst)",
                "Accessible lock-up-and-go sectional options for professionals",
                "Established neighborhood with large stands and mature gardens"
            ],
            split: [
                { label: "Single Women (R3M+)", percentage: 60 },
                { label: "Established Families", percentage: 25 },
                { label: "Young Professionals/Investors", percentage: 15 }
            ]
        },
        ownerStability: {
            longTerm: 60,
            mediumTerm: 25,
            shortTerm: 15,
            avgOwnership: "15 years"
        },
        sellerIntelligence: {
            premiumDrivers: [
                "Multi-layered security systems (biometric, armed response, panic rooms)",
                "Renovated kitchens and modern finishes on heritage homes",
                "Solar power + battery backup + water systems (deal-breaker for buyers)",
                "Large stands (1000-2000sqm) with mature gardens and pools",
                "Proximity to top-rated schools (Redhill, Crawford, St Stithians)"
            ],
            pricingMistakes: [
                "Overpricing older homes without highlighting renovation/security upgrades",
                "Failing to emphasize security features demanded by female buyers (70-80% priority)",
                "Overlooking subdivision potential on large stands",
                "Not highlighting proximity to amenities (Gautrain, Hyde Park, Delta Park)",
                "Underestimating buyer's focus on utility resilience (power, water backup)"
            ],
            marketingAngles: [
                "Target security-conscious single women with emphasis on panic rooms, biometric access",
                "Highlight family lifestyle: established suburb with low crime profile vs emerging areas",
                "Emphasize value proposition: R3-4M buys large family home vs R5-7M+ in Bryanston/Hyde Park",
                "Stress school proximity and walkability to Delta Park, cafes, and local shops",
                "Position solar/backup power as essential feature, not luxury upgrade"
            ],
            timeline: {
                wellPriced: "Top tier properties (R3-4M) sell within 4-6 weeks",
                premium: "8+ weeks",
                negotiationRoom: "8-12% typical discount",
                bestSeason: "Spring (September-November)"
            }
        },
        microMarkets: [
            {
                name: "Boomed Estate Enclaves (Glen Lovat, St Albans)",
                sentiment: "Positive",
                insight: "Premium-priced clusters attracting luxury buyers; commands 10-15% premium over open-market freehold."
            },
            {
                name: "Jan Smuts Avenue Corridor",
                sentiment: "Positive",
                insight: "High foot traffic, retail proximity, commercial activity; older apartment blocks popular with investors."
            },
            {
                name: "Lancaster Avenue / Eastern Neighborhoods",
                sentiment: "Neutral",
                insight: "Mixed inventory of renovated heritage homes and modest properties; attracted renovators and value seekers."
            },
            {
                name: "Craighall Park Road / Southern Edge",
                sentiment: "Negative",
                insight: "Noise from traffic on main artery affects pricing; pricing reflects 5-8% discount vs quiet interior streets."
            }
        ],
        comparison: {
            competitorName: "Parkhurst",
            competitorSlug: "parkhurst",
            priceDiff: "-5% Lower",
            verdict: "Craighall Park offers superior value and larger stands; Parkhurst commands premium for trendier Fourth Avenue lifestyle.",
            features: [
                { label: "Median Freehold Price", us: "R3.35M", them: "R3.1M" },
                { label: "Avg Land Size", us: "1500-2000sqm", them: "500-800sqm" },
                { label: "Sales Volume (2024)", us: "167 properties", them: "195 properties" },
                { label: "Days on Market", us: "82 days", them: "70 days" },
                { label: "Sectional Title Prev.", us: "49%", them: "35%" },
                { label: "Buyer Profile", us: "Families + Security", them: "Young Pros" },
                { label: "Market Sentiment", us: "Stable/Balanced", them: "Sellers" }
            ]
        }
    },
    "inanda": {
        suburbSlug: "inanda",
        headline: "Premium Family Haven with Growth Trajectory",
        description: "Inanda commands premium pricing (avg R5.9M-R7.5M) driven by large estate properties, top-tier schools, and low-density controls. Strong sellers' market emerging with limited stock and renewed buyer interest despite long days-on-market in lower segments.",
        lastUpdated: "January 2026",
        author: { name: "Research Team", role: "Market Analyst", verified: true },
        valueProp: {
            fast: {
                metric: "45-50%",
                context: "Premium boomed estates sell faster; older freehold homes take 110+ days"
            },
            premium: {
                metric: "R7.5M",
                context: "2025 average sale price, up from R5.9M in 2024"
            },
            growth: {
                metric: "+26.5%",
                context: "2024-2025 price appreciation driven by limited supply and renewed demand"
            }
        },
        marketComposition: {
            activeListings: 35,
            dominantFeatures: "Large freehold estates with established gardens, significant older homes requiring modernization, limited new development",
            split: {
                freehold: 86,
                sectional: 14
            }
        },
        pricing: {
            freehold: {
                avgPrice: "R6.5M",
                range: "R5M - R30M",
                trend: "UP",
                trendValue: "+3.2%"
            },
            sectional: {
                avgPrice: "R2.2M",
                range: "R1.2M - R4.5M",
                trend: "FLAT",
                trendValue: "-0.5%"
            },
            insight: "Property values recovering strongly; 1500+ sqm stands command R8M-R12M minimums."
        },
        supplyDemand: {
            estDaysOnMarket: 98,
            temperature: "Sellers",
            stockLevel: "Low",
            insight: "Moratorium on development enforced by residents' association maintains scarcity; limited freehold inventory drives strong pricing power."
        },
        buyerProfile: {
            dominant: "Executive Families & Affluent Professionals",
            motivations: [
                "Access to top-tier schools (Redhill, St David's Marist, Hyde Park High)",
                "Prestigious Inanda Club and Wanderers Club proximity",
                "Large stands (1400+ sqm) with country-style tranquility"
            ],
            split: [
                { label: "Family Buyers (with children)", percentage: 50 },
                { label: "Corporate Professionals/Executives", percentage: 35 },
                { label: "Investors/Downsizers", percentage: 15 }
            ]
        },
        ownerStability: {
            longTerm: 50,
            mediumTerm: 30,
            shortTerm: 20,
            avgOwnership: "11 years"
        },
        sellerIntelligence: {
            premiumDrivers: [
                "Large established gardens and tree-lined properties",
                "Backup power systems and renewable energy (solar trending +25%)",
                "Modern renovations with open-plan entertainment areas",
                "Estate living in boomed communities (One Forrest Road, Inanda Park)",
                "Proximity to top schools and the Inanda Club"
            ],
            pricingMistakes: [
                "Overestimating value of older, unmodernized homes—buyers pay 12-15% premium for fully renovated properties",
                "Ignoring days-on-market (DOM) thresholds—homes over 120 days trigger renegotiation signals",
                "Underpricing large plots—1500+ sqm stands command R8M-R12M minimums if properly presented"
            ],
            marketingAngles: [
                "Emphasize exclusivity: limited 246-property suburb with strict development controls",
                "Highlight lifestyle: 'Country living within Sandton—near top schools, clubs, and highways'",
                "Position estate homes as 'generational assets'—showcase rental yields (10%-15%) for investment-minded buyers"
            ],
            timeline: {
                wellPriced: "Top 15% sell in 45-60 days",
                premium: "55-75 days (Premium Estates R8M+)",
                negotiationRoom: "6-10% below asking",
                bestSeason: "Spring (Sep-Nov) and early summer (Dec-Jan)"
            }
        },
        microMarkets: [
            {
                name: "One Forrest Road Estate",
                sentiment: "Positive",
                insight: "Ultra-premium security estate commanding R16M-R29.5M; modern design-built homes with full smart automation. Fastest-moving segment."
            },
            {
                name: "Inanda Park (Sectional Title Complex)",
                sentiment: "Neutral",
                insight: "Only sectional complex in suburb with units ranging R1.8M-R4M. Limited inventory; rental-friendly market. Slow turnover due to owner-occupancy."
            },
            {
                name: "Inanda Club Surrounds (Forest Road Cluster)",
                sentiment: "Positive",
                insight: "Tree-lined streets, equestrian access, country character. Appeals to families prioritizing lifestyle over density. Properties R5M-R12M move steadily."
            },
            {
                name: "Mid-Range Freeholds (Boundary Road, 6th Avenue)",
                sentiment: "Neutral",
                insight: "R4.5M-R8M homes; older stock requiring modernization. Longer hold times unless significantly upgraded. Good entry point for developers."
            }
        ],
        comparison: {
            competitorName: "Morningside",
            competitorSlug: "morningside",
            priceDiff: "+8-12% Lower in Inanda",
            verdict: "Inanda offers comparable lifestyle amenities and schools but at 8-12% discount to adjacent Morningside. More land; fewer new developments.",
            features: [
                { label: "Avg. Freehold Price", us: "R6.5M", them: "R7.5M" },
                { label: "Avg. Land Size", us: "1,500-2,000 sqm", them: "1,000-1,500 sqm" },
                { label: "Days on Market", us: "98 days", them: "75 days" },
                { label: "School Proximity", us: "Redhill, St David's", them: "Crawford, Redhill" },
                { label: "Traffic/Noise", us: "Minimal", them: "Moderate" },
                { label: "Security Character", us: "Estate + boomed", them: "Mixed" }
            ]
        }
    },
    "woodmead": {
        suburbSlug: "woodmead",
        headline: "Strong Recovery: Executive Estates & Investment Appeal",
        description: "Woodmead is experiencing robust market momentum with 2025 sales up 83% year-on-year, driven by property appreciation (+19% YoY) and renewed investor interest. Strong rental demand and boomed estate security make it attractive for corporate tenants and families seeking established suburban living with commercial proximity.",
        lastUpdated: "January 2026",
        author: {
            name: "Research Team",
            role: "Market Analyst",
            verified: true
        },
        valueProp: {
            fast: {
                metric: "+83%",
                context: "Sales volume surge 2024-2025"
            },
            premium: {
                metric: "R3.82M",
                context: "2025 avg selling price"
            },
            growth: {
                metric: "+19.3%",
                context: "Year-on-year appreciation"
            }
        },
        marketComposition: {
            activeListings: 80,
            dominantFeatures: "Large stands (1000-4000 sqm), older freestanding homes, established estates",
            split: {
                freehold: 62,
                sectional: 38
            }
        },
        pricing: {
            freehold: {
                avgPrice: "R3.8M - R4.5M",
                range: "R2.5M - R10.9M",
                trend: "UP",
                trendValue: "+19.3%"
            },
            sectional: {
                avgPrice: "R1.5M",
                range: "R960K - R2.75M",
                trend: "UP",
                trendValue: "+1.7%"
            },
            insight: "Property values recovering strongly; freehold up +19% YoY."
        },
        supplyDemand: {
            estDaysOnMarket: 98,
            temperature: "Sellers",
            stockLevel: "Low",
            salesPerYear: 130,
            insight: "Limited land availability suppressing new supply; older apartment oversupply keeps sectional title growth modest while freehold estates command appreciation."
        },
        buyerProfile: {
            dominant: "Corporate Families & Upwardly Mobile Executives",
            motivations: [
                "Proximity to Sandton CBD and corporate offices",
                "Secure boomed estates with family amenities",
                "Access to premium schools and retail centers",
                "Strong rental yield potential for investors"
            ],
            split: [
                { label: "Families", percentage: 40 },
                { label: "Investors", percentage: 35 },
                { label: "Young Professionals", percentage: 25 }
            ]
        },
        ownerStability: {
            longTerm: 28,
            mediumTerm: 42,
            shortTerm: 30,
            avgOwnership: "5 years"
        },
        sellerIntelligence: {
            premiumDrivers: [
                "Solar/backup power systems (critical post-loadshedding era)",
                "Renovated kitchens with modern finishes",
                "Boomed/secure gated estate location",
                "Large stands (1000+ sqm) with mature gardens",
                "Proximity to Country Club Johannesburg and schools"
            ],
            pricingMistakes: [
                "Overpricing aged sectional title without major refurbishment",
                "Ignoring traffic noise impact from Woodmead Road corridor",
                "Underestimating backup power cost savings (premium justification)",
                "Listing without professional staging in competitive mid-range"
            ],
            marketingAngles: [
                "Highlight 'Energy resilience' & loadshedding protection (solar systems)",
                "Emphasize short commute to Sandton CBD & major highways (M1/N1 access)",
                "Position as family-safe with boomed security & school access",
                "Lead with rental income potential (12-13% gross yield for investors)"
            ],
            timeline: {
                wellPriced: "Top 20% sell within 6-8 weeks",
                premium: "12+ weeks (Premium)",
                negotiationRoom: "10-15% mid-range; 8-10% premium",
                bestSeason: "Spring (Sep-Nov) & Summer (Dec-Feb)"
            }
        },
        microMarkets: [
            {
                name: "Sandton Country Club Estate",
                sentiment: "Positive",
                insight: "Gated luxury lifestyle estate with premium homes (R5M-R10M+), world-class CCJ golf facility."
            },
            {
                name: "Woodmead Springs (Boomed Riverside)",
                sentiment: "Positive",
                insight: "Secure boomed area bordering Jukskei River; appeals to families seeking nature-integrated security."
            },
            {
                name: "Khyber Rock Cluster (East Woodmead)",
                sentiment: "Positive",
                insight: "Adjacent ultra-premium micro-market; exceptional homes on smaller high-value stands; trends toward R6M+."
            },
            {
                name: "Woodmead Manor & Pinehurst",
                sentiment: "Neutral",
                insight: "Older apartment complexes with strong rental base; steady investor demand despite outdated architecture."
            },
            {
                name: "Woodmead Corporate Node",
                sentiment: "Neutral",
                insight: "Residential near office parks; convenience for corporate tenants but traffic & noise trade-offs."
            }
        ],
        comparison: {
            competitorName: "Morningside, Sandton",
            competitorSlug: "morningside",
            priceDiff: "12% Lower",
            verdict: "Woodmead offers better value for families seeking established suburbs with boomed security and lower price point.",
            features: [
                { label: "Avg. Freehold Price", us: "R3.8M-R4.5M", them: "R4.4M-R5.5M" },
                { label: "Avg. Land Size", us: "1200-1500 sqm", them: "900-1200 sqm" },
                { label: "Traffic/Noise", us: "Moderate", them: "Low" },
                { label: "Security", us: "Boomed estates common", them: "High-end gated" },
                { label: "School Access", us: "King David Primary", them: "Redhill, Crawford" },
                { label: "Rental Yield", us: "12-13%", them: "11-12%" },
                { label: "Demographics", us: "Corporate families", them: "Executives" }
            ]
        }
    },
    "benmore-gardens": {
        suburbSlug: "benmore-gardens",
        headline: "Premium Security, Established Prestige, Steady Rental Demand",
        description: "Benmore Gardens remains a high-demand prestige enclave in Sandton with strong rental fundamentals (11-13% gross yields) and established owner demographics (45% owned 11+ years). Boomed security estates command premium positioning; steady buyer interest offset by longer DOM (108-115 days) in premium segment, indicating balanced seller-buyer dynamics.",
        lastUpdated: "January 2026",
        author: { name: "Review Team", role: "Senior Analyst", verified: true },
        valueProp: {
            fast: {
                metric: "Balanced",
                context: "Premium location commands steady demand; 108-115 days DOM reflects affluent market pace"
            },
            premium: {
                metric: "R7.52M",
                context: "Blended avg selling price (Jan 2026); freehold R3.75M-R10M+, sectional R1.15M-R2.8M"
            },
            growth: {
                metric: "+2-3%",
                context: "Conservative appreciation; stable prestige market with established ownership base"
            }
        },
        marketComposition: {
            activeListings: 112,
            dominantFeatures: "Boomed security enclaves, family homes on large stands (1000-2000sqm), sectional-title clusters/townhouses",
            split: {
                freehold: 55,
                sectional: 45
            }
        },
        pricing: {
            freehold: {
                avgPrice: "R5.8M - R6.8M",
                range: "R3.75M - R10.5M",
                trend: "FLAT",
                trendValue: "+2.5%"
            },
            sectional: {
                avgPrice: "R1.5M - R1.85M",
                range: "R790K - R3.1M",
                trend: "FLAT",
                trendValue: "+1.8%"
            },
            insight: "Established prestige enclave with stable pricing; premium segment shows resilience."
        },
        supplyDemand: {
            estDaysOnMarket: 110,
            temperature: "Balanced",
            stockLevel: "Moderate",
            insight: "Established prestige suburb with boutique inventory; strong corporate/investor demand balanced by limited new stock and longer selling cycles in premium segment."
        },
        buyerProfile: {
            dominant: "Established Corporate Families & Premium Investors",
            motivations: [
                "High-security boomed enclaves (strict gated access control)",
                "Proximity to Sandton CBD (walking distance to offices/retail)",
                "Rental yield fundamentals (11-13% gross, strong corporate tenant demand)",
                "Premium family lifestyle with schools, parks, shopping (Benmore Centre refurb)",
                "Long-term value retention in established prestige enclave"
            ],
            split: [
                { label: "Established Families", percentage: 42 },
                { label: "Investment Buyers (Rental)", percentage: 28 },
                { label: "Corporate Expats/Temporary", percentage: 18 }
            ]
        },
        ownerStability: {
            longTerm: 45,
            mediumTerm: 32,
            shortTerm: 20,
            avgOwnership: "9 years"
        },
        sellerIntelligence: {
            premiumDrivers: [
                "Boomed security enclave (especially Waterstone Estate Extension 6)",
                "Large stands (1000-2000+ sqm, rare in inner Sandton)",
                "Modern renovated homes with pools, kitchens, outdoor entertainment",
                "Solar systems & backup power (load-shedding resilience premium)",
                "CBD proximity (500m-1km to Sandton offices, Benmore Shopping Centre)"
            ],
            pricingMistakes: [
                "Overpricing apartments without modern finishes in saturated R1.5M-R1.8M band",
                "Ignoring boomed security premium (Extension 6 Waterstone commands 12-15% over Extension 3)",
                "Underestimating corporate/expatriate rental demand (furnished apartments yield 12-13%)",
                "Failing to highlight refurbishment costs saved (solar, modern kitchens justify premium)"
            ],
            marketingAngles: [
                "Lead with 'Premium Security Prestige': Emphasize boomed enclave access control",
                "Highlight 'CBD Walkable Location': 500m-1km to Sandton offices",
                "Position for Investors: 'Corporate Rental Stronghold' (11-13% gross yields)",
                "Emphasize 'Infrastructure Investment': Benmore Shopping Centre refurbishment"
            ],
            timeline: {
                wellPriced: "8-12 weeks (standard)",
                premium: "12-16 weeks (premium R6M+)",
                negotiationRoom: "10-15% (freehold), 12-18% (apts)",
                bestSeason: "Spring (Sep-Nov) & Summer (Dec-Feb)"
            }
        },
        microMarkets: [
            {
                name: "Waterstone Estate (Extension 6)",
                sentiment: "Positive",
                insight: "Newer, premium boomed enclave commanding 12-15% premium over Extension 3; modern architecture, strict security."
            },
            {
                name: "Extension 3 Main Benmore",
                sentiment: "Positive",
                insight: "Established mixed-use enclave; townhouses, freehold homes, apartments; diverse buyer base; stable long-term ownership."
            },
            {
                name: "Drakenstein Complex",
                sentiment: "Neutral",
                insight: "Secure cluster with 2-3 bed townhouses; family-oriented; steady rental demand; modest appreciation."
            },
            {
                name: "Villa la Valle",
                sentiment: "Positive",
                insight: "Modern duplex/townhouse complex; young family focus; design finishes; lower maintenance appeal; rental yield 10-11%."
            },
            {
                name: "Waterstone Street (Premium Freehold)",
                sentiment: "Positive",
                insight: "Large family homes on 1000-3000sqm stands; pool, gardens; premium market segment attracting UHNW families."
            }
        ],
        comparison: {
            competitorName: "Morningside",
            competitorSlug: "morningside",
            priceDiff: "Comparable (Mixed)",
            verdict: "Benmore Gardens offers boomed security enclave prestige and CBD walkability appealing to established families & corporate renters; Morningside provides more open, cosmopolitan feel.",
            features: [
                { label: "Avg. Freehold Price", us: "R5.8M-R6.8M", them: "R4.4M-R5.5M" },
                { label: "Avg. Sectional Title", us: "R1.5M-R1.85M", them: "R1.3M-R1.7M" },
                { label: "Security Model", us: "Boomed gated enclaves (strict)", them: "Mixed boomed + open" },
                { label: "Rental Yield", us: "11-13% (corporate)", them: "10-12% (mixed)" },
                { label: "Days on Market", us: "108-115 days", them: "95-105 days" },
                { label: "Owner Tenure", us: "45% owned 11+ years", them: "35% long-term" },
                { label: "School Access", us: "Crawford, Montrose", them: "Crawford, Redhill" }
            ]
        }
    },
    "river-club": {
        suburbSlug: "river-club",
        headline: "Tranquil Luxury with Proven Investment Returns",
        description: "River Club remains a secure, tree-lined enclave commanding strong pricing across both freehold and sectional title segments. Market sentiment favours well-positioned properties with modern amenities, backed by consistent demand from families and young professionals seeking proximity to Sandton without downtown congestion.",
        lastUpdated: "January 2026",
        author: { name: "Review Team", role: "Market Analyst", verified: true },
        valueProp: {
            fast: {
                metric: "45%",
                context: "Properties in top 20% of asking price sell in under 60 days"
            },
            premium: {
                metric: "R4.1M",
                context: "Average transaction price across all segments"
            },
            growth: {
                metric: "+2.8%",
                context: "Year-on-year appreciation (2024-2025)"
            }
        },
        marketComposition: {
            activeListings: 97,
            dominantFeatures: "Mix of luxury freeholds (2,000+ sqm), modern townhouse clusters, and secure sectional title complexes.",
            split: {
                freehold: 42,
                sectional: 58
            }
        },
        pricing: {
            freehold: {
                avgPrice: "R3.3M",
                range: "R2.8M - R14.5M",
                trend: "UP",
                trendValue: "+2.1%"
            },
            sectional: {
                avgPrice: "R2.2M",
                range: "R849K - R4.75M",
                trend: "UP",
                trendValue: "+3.5%"
            },
            insight: "Sectional title demand exceeds freehold supply; moderate inventory levels favour well-priced units."
        },
        supplyDemand: {
            estDaysOnMarket: 85,
            temperature: "Balanced",
            stockLevel: "Moderate",
            insight: "Sectional title demand exceeds freehold supply; moderate inventory levels favour well-priced, well-maintained units."
        },
        buyerProfile: {
            dominant: "Corporate Families & Ambitious Young Professionals",
            motivations: [
                "Proximity to Sandton CBD without inner-city lifestyle",
                "Secure estates and gated enclaves for family safety",
                "Access to top-tier schools (Redhill, Crawford, St Stithians)"
            ],
            split: [
                { label: "Family Buyers (35-55)", percentage: 48 },
                { label: "First-Time Buyers", percentage: 35 },
                { label: "Buy-to-Let Investors", percentage: 17 }
            ]
        },
        ownerStability: {
            longTerm: 35,
            mediumTerm: 40,
            shortTerm: 25,
            avgOwnership: "8 years"
        },
        sellerIntelligence: {
            premiumDrivers: [
                "Solar power with battery backup (commands 7-12% premium)",
                "Renovated kitchens and modern finishes",
                "Boomed road access and proximity to River Club Golf Course"
            ],
            pricingMistakes: [
                "Overpricing older freehold homes without renovation",
                "Ignoring buyer preferences for energy independence",
                "Failing to highlight secure estate status"
            ],
            marketingAngles: [
                "Emphasize 10-15 minute commute to Sandton CBD",
                "Position as 'green sanctuary with modern security'",
                "Highlight proximity to premium schools and family amenities"
            ],
            timeline: {
                wellPriced: "Top 15% sell within 4-5 weeks",
                premium: "8+ weeks",
                negotiationRoom: "10-14% below ask",
                bestSeason: "Spring (September-November)"
            }
        },
        microMarkets: [
            {
                name: "Golf Course Perimeter (Freehold)",
                sentiment: "Positive",
                insight: "Premium positioning overlooking River Club Golf Course commands 18-25% price premiums. Average price R5.2M-R8M."
            },
            {
                name: "Kings Creek & Panner's Lane",
                sentiment: "Positive",
                insight: "Hotspot for first-time buyers and young families. High concentration of 2-3 bedroom modern townhouses."
            },
            {
                name: "Borrowdale Road Area (Mixed)",
                sentiment: "Neutral",
                insight: "Transitional market with mix of older freeholds and newer sectional developments. Traffic noise affects sentiment."
            },
            {
                name: "Estate Complexes (Secure Enclaves)",
                sentiment: "Positive",
                insight: "Gated lifestyle estates commanding 12-18% price premiums. Strong appeal to security-conscious buyers."
            }
        ],
        comparison: {
            competitorName: "Morningside",
            competitorSlug: "morningside",
            priceDiff: "+22% Higher in Morningside",
            verdict: "Morningside commands premium for exclusivity; River Club offers 30-40% better value for comparable security/lifestyle.",
            features: [
                { label: "Avg. Freehold Price", us: "R3.3M", them: "R4.2M-R12M" },
                { label: "Avg. Stand Size", us: "1,500-2,500 sqm", them: "1,200-2,000 sqm" },
                { label: "Commute to Sandton", us: "10-15 mins", them: "8-12 mins" },
                { label: "Security Status", us: "Boomed/Mixed", them: "Primarily Boomed" },
                { label: "Sectional Title Avg", us: "R2.2M", them: "R2.8M-R3.5M" }
            ]
        }
    },
    "atholl": {
        suburbSlug: "atholl",
        headline: "Premium Family Hub Near Sandton CBD",
        description: "Atholl remains Sandton's most accessible luxury suburb, attracting young families and professionals with its proximity to the financial district and established amenities. Sectional titles are gaining traction, but older freehold homes on large stands are appreciating steadily as renovation demand grows.",
        lastUpdated: "January 2026",
        author: {
            name: "Research Team",
            role: "Market Analyst",
            verified: true
        },
        valueProp: {
            fast: {
                metric: "85-110 days",
                context: "Moderate velocity; well-priced properties in top 20% move under 8 weeks"
            },
            premium: {
                metric: "R7.2M",
                context: "Avg. freehold house price; sectional titles avg R2.1M"
            },
            growth: {
                metric: "+2.1%",
                context: "Conservative but stable YoY appreciation; higher growth in renovated properties"
            }
        },
        marketComposition: {
            activeListings: 145,
            dominantFeatures: "Large stands (1000-2000 sqm) with mature trees; mix of older gracious homes and newer sectional title developments",
            split: {
                freehold: 42,
                sectional: 58
            }
        },
        pricing: {
            freehold: {
                avgPrice: "R7.2M",
                range: "R4.9M - R18M",
                trend: "UP",
                trendValue: "+2.1%"
            },
            sectional: {
                avgPrice: "R2.1M",
                range: "R1.35M - R3.2M",
                trend: "UP",
                trendValue: "+1.7%"
            },
            insight: "Freeholds command premium; sectional titles increasingly competitive with strong investor demand."
        },
        supplyDemand: {
            estDaysOnMarket: 105,
            temperature: "Balanced",
            stockLevel: "Moderate",
            insight: "Sufficient stock across both segments; well-priced freeholds sell faster, older homes face longer DOM; sectional titles increasingly competitive."
        },
        buyerProfile: {
            dominant: "Young Professionals & Upgrading Families",
            motivations: [
                "Proximity to Sandton CBD and Rosebank offices",
                "Quality schools (Crawford, St David's) within easy reach",
                "Established suburb with mature trees and peaceful atmosphere"
            ],
            split: [
                { label: "Families (primary residence)", percentage: 40 },
                { label: "Investors (sectional title focus)", percentage: 32 },
                { label: "Young professionals/upgraders", percentage: 28 }
            ]
        },
        ownerStability: {
            longTerm: 35,
            mediumTerm: 40,
            shortTerm: 25,
            avgOwnership: "8-10 years"
        },
        sellerIntelligence: {
            premiumDrivers: [
                "Backup power (solar/inverter) – commands +12% premium",
                "Renovated modern kitchens and open-plan living",
                "Larger stands (1500+ sqm) with mature gardens",
                "Boomed/gated security with 24/7 patrols",
                "Proximity to Atholl Square and Bluebird Shopping Centre"
            ],
            pricingMistakes: [
                "Overpricing older homes; expect 15-18% gap between asking and actual sales",
                "Ignoring renovation potential – buyers expect modern finishes or price accordingly",
                "Underestimating transfer cost impact on buyer affordability",
                "Failing to highlight proximity to schools and workplaces (key value drivers)"
            ],
            marketingAngles: [
                "Lead with 'Minutes to Sandton CBD' and traffic-saving commute angle",
                "Emphasise established suburban peace vs. dense inner-city options",
                "Highlight investment potential of vacant land for subdivision/cluster development",
                "Stress security features: boomed roads, estate management, active residents' association",
                "Market to expatriates (strong demand post-FATF grey list removal)"
            ],
            timeline: {
                wellPriced: "Top-tier properties (realistically priced) sell in 6-8 weeks",
                premium: "Premium properties may take 3-4 months",
                negotiationRoom: "Plan for 8-12% below asking price in negotiations",
                bestSeason: "Spring (Sep-Nov); Summer (Nov-Jan) also strong due to year-end moves"
            }
        },
        microMarkets: [
            {
                name: "Atholl Oaklands / Bluebird precinct",
                sentiment: "Positive",
                insight: "High foot traffic, proximity to shopping and restaurants drives premium pricing (+5-8%) and faster sales; ideal for younger buyers seeking lifestyle amenity access."
            },
            {
                name: "Pretoria Avenue estates / Winston Ridge",
                sentiment: "Positive",
                insight: "Established gated developments with mature landscaping attract premium family demographics; solid rental demand and longer holding periods."
            },
            {
                name: "The Wahlberg / The Tungsten developments",
                sentiment: "Positive",
                insight: "Modern cluster homes (R8.4M-R12M) with backup power and security attract post-2024 buyers; strong uptake among professionals avoiding maintenance burden."
            },
            {
                name: "Atholl Road corridor (northern boundary)",
                sentiment: "Neutral",
                insight: "Traffic noise from main arterial road suppresses prices 5-8%; suitable for investors prioritizing yield over lifestyle, less attractive for families."
            },
            {
                name: "Subdivided/developer land parcels",
                sentiment: "Positive",
                insight: "Rezoned properties with subdivision approval (6-8 stands potential) attract developer interest; speculation-driven demand may inflate holding costs."
            }
        ],
        comparison: {
            competitorName: "Morningside",
            competitorSlug: "morningside",
            priceDiff: "+18% Higher (Morningside commands premium)",
            verdict: "Atholl offers better entry-point value for families; Morningside attracts ultra-HNW buyers and tops corporate relocations. Atholl is the smarter buy for long-term appreciation.",
            features: [
                { label: "Avg. Freehold Price", us: "R7.2M", them: "R8.5M+" },
                { label: "Avg. Sectional Title", us: "R2.1M", them: "R2.8M+" },
                { label: "Land Size (typical)", us: "1200-1800 sqm", them: "800-1500 sqm" },
                { label: "Traffic/Noise", us: "Moderate (Atholl Rd)", them: "Higher (Rivonia Rd corridor)" },
                { label: "Rental Yield", us: "10-14% sectional", them: "11-16% sectional" },
                { label: "Security Model", us: "Mixed (boomed + estates)", them: "Predominantly gated estates" },
                { label: "Buyer Demographic", us: "Young professionals + families", them: "Corporates + expatriates" }
            ]
        }
    },
    "strathavon": {
        suburbSlug: "strathavon",
        headline: "Secure Clusters Drive Lock-Up-And-Go Demand",
        description: "Strathavon remains a resilient micro-market 5–10 minutes from Sandton CBD, attracting professionals and investors who prioritise security and convenience over space. Cluster homes in boomed estates dominate, with sectional title outperforming freehold as younger buyers and portfolio investors favour lock-up-and-go flexibility.",
        lastUpdated: "January 2026",
        author: {
            name: "Research Team",
            role: "Market Analyst",
            verified: true
        },
        valueProp: {
            fast: {
                metric: "85 days",
                context: "Well-priced properties in secure complexes move within 6 weeks; national average 12 weeks"
            },
            premium: {
                metric: "R2.9M–R3.5M",
                context: "Average asking price for 3–4 bed cluster homes; strong positioning for families"
            },
            growth: {
                metric: "+1.7%",
                context: "Sandton sectional title YTD 2025; freehold +4.8% driven by R3M–R8M family homes"
            }
        },
        marketComposition: {
            activeListings: 75,
            dominantFeatures: "Secure boomed clusters (1–2 bed), modern lock-up apartments, newer estate complexes; freehold homes rare",
            split: {
                freehold: 20,
                sectional: 80
            }
        },
        pricing: {
            freehold: {
                avgPrice: "R4.2M",
                range: "R2.6M – R10.9M",
                trend: "UP",
                trendValue: "+4.8%"
            },
            sectional: {
                avgPrice: "R1.85M",
                range: "R850K – R3.75M",
                trend: "UP",
                trendValue: "+1.7%"
            },
            insight: "Sectional title outperforms freehold; lock-up-and-go clusters dominate investor demand."
        },
        supplyDemand: {
            estDaysOnMarket: 85,
            temperature: "Balanced",
            stockLevel: "Moderate",
            insight: "Well-priced cluster homes in secure estates sell quickly; older apartment complexes face mild compression as investors migrate to newer developments and lock-up units."
        },
        buyerProfile: {
            dominant: "Corporate Professionals & Downsize Investors",
            motivations: [
                "Proximity to Sandton CBD and financial district reduces commute",
                "Secure, boomed estates eliminate maintenance burden and security anxiety",
                "Lock-up-and-go clusters and apartments attract rental income seekers"
            ],
            split: [
                { label: "Owner-occupier Professionals", percentage: 50 },
                { label: "Buy-to-Let Investors", percentage: 35 },
                { label: "Downsizers & Retirees", percentage: 15 }
            ]
        },
        ownerStability: {
            longTerm: 25,
            mediumTerm: 35,
            shortTerm: 40,
            avgOwnership: "5-7 years"
        },
        sellerIntelligence: {
            premiumDrivers: [
                "Solar power + battery backup (now table-stakes, not aspirational)",
                "Contemporary kitchen and en-suite finishes drive 8–12% premium",
                "Staff quarters or convertible loft space appeals to multi-generational buyers",
                "North-facing gardens and undercover entertainment areas command 5–8% uplift",
                "Proximity to top schools (Redhill, Crawford, Grayston Prep) justifies premium asking"
            ],
            pricingMistakes: [
                "Overpricing dated 1990s–2000s apartments; buyers compare to R1.2M–R1.5M modern lock-up complexes",
                "Ignoring highway/Grayston Drive noise impact; properties near ramps fetch 10–15% discount",
                "Setting freehold prices without accounting for boomed estate premiums (buyers expect R4M+ for quality freehold)"
            ],
            marketingAngles: [
                "Lead with 'Investment-Grade Lock-Up' for sectional; emphasise 11–16% gross rental yields (Sandton benchmark)",
                "Highlight proximity to Redhill and Crawford if family home; frame as 'prestige without the commute'",
                "Position cluster homes as 'urban lifestyle' not 'downsizer'; appeal to executives wanting low-maintenance entertaining",
                "Showcase solar resilience and fibre-ready infrastructure for remote-work professionals"
            ],
            timeline: {
                wellPriced: "Top 10% sell in 5–6 weeks; clusters in Stellenberg Estate and modern complexes move fastest",
                premium: "Premium properties may take 2-3 months",
                negotiationRoom: "5–10% below asking typical in balanced market; 12–15% for older apartments or highway-adjacent properties",
                bestSeason: "Spring (Sep–Nov); Jan–Feb typically quieter but serious buyers return post-summer"
            }
        },
        microMarkets: [
            {
                name: "Stellenberg Estate",
                sentiment: "Positive",
                insight: "Premium secured cluster complex with 21 units; consistently sought-after by families and investors; low turnover indicates retention; selling R2.5M–R3.2M for 2–3 bed clusters"
            },
            {
                name: "Glenwood Riverside Estate",
                sentiment: "Positive",
                insight: "Riverside positioning and contemporary finishes attract younger professionals; townhouse-format offers flexibility; rents command 11–13% yields for 2-bed units"
            },
            {
                name: "Grayston Drive–Bordering Properties",
                sentiment: "Neutral",
                insight: "Highway proximity creates noise and vibration impact; properties near ramps discount 10–15% vs interior Strathavon; buyers prioritise peace over speed; consider sound mitigation as premium feature"
            },
            {
                name: "Central Strathavon Apartments (1990s–2000s Vintage)",
                sentiment: "Neutral",
                insight: "Spacious floor plates attract investors; competing against newer R1.2M–R1.5M developments; renovation-ready units underperform; renovation + modern finishes yield 12–15% uplift"
            }
        ],
        comparison: {
            competitorName: "Bryanston",
            competitorSlug: "bryanston",
            priceDiff: "+8% Higher (Strathavon Premium)",
            verdict: "Strathavon commands proximity premium (5 min vs 15 min to Sandton CBD) but Bryanston offers larger stands and established family character. Strathavon dominates investor/lock-up segment; Bryanston leads family freehold market.",
            features: [
                { label: "Avg Freehold Price", us: "R4.2M", them: "R4.3M" },
                { label: "Avg Sectional Price", us: "R1.85M", them: "R1.2M–R1.5M" },
                { label: "Avg Land Size", us: "~1500sqm (clusters on 400–500sqm)", them: "~1800–2000sqm (larger freehold erfs)" },
                { label: "CBD Proximity", us: "5–10 minutes", them: "12–18 minutes" },
                { label: "Security", us: "Boomed estates (100%)", them: "Mixed (Bryanston Country Club dominates)" },
                { label: "School Access", us: "Redhill, Crawford (immediate)", them: "Bryanston High, St Stithians, Brescia (good)" },
                { label: "Buyer Profile", us: "Investors, professionals, downsizers", them: "Families, established wealth, golf community" },
                { label: "Market Sentiment", us: "Balanced; sectional outperforming", them: "Seller-friendly; freehold stable at R4.3M median" }
            ]
        }
    },
    "dunkeld": {
        suburbSlug: "dunkeld",
        headline: "Luxury Stagnation—Premium Pricing Consolidates",
        description: "Dunkeld's ultra-premium market has plateaued, with limited sales above R20M despite strong rental demand and international buyer interest. The real growth is in the mid-luxury R8M–R12M segment and sectional title apartments, where institutional buyers and families seek security and capital appreciation.",
        lastUpdated: "January 2026",
        author: {
            name: "Research Team",
            role: "Market Analyst",
            verified: true
        },
        valueProp: {
            fast: {
                metric: "12 weeks",
                context: "Average time to sale for well-priced mid-to-upper segment properties; top 10% under 6 weeks"
            },
            premium: {
                metric: "R10.5M",
                context: "Median freehold price; sectional title apartments command R2.5M–R4.5M, offering better negotiation velocity"
            },
            growth: {
                metric: "+6% YoY",
                context: "Johannesburg metropolitan growth 2024–2025; Dunkeld luxury segment trending flat due to stock constraints and buyer selectivity"
            }
        },
        marketComposition: {
            activeListings: 42,
            dominantFeatures: "Large established freehold houses with mature gardens; modern luxury clusters; premium secure apartment buildings",
            split: {
                freehold: 35,
                sectional: 65
            }
        },
        pricing: {
            freehold: {
                avgPrice: "R10.5M",
                range: "R6.5M – R18M",
                trend: "FLAT",
                trendValue: "+0.5%"
            },
            sectional: {
                avgPrice: "R3.2M",
                range: "R1.8M – R5.5M",
                trend: "UP",
                trendValue: "+3.1%"
            },
            insight: "Luxury freehold stagnating; sectional title showing stronger momentum with +3.1% growth."
        },
        supplyDemand: {
            estDaysOnMarket: 85,
            temperature: "Balanced",
            stockLevel: "Low",
            insight: "Luxury freehold supply is chronically tight; sectional title experiencing stronger turnover and less inventory stress, driven by investor and young professional demand."
        },
        buyerProfile: {
            dominant: "Corporate Families & International High-Net-Worth Investors",
            motivations: [
                "Proximity to Sandton CBD and Rosebank commercial hubs (5km, 2 minutes respectively)",
                "Premium school access and lifestyle amenities (Kingsmead, St David's Marist, Wanderers Club)",
                "Security, backup power, and established infrastructure in a prestige address"
            ],
            split: [
                { label: "Executive Families & Owner-Occupiers", percentage: 45 },
                { label: "Buy-to-Let Investors (Sectional Title)", percentage: 35 },
                { label: "International Investors & Diplomats", percentage: 20 }
            ]
        },
        ownerStability: {
            longTerm: 45,
            mediumTerm: 35,
            shortTerm: 20,
            avgOwnership: "10-15 years"
        },
        sellerIntelligence: {
            premiumDrivers: [
                "Recently renovated kitchens and en-suite bathrooms (command +8–12% premium)",
                "Solar arrays and inverter/backup power systems (critical in load-shedding environment)",
                "Boomed road access or gated/clustered security features",
                "Large stands (1500+ m²) with mature landscaping and gardens",
                "Proximity to Rosebank (2-minute drive) and Gautrain access via Rosebank station"
            ],
            pricingMistakes: [
                "Over-pricing older freehold homes without renovation—buyers demand modern finishes for R10M+ properties",
                "Ignoring sectional title rental yield appeal; undervaluing furnished/investment-ready apartments",
                "Failing to highlight backup power and security infrastructure in marketing materials",
                "Pricing at the top of market range without staged viewings or professional staging—reduces traction"
            ],
            marketingAngles: [
                "Position freehold homes as 'multi-generational family estates' with proximity to top schools (Kingsmead, Roedean, St John's within 10 min)",
                "Highlight sectional title as 'trophy investment' with reliable R12K–R22K monthly rental income and 11–16% gross yields",
                "Emphasize security and infrastructure resilience: boomed estates, solar/inverter systems, fiber connectivity",
                "Leverage location narrative: 'Rosebank sophistication with peaceful residential charm'—target upgraders from Illovo/Melrose seeking garden space"
            ],
            timeline: {
                wellPriced: "Top 15% (R8M–R12M freehold; R2.5M–R4M sectional) sell in 6–8 weeks",
                premium: "Premium R15M+ properties may take 4-6 months",
                negotiationRoom: "10–15% below asking typical; sellers entrenched above R15M expect longer holding periods",
                bestSeason: "Spring (September–November) and early autumn (February–March); avoid July–August (winter slump)"
            }
        },
        microMarkets: [
            {
                name: "Bompas Road Corridor (Western Edge)",
                sentiment: "Positive",
                insight: "Main thoroughfare; attracts clusters like Dunkeld Mews (R3.95M–R6M); good foot traffic from Rosebank; noise and congestion limit premium pricing but offset by accessibility."
            },
            {
                name: "Oxford Road Estate Cluster (Southern Edge)",
                sentiment: "Positive",
                insight: "Commercial mixed-use (Oxford Parks) driving residential and investor interest; newer apartment buildings command R2.8M–R4.2M; positioned as 'live-work-play' hub; younger professional demographic."
            },
            {
                name: "Jan Smuts Avenue Strip (Dunkeld West Border)",
                sentiment: "Neutral",
                insight: "Dunkeld West straddles Jan Smuts; more dense apartments and sectional titles; higher traffic flow than quiet Dunkeld; attracts commuter base but older stock (20–30 years) requires renovation capex."
            },
            {
                name: "High-End Freehold Precinct (North of Bompas)",
                sentiment: "Positive",
                insight: "Quiet tree-lined streets; largest private stands (1800–2500 m²); established families and empty-nesters; prices R12M–R18M; lower turnover; strong buyer selectivity."
            },
            {
                name: "Dunkeld West Rental Apartments (South of Jan Smuts)",
                sentiment: "Positive",
                insight: "Institutional investor hotspot; 2–3 bed apartments R2.2M–R3.8M; monthly rents R14K–R18K; strong gross yields 10–12%; attracts young professionals and expat community; consistent turnover."
            }
        ],
        comparison: {
            competitorName: "Hyde Park",
            competitorSlug: "hyde-park",
            priceDiff: "+15% Higher (Dunkeld)",
            verdict: "Dunkeld commands a 15% premium vs. Hyde Park on comparable freehold homes due to Rosebank proximity and perceived security infrastructure. Hyde Park offers better value for first-time luxury buyers. Dunkeld freehold appeals to executive families seeking established prestige; Hyde Park attracts investors and younger professionals.",
            features: [
                { label: "Avg. Freehold Price", us: "R10.5M", them: "R9.1M" },
                { label: "Avg. Land Size", us: "~1600 m²", them: "~1400 m²" },
                { label: "Sectional Title Avg.", us: "R3.2M", them: "R2.8M" },
                { label: "Traffic Noise Exposure", us: "Moderate (Bompas/Jan Smuts)", them: "Low-Moderate" },
                { label: "Commercial Proximity", us: "Rosebank 2 min; Sandton 5 km", them: "Sandton 7 km; Rosebank 4 km" },
                { label: "Security Posture", us: "Boomed roads + clusters", them: "Mixed; fewer gated options" },
                { label: "School Convenience", us: "Kingsmead 2 min; St David's 6 min", them: "St John's 4 min; Redhill variable" },
                { label: "Rental Yield (Sectional)", us: "11–14% gross", them: "10–12% gross" }
            ]
        }
    },
    "sandhurst": {
        suburbSlug: "sandhurst",
        headline: "Luxury Stalls, Rate Cuts Offer Glimmer",
        description: "Sandhurst has plateaued at R16.5M average (unchanged over 2 years) and slipped from 4th to 7th nationally as Cape Town dominates ultra-luxury. However, interest rate cuts and younger buyer demographics are rekindling investor interest in this security-rich address.",
        lastUpdated: "January 2026",
        author: {
            name: "Research Team",
            role: "Market Analyst",
            verified: true
        },
        valueProp: {
            fast: {
                metric: "52% YoY rental yield",
                context: "Premium sectional titles commanding 11-16% gross yields in tight rental market with 4.5-6% vacancy"
            },
            premium: {
                metric: "R16.5M",
                context: "Average sale price places Sandhurst 7th most expensive nationally; large estates exceed R75M"
            },
            growth: {
                metric: "0% (flat)",
                context: "No YoY appreciation 2024-2025; however, interest rate cuts (5x in 2025) now driving renewed optimism"
            }
        },
        marketComposition: {
            activeListings: 135,
            dominantFeatures: "Large estates (5000+ sqm), boomed security clusters, luxury apartments in flagship developments (Embassy Towers, Sandhurst Ridge)",
            split: {
                freehold: 60,
                sectional: 40
            }
        },
        pricing: {
            freehold: {
                avgPrice: "R13-14.9M",
                range: "R4.2M – R150M+",
                trend: "FLAT",
                trendValue: "0%"
            },
            sectional: {
                avgPrice: "R4.5M",
                range: "R1.08M – R11.2M",
                trend: "UP",
                trendValue: "+1.66%"
            },
            insight: "Ultra-luxury freehold stagnant; sectional title showing modest growth as younger buyers enter market."
        },
        supplyDemand: {
            estDaysOnMarket: 110,
            temperature: "Balanced",
            stockLevel: "Moderate",
            insight: "Moderate inventory (~120-150 active listings) with well-priced properties selling steadily; overpriced homes sit 120+ days, creating longer market cycles than adjacent suburbs."
        },
        buyerProfile: {
            dominant: "High-Net-Worth Families & International Executives",
            motivations: [
                "Ultra-secure gated estates near Sandton CBD for business proximity",
                "Legacy wealth transfer and trophy asset accumulation",
                "Rental yield optimization (12-16% gross yields on apartments)"
            ],
            split: [
                { label: "Families (R4M-R15M budget)", percentage: 45 },
                { label: "International/HNW Investors", percentage: 35 },
                { label: "Young Professionals (Apartments <R5M)", percentage: 20 }
            ]
        },
        ownerStability: {
            longTerm: 55,
            mediumTerm: 30,
            shortTerm: 15,
            avgOwnership: "12-18 years"
        },
        sellerIntelligence: {
            premiumDrivers: [
                "Coronation Road & Oxford Avenue address premium (most sought micro-locations)",
                "Solar/backup power systems (load-shedding mitigation critical for HNW buyers)",
                "Large stands 1500+ sqm with original architectural merit or recent modernization"
            ],
            pricingMistakes: [
                "Overpricing by 10-15% hoping for negotiation room—results in 120+ day listings instead of 60-90",
                "Ignoring Sandhurst Road noise impact on south-facing properties (traffic & pollution pricing penalty)",
                "Emotional valuation vs. comparable market analysis (CMAs underweight new rate cuts)"
            ],
            marketingAngles: [
                "Emphasize 11-16% rental yields and secured expatriate tenant pipeline (strong corporate demand)",
                "Highlight boomed security & private patrols (safety premium vs. Westcliff/Dunkeld)",
                "Position as 'Sandton CBD gateway' for C-suite minimizing commute friction"
            ],
            timeline: {
                wellPriced: "Top 20% sell within 8-10 weeks if priced within R500K of CMA",
                premium: "Premium R20M+ estates may take 4-6 months",
                negotiationRoom: "5-8% discount from ask typical; oversized homes (5bed+) see 10-12% discounts",
                bestSeason: "Spring/early summer (Sep-Nov) and post-rate-cut windows (currently strong Jan-Mar 2026)"
            }
        },
        microMarkets: [
            {
                name: "Embassy Towers / Central Sandhurst",
                sentiment: "Positive",
                insight: "Flagship luxury apartment development commanding R5.7M-R23.9M for 2-3 beds. Strong uptake among corporate expats seeking premium urban lifestyle. Amenities justify 15% premium over comparable complexes."
            },
            {
                name: "Sandhurst Ridge (New Launch Oct 2025)",
                sentiment: "Positive",
                insight: "Game-changing 'affordable luxury' cluster of 25 units from R3.899M. Targets younger professionals priced out of traditional estates. Early strong pre-sales suggest this unlocks new buyer demographic (45% of recent Sandhurst buyers now under 50)."
            },
            {
                name: "Coronation Road / Oxford Avenue",
                sentiment: "Positive",
                insight: "Premium micro-location where R20M+ homes command 8-12% price premium. Established trees, heritage properties, and prestige address. Limited turnover (5-8 sales annually) creates scarcity value."
            },
            {
                name: "Sandhurst Road / South-Facing Properties",
                sentiment: "Neutral",
                insight: "Proximity to main arterial road creates noise, dust, and pollution penalties (5-8% discount). Buyers price in long-term depreciation risk. Well-suited for investment rentals rather than owner-occupants."
            },
            {
                name: "Estate Clusters (Hurlingham, Sandown periphery)",
                sentiment: "Neutral",
                insight: "Boomed cluster homes (R4-8M range) attract mid-market families. Lower turnover than freehold estates; sectional title levies (R8K-15K/month) dampen appeal vs. large standalone homes."
            }
        ],
        comparison: {
            competitorName: "Westcliff",
            competitorSlug: "westcliff",
            priceDiff: "+50% Higher (Sandhurst)",
            verdict: "Sandhurst commands premium for proximity to CBD and ultra-security; Westcliff offers more space, greenery, and lower transaction volatility. Sandhurst better for business executives; Westcliff suits families prioritizing privacy & gardens.",
            features: [
                { label: "Avg. Price", us: "R16.5M", them: "R11M" },
                { label: "Avg. Land Size", us: "2000-3500 sqm", them: "3500-5000 sqm" },
                { label: "Traffic/Noise", us: "Moderate (Sandhurst Road)", them: "Low (Leafy Westcliff)" },
                { label: "CBD Proximity", us: "5 mins (major advantage)", them: "15 mins" },
                { label: "Security", us: "Boomed + private patrols", them: "Mixed (some open)" },
                { label: "Rental Yield", us: "11-16%", them: "8-10%" },
                { label: "Transaction Volume", us: "High (135+ active)", them: "Moderate (~80 active)" }
            ]
        }
    }
};

export function getSellerData(slug: string): SuburbSellerData | null {
    return sellerData[slug] || null;
}

export function hasSellerData(slug: string): boolean {
    return !!sellerData[slug];
}
