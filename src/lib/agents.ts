export interface Agent {
    id: string;
    name: string;
    agency: string;
    slug: string;
    image: string;
    areas: string[]; // e.g. ["hurlingham", "sandhurst"]
    rating: number; // Internal quality score 1-5
    status: 'active' | 'inactive';
    whyRecommended: string[];
    stats: {
        yearsExperience: number;
        recentSales: number; // Last 12 months
        avgPrice: string;
    };
    contacts: {
        phone: string;
        email: string;
        whatsapp?: string;
    };
}

export const recommendedAgents: Agent[] = [
    {
        id: "ag_01",
        name: "Sarah Jenkins",
        agency: "Pam Golding Properties",
        slug: "sarah-jenkins",
        image: "/images/agents/sarah.jpg",
        areas: ["hurlingham", "hurlingham-manor", "craighall"],
        rating: 4.9,
        status: "active",
        whyRecommended: [
            "Specializes in luxury freehold homes > R5m",
            "Highest average sale price in Hurlingham 2024",
            "Excellent staging and photography packages"
        ],
        stats: {
            yearsExperience: 12,
            recentSales: 14,
            avgPrice: "R5.2m"
        },
        contacts: {
            phone: "+27 82 555 0101",
            email: "sarah.j@pamgolding.co.za",
            whatsapp: "27825550101"
        }
    },
    {
        id: "ag_02",
        name: "Michael Dube",
        agency: "Leadhome",
        slug: "michael-dube",
        image: "/images/agents/michael.jpg",
        areas: ["bryanston", "hurlingham", "river-club"],
        rating: 4.7,
        status: "active",
        whyRecommended: [
            "Tech-driven selling process for quick turnover",
            "Lower commission structure favored by investors",
            "Strong database of pre-qualified buyers"
        ],
        stats: {
            yearsExperience: 6,
            recentSales: 22,
            avgPrice: "R3.8m"
        },
        contacts: {
            phone: "+27 83 555 0202",
            email: "mdube@leadhome.co.za"
        }
    },
    {
        id: "ag_03",
        name: "Elaine Rossouw",
        agency: "Fine & Country",
        slug: "elaine-rossouw",
        image: "/images/agents/elaine.jpg",
        areas: ["sandhurst", "hyde-park", "hurlingham"],
        rating: 5.0,
        status: "active",
        whyRecommended: [
            "The 'Queen of Sandhurst' - unparalleled network",
            "Discreet off-market sales specialist",
            "Achieves record prices per square meter"
        ],
        stats: {
            yearsExperience: 20,
            recentSales: 8,
            avgPrice: "R12.5m"
        },
        contacts: {
            phone: "+27 82 555 0303",
            email: "elaine@fineandcountry.com"
        }
    },
    {
        id: "ag_04",
        name: "David Cohen",
        agency: "Re/Max Masters",
        slug: "david-cohen",
        image: "/images/agents/david.jpg",
        areas: ["bryanston", "morningside"],
        rating: 4.8,
        status: "active",
        whyRecommended: [
            "High volume seller in Bryanston East",
            "Excellent communication and weekly feedback",
            "Strong team support for show days"
        ],
        stats: {
            yearsExperience: 15,
            recentSales: 28,
            avgPrice: "R4.2m"
        },
        contacts: {
            phone: "+27 84 555 0404",
            email: "david.c@remax.co.za"
        }
    },
    {
        id: "ag_05",
        name: "Thandi Ngwenya",
        agency: "Seeff Sandton",
        slug: "thandi-ngwenya",
        image: "/images/agents/thandi.jpg",
        areas: ["douglasdale", "fourways", "bryanston"],
        rating: 4.6,
        status: "active",
        whyRecommended: [
            "Expert in sectional title and cluster developments",
            "Great responsiveness to first-time sellers",
            "Marketing reach across multiple platforms"
        ],
        stats: {
            yearsExperience: 5,
            recentSales: 35,
            avgPrice: "R2.1m"
        },
        contacts: {
            phone: "+27 72 555 0505",
            email: "thandi.n@seeff.com"
        }
    },
    {
        id: "ag_06",
        name: "Robert Ferreira",
        agency: "Jawitz Properties",
        slug: "robert-ferreira",
        image: "/images/agents/robert.jpg",
        areas: ["parkmore", "sandown"],
        rating: 4.7,
        status: "active",
        whyRecommended: [
            "Deep community involvement in Parkmore",
            "Honest, no-nonsense valuation approach",
            "Consistent track record in changing markets"
        ],
        stats: {
            yearsExperience: 18,
            recentSales: 15,
            avgPrice: "R3.5m"
        },
        contacts: {
            phone: "+27 83 555 0606",
            email: "robert.f@jawitz.co.za"
        }
    }
];

export function getAgentsForSuburb(suburbSlug: string): Agent[] {
    // Simple matching logic: find agents listing this suburb in their areas
    // If not enough, fill with high-performing generals.
    // We explicitly filter to get 3 recommendations.

    const exactMatches = recommendedAgents.filter(a => a.areas.includes(suburbSlug));

    // If we have fewer than 3, fill with top rated others
    if (exactMatches.length < 3) {
        const others = recommendedAgents
            .filter(a => !a.areas.includes(suburbSlug))
            .sort((a, b) => b.rating - a.rating);

        return [...exactMatches, ...others].slice(0, 3);
    }

    return exactMatches.slice(0, 3);
}
