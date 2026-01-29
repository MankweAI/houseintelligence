export interface AgentSuburbProfile {
    priority: number; // 1 = Top Feature, 2 = Strong Alternative
    badge?: string; // "High Velocity Specialist", "Cluster Expert", etc.
    quote?: string; // Suburb-specific flair
}

export interface Agent {
    id: string;
    name: string;
    agency: string;
    slug: string;
    image: string;
    // New Weighted Territory Map
    suburbs: {
        [suburbSlug: string]: AgentSuburbProfile;
    };
    // Legacy support (optional, can be derived)
    areas: string[];

    rating: number; // Internal quality score 1-5
    status: 'active' | 'inactive';
    whyRecommended: string[]; // Generic highlights
    stats: {
        yearsExperience: number;
        recentSales: number; // Last 12 months (Total or representative)
        avgPrice: string;
        estDaysOnMarket?: string; // The "Velocity" metric
    };
    contacts: {
        phone: string;
        email: string;
        whatsapp?: string;
    };
    social?: {
        instagram?: string;
        linkedin?: string;
        youtube?: string;
        tiktok?: string;
        website?: string;
        facebook?: string;
    };
    classification?: {
        tier: string;
        languages?: string[];
    };
}

export const recommendedAgents: Agent[] = [
    // --- MULTI-SUBURB POWERHOUSES ---

    {
        id: "ag_tracy_thompson",
        name: "Tracy Thompson",
        agency: "Fine & Country",
        slug: "tracy-thompson",
        image: "https://images.prop24.com/user_images/tracy_thompson_large.jpg", // Placeholder
        areas: ["sandhurst", "dunkeld", "dunkeld-west", "inanda", "hurlingham", "saxonwold"],
        suburbs: {
            "sandhurst": { priority: 1, badge: "Luxury Velocity Specialist" },
            "dunkeld": { priority: 1, badge: "Discreet Marketing Expert" },
            "dunkeld-west": { priority: 1, badge: "Discreet Marketing Expert" },
            "inanda": { priority: 3, badge: "Lifestyle Specialist" },
            "hurlingham": { priority: 1, badge: "Market Knowledge Leader" },
            "saxonwold": { priority: 3, badge: "Heritage Home Expert" }
        },
        rating: 4.9,
        status: "active",
        whyRecommended: [
            "9 Years Experience: The 'Sweet Spot' for agility",
            "Specializes in Discreet / Off-Market sales",
            "High ethical standards with rapid results"
        ],
        stats: { yearsExperience: 9, recentSales: 12, avgPrice: "R8.5m", estDaysOnMarket: "65 days" },
        contacts: { phone: "+27 82 454 2639", email: "tracy.t@fineandcountry.com" },
        social: { website: "https://www.fineandcountry.co.za/" },
        classification: { tier: "Luxury Underdog" }
    },
    {
        id: "ag_alan_bak",
        name: "Alan Bak",
        agency: "Sotheby's International Realty",
        slug: "alan-bak",
        image: "https://images.prop24.com/user_images/alan_bak_large.jpg",
        areas: ["sandhurst", "dunkeld", "dunkeld-west", "inanda", "houghton-estate"],
        suburbs: {
            "sandhurst": { priority: 2, badge: "Cinematic Presentation" },
            "dunkeld": { priority: 3, badge: "Visual Asset Specialist" },
            "dunkeld-west": { priority: 3, badge: "Visual Asset Specialist" },
            "inanda": { priority: 2, badge: "Freehold Specialist" },
            "houghton-estate": { priority: 2, badge: "Modern Luxury Agent" }
        },
        rating: 4.8,
        status: "active",
        whyRecommended: [
            "High-touch digital communication",
            "Cinematic video tours for every listing",
            "Bridges traditional luxury with modern tech"
        ],
        stats: { yearsExperience: 11, recentSales: 8, avgPrice: "R12.0m", estDaysOnMarket: "70 days" },
        contacts: { phone: "+27 82 490 0940", email: "alan.bak@sothebys.com" },
        social: { instagram: "https://www.instagram.com/alanbak_property/", linkedin: "https://www.linkedin.com/in/alanbak/" },
        classification: { tier: "Modern Legacy Specialist" }
    },
    {
        id: "ag_kyle_ebben",
        name: "Kyle Ebben",
        agency: "Fine & Country",
        slug: "kyle-ebben",
        image: "https://images.prop24.com/user_images/kyle_ebben_large.jpg",
        areas: ["sandhurst", "atholl", "inanda", "hurlingham"],
        suburbs: {
            "sandhurst": { priority: 3, badge: "Data-Driven Pricing" },
            "atholl": { priority: 1, badge: "Development & Estate Expert" },
            "inanda": { priority: 1, badge: "Elite Suburb Specialist" },
            "hurlingham": { priority: 2, badge: "Strategic Agent" }
        },
        rating: 5.0,
        status: "active",
        whyRecommended: [
            "Rising Star (5 Years Exp) - High Hunger",
            "Beats legacy agent response times consistently",
            "Focuses on 'Wealthy Family' demographic"
        ],
        stats: { yearsExperience: 5, recentSales: 15, avgPrice: "R9.0m", estDaysOnMarket: "55 days" },
        contacts: { phone: "+27 82 483 5861", email: "kyle.ebben@fineandcountry.com" },
        social: { instagram: "https://www.instagram.com/kyleebben_property/", linkedin: "https://www.linkedin.com/in/kyle-ebben/" },
        classification: { tier: "Rising Luxury Star" }
    },
    {
        id: "ag_josie_keeping",
        name: "Josie Keeping",
        agency: "Fine & Country",
        slug: "josie-keeping",
        image: "https://images.prop24.com/user_images/josie_keeping_large.jpg",
        areas: ["hyde-park", "illovo", "rivonia", "river-club", "strathavon"],
        suburbs: {
            "hyde-park": { priority: 1, badge: "Lifestyle Cluster Expert" },
            "illovo": { priority: 1, badge: "High-Density Specialist" },
            "rivonia": { priority: 2, badge: "Velocity Practitioner" },
            "river-club": { priority: 1, badge: "Lifestyle Specialist" },
            "strathavon": { priority: 2, badge: "Sectional Title Pro" }
        },
        rating: 4.8,
        status: "active",
        whyRecommended: [
            "8 Years Experience: High Velocity Specialist",
            "Sells 'Lifestyles' not just specs",
            "Quick, tech-proficient, and highly responsive"
        ],
        stats: { yearsExperience: 8, recentSales: 18, avgPrice: "R4.5m", estDaysOnMarket: "40 days" },
        contacts: { phone: "+27 74 167 0001", email: "josie.k@fineandcountry.com" },
        social: { instagram: "https://www.instagram.com/josiekeeping_property/", linkedin: "https://www.linkedin.com/in/josie-keeping/" },
        classification: { tier: "High Velocity Specialist" }
    },
    {
        id: "ag_mandy_murray",
        name: "Mandy Murray",
        agency: "Realtor of Excellence",
        slug: "mandy-murray",
        image: "https://images.prop24.com/user_images/mandy_murray_large.jpg",
        areas: ["hyde-park", "melrose", "melrose-arch", "saxonwold"],
        suburbs: {
            "hyde-park": { priority: 2, badge: "Tech-Fluent Advocate" },
            "melrose": { priority: 1, badge: "Stress-Free Sales" },
            "melrose-arch": { priority: 1, badge: "Precinct Specialist" },
            "saxonwold": { priority: 2, badge: "Heritage Simplifier" }
        },
        rating: 4.9,
        status: "active",
        whyRecommended: [
            "Charismatic & Dependable (7 Years Exp)",
            "Uses cloud-tech for real-time seller updates",
            "Specializes in the R5m-R10m bracket"
        ],
        stats: { yearsExperience: 7, recentSales: 10, avgPrice: "R7.5m", estDaysOnMarket: "50 days" },
        contacts: { phone: "+27 83 652 8213", email: "mandy@realtorofexcellence.co.za" },
        social: { linkedin: "https://www.linkedin.com/in/mandy-murray/", instagram: "https://www.instagram.com/mandymurray_property/" },
        classification: { tier: "Tech-Fluent Advocate" }
    },
    {
        id: "ag_lloyd_hobson",
        name: "Lloyd Hobson",
        agency: "Byron Thomas Properties",
        slug: "lloyd-hobson",
        image: "https://images.prop24.com/user_images/lloyd_hobson_large.jpg",
        areas: ["bryanston", "dunkeld", "dunkeld-west", "hurlingham", "saxonwold"],
        suburbs: {
            "bryanston": { priority: 3, badge: "High-Efficiency Practitioner" },
            "dunkeld": { priority: 2, badge: "Global Exposure Expert" },
            "dunkeld-west": { priority: 2, badge: "Global Exposure Expert" },
            "hurlingham": { priority: 3, badge: "Modern Closer" },
            "saxonwold": { priority: 1, badge: "Heritage Efficiency" }
        },
        rating: 4.8,
        status: "active",
        whyRecommended: [
            "11 Years Exp: Consistently closes < 45 days",
            "Unique exposure strategy for maximum visibility",
            "Focuses on the 'Extra Mile' client journey"
        ],
        stats: { yearsExperience: 11, recentSales: 14, avgPrice: "R6.0m", estDaysOnMarket: "42 days" },
        contacts: { phone: "+27 11 447 0000", email: "lloyd@btproperties.co.za" },
        social: { linkedin: "https://www.linkedin.com/in/lloyd-hobson/" },
        classification: { tier: "High-Efficiency Practitioner" }
    },
    {
        id: "ag_matthew_norman",
        name: "Matthew Norman",
        agency: "Realtor of Excellence",
        slug: "matthew-norman",
        image: "https://images.prop24.com/user_images/matthew_norman_large.jpg",
        areas: ["morningside", "illovo", "parkmore", "river-club", "strathavon"],
        suburbs: {
            "morningside": { priority: 2, badge: "Communicative Closer" },
            "illovo": { priority: 2, badge: "Service Specialist" },
            "parkmore": { priority: 1, badge: "Community Trusted" },
            "river-club": { priority: 3, badge: "Transparent Practitioner" },
            "strathavon": { priority: 3, badge: "Service Practitioner" }
        },
        rating: 4.9,
        status: "active",
        whyRecommended: [
            "4-Year Rising Star: 'Patience & Professionalism'",
            "Exceptional communicator (WhatsApp Groups)",
            "Disruptor focusing on transparency"
        ],
        stats: { yearsExperience: 4, recentSales: 16, avgPrice: "R3.2m", estDaysOnMarket: "35 days" },
        contacts: { phone: "+27 83 652 8213", email: "matthew@realtorofexcellence.co.za" },
        social: { facebook: "https://www.facebook.com/matthewnorman_property/", linkedin: "https://www.linkedin.com/in/matthew-norman-realestate/" },
        classification: { tier: "Service Specialist" }
    },
    {
        id: "ag_louise_reiche",
        name: "Louise Reiche",
        agency: "Fine & Country",
        slug: "louise-reiche",
        image: "https://images.prop24.com/user_images/louise_reiche_large.jpg",
        areas: ["morningside", "illovo", "parkmore"],
        suburbs: {
            "morningside": { priority: 1, badge: "Digital-First Specialist" },
            "illovo": { priority: 3, badge: "Market Agitator" },
            "parkmore": { priority: 3, badge: "Modern Marketer" }
        },
        rating: 4.8,
        status: "active",
        whyRecommended: [
            "7 Years Exp: High-density luxury specialist",
            "Creative storytelling marketing strategy",
            "Deep knowledge of secure enclosures"
        ],
        stats: { yearsExperience: 7, recentSales: 20, avgPrice: "R4.0m", estDaysOnMarket: "45 days" },
        contacts: { phone: "+27 82 331 7105", email: "louise.r@fineandcountry.com" },
        social: { instagram: "https://www.instagram.com/louisereiche_property/", facebook: "https://www.facebook.com/louisereicheproperty/" },
        classification: { tier: "Digital-First Specialist" }
    },
    {
        id: "ag_mieke_roets",
        name: "Mieke Roets",
        agency: "Byron Thomas Properties",
        slug: "mieke-roets",
        image: "https://images.prop24.com/user_images/mieke_roets_large.jpg",
        areas: ["morningside", "melrose", "melrose-arch", "houghton-estate"],
        suburbs: {
            "morningside": { priority: 3, badge: "Gen-Z Specialist" },
            "melrose": { priority: 2, badge: "High-Energy Agent" },
            "melrose-arch": { priority: 2, badge: "High-Energy Agent" },
            "houghton-estate": { priority: 3, badge: "Suburban Specialist" }
        },
        rating: 4.7,
        status: "active",
        whyRecommended: [
            "Young, Tech-Native (4 Years Exp)",
            "Focuses on 18-49 demographic",
            "High-energy social media content"
        ],
        stats: { yearsExperience: 4, recentSales: 12, avgPrice: "R3.5m", estDaysOnMarket: "40 days" },
        contacts: { phone: "+27 11 447 0000", email: "mieke@btproperties.co.za" },
        social: { instagram: "https://www.instagram.com/miekeroets_property/", linkedin: "https://www.linkedin.com/in/mieke-roets/" },
        classification: { tier: "Rising Star" }
    },
    {
        id: "ag_ericah_mtshali",
        name: "Ericah Mtshali",
        agency: "RE/MAX Masters",
        slug: "ericah-mtshali",
        image: "https://images.prop24.com/user_images/ericah_mtshali_large.jpg",
        areas: ["bryanston", "rivonia"],
        suburbs: {
            "bryanston": { priority: 2, badge: "Suburban Specialist" },
            "rivonia": { priority: 1, badge: "Density Specialist" }
        },
        rating: 4.8,
        status: "active",
        whyRecommended: [
            "Sectional Title & Cluster Expert (6 Years)",
            "Responsive to 'Under-R2M' investor market",
            "Native understanding of Sandton/Bryanston corridor"
        ],
        stats: { yearsExperience: 6, recentSales: 25, avgPrice: "R1.8m", estDaysOnMarket: "30 days" },
        contacts: { phone: "+27 73 123 4567", email: "ericah@remax-masters.co.za" },
        social: { facebook: "https://www.facebook.com/remaxmasters/" },
        classification: { tier: "Suburban Specialist" }
    },
    {
        id: "ag_marc_robbs",
        name: "Marc Robbs",
        agency: "Byron Thomas Properties",
        slug: "marc-robbs",
        image: "https://images.prop24.com/user_images/marc_robbs_large.jpg",
        areas: ["melrose", "melrose-arch", "sandown", "strathavon"],
        suburbs: {
            "melrose": { priority: 3, badge: "Agile Practitioner" },
            "melrose-arch": { priority: 3, badge: "Agile Practitioner" },
            "sandown": { priority: 2, badge: "Velocity Specialist" },
            "strathavon": { priority: 1, badge: "Cluster Pro" }
        },
        rating: 4.8,
        status: "active",
        whyRecommended: [
            "Matches professional tenants to buyers",
            "High velocity in Melrose Arch / Sandown",
            "6 Years Experience: Agile & Efficient"
        ],
        stats: { yearsExperience: 6, recentSales: 18, avgPrice: "R3.0m", estDaysOnMarket: "35 days" },
        contacts: { phone: "+27 11 447 0000", email: "marc@btproperties.co.za" },
        social: { linkedin: "https://www.linkedin.com/in/marc-robbs/" },
        classification: { tier: "Agile Practitioner" }
    },
    {
        id: "ag_carin_rolstone",
        name: "Carin Rolstone",
        agency: "Realtor of Excellence",
        slug: "carin-rolstone",
        image: "https://images.prop24.com/user_images/carin_rolstone_large.jpg",
        areas: ["rivonia", "sandown"],
        suburbs: {
            "rivonia": { priority: 3, badge: "Smooth Operator" },
            "sandown": { priority: 3, badge: "Process Expert" }
        },
        rating: 4.9,
        status: "active",
        whyRecommended: [
            "9 Years Exp: 'Professional & Calm'",
            "High client confidence & repeat business",
            "Minimizes DOM through detailed contracts"
        ],
        stats: { yearsExperience: 9, recentSales: 11, avgPrice: "R2.2m", estDaysOnMarket: "45 days" },
        contacts: { phone: "+27 82 254 6144", email: "carin@realtorofexcellence.co.za" },
        social: { linkedin: "https://www.linkedin.com/in/carin-rolstone/", facebook: "https://www.facebook.com/carinrolstone_property/" },
        classification: { tier: "Smooth Operator" }
    },
    {
        id: "ag_megan_odonovan",
        name: "Megan O'Donovan",
        agency: "Byron Thomas Properties",
        slug: "megan-odonovan",
        image: "https://images.prop24.com/user_images/megan_odonovan_large.jpg",
        areas: ["parkmore", "river-club"],
        suburbs: {
            "parkmore": { priority: 2, badge: "Community Hustler" },
            "river-club": { priority: 2, badge: "Rising Energy Specialist" }
        },
        rating: 4.8,
        status: "active",
        whyRecommended: [
            "Rising Energy (5 Years Exp)",
            "Highly visible in Parkmore/River Club community",
            "Focuses on relationship building"
        ],
        stats: { yearsExperience: 5, recentSales: 9, avgPrice: "R3.8m", estDaysOnMarket: "48 days" },
        contacts: { phone: "+27 72 969 2428", email: "megan@btproperties.co.za" },
        social: { instagram: "https://www.instagram.com/meganodonovan_property/", linkedin: "https://www.linkedin.com/in/megan-o-donovan/" },
        classification: { tier: "Community Hustler" }
    },

    // --- SOLO SUBURB SPECIALISTS ---

    {
        id: "ag_gwen_marie_cloete",
        name: "Gwen-marie Cloete",
        agency: "Cloete Properties",
        slug: "gwen-marie-cloete",
        image: "https://images.prop24.com/user_images/gwen_cloete_large.jpg",
        areas: ["bryanston"],
        suburbs: {
            "bryanston": { priority: 1, badge: "Volume Kingpin" } // "Kingpin" used loosely for impact
        },
        rating: 4.8,
        status: "active",
        whyRecommended: [
            "Volume Specialist in Bryanston East (10 Years)",
            "Prices to sell; high velocity in R7m+ bracket",
            "Boutique focus with big results"
        ],
        stats: { yearsExperience: 10, recentSales: 30, avgPrice: "R7.5m", estDaysOnMarket: "40 days" },
        contacts: { phone: "+27 82 851 2345", email: "gwen@cloeteproperties.co.za" },
        social: { website: "https://www.gdproperty.co.za/" },
        classification: { tier: "High Velocity Boutqiue" }
    },
    {
        id: "ag_sarah_veliciae",
        name: "Sarah",
        agency: "Veliciae Real Estate",
        slug: "sarah-veliciae",
        image: "https://images.prop24.com/user_images/sarah_veliciae_large.jpg",
        areas: ["hyde-park"],
        suburbs: {
            "hyde-park": { priority: 3, badge: "Efficiency Expert" }
        },
        rating: 4.8,
        status: "active",
        whyRecommended: [
            "'Speed and Joy' philosophy (8 Years)",
            "Cuts through red tape for fast acquisitions",
            "Pinnacle of comfort and efficiency"
        ],
        stats: { yearsExperience: 8, recentSales: 8, avgPrice: "R9.0m", estDaysOnMarket: "45 days" },
        contacts: { phone: "Available on request", email: "info@veliciae.com" },
        social: { website: "https://veliciae.com/" },
        classification: { tier: "Efficiency Expert" }
    },
    {
        id: "ag_lou_anne_chetty",
        name: "Lou-Anne Chetty",
        agency: "Sotheby's International Realty",
        slug: "lou-anne-chetty",
        image: "https://images.prop24.com/user_images/louanne_chetty_large.jpg",
        areas: ["atholl"],
        suburbs: {
            "atholl": { priority: 2, badge: "Service-Oriented Hustler" }
        },
        rating: 4.8,
        status: "active",
        whyRecommended: [
            "Intense local market knowledge (8 Years)",
            "Rapid follow-up; High client satisfaction",
            "Professional, responsive system"
        ],
        stats: { yearsExperience: 8, recentSales: 6, avgPrice: "R6.5m", estDaysOnMarket: "50 days" },
        contacts: { phone: "+27 11 886 8070", email: "louanne.chetty@sothebys.com" },
        social: { facebook: "https://www.facebook.com/sothebyssandton/" },
        classification: { tier: "Service-Oriented Hustler" }
    },
    {
        id: "ag_leanne_bakos",
        name: "Leanne Bakos",
        agency: "Byron Thomas Properties",
        slug: "leanne-bakos",
        image: "https://images.prop24.com/user_images/leanne_bakos_large.jpg",
        areas: ["atholl", "sandown"],
        suburbs: {
            "atholl": { priority: 3, badge: "Agile Practitioner" },
            "sandown": { priority: 1, badge: "Turnover Specialist" }
        },
        rating: 4.8,
        status: "active",
        whyRecommended: [
            "12 Year Expert: Manages high turnover",
            "Adept at navigating shifts to cluster living",
            "High digital presence"
        ],
        stats: { yearsExperience: 12, recentSales: 15, avgPrice: "R4.5m", estDaysOnMarket: "40 days" },
        contacts: { phone: "+27 11 447 0000", email: "leanne@btproperties.co.za" },
        social: { instagram: "https://www.instagram.com/leannebakos_property/" },
        classification: { tier: "Turnover Specialist" }
    },
    {
        id: "ag_mamello_monaheng",
        name: "Mamello Monaheng",
        agency: "Independent Specialist",
        slug: "mamello-monaheng",
        image: "https://images.prop24.com/user_images/mamello_monaheng_large.jpg",
        areas: ["houghton-estate"],
        suburbs: {
            "houghton-estate": { priority: 1, badge: "Development Pro" }
        },
        rating: 4.8,
        status: "active",
        whyRecommended: [
            "Focused on 'Tree Tops' & modern developments",
            "Targets younger demographics (5 Years Exp)",
            "Rising Star in Houghton"
        ],
        stats: { yearsExperience: 5, recentSales: 8, avgPrice: "R2.5m", estDaysOnMarket: "35 days" },
        contacts: { phone: "+27 11 123 4567", email: "mamello@houghtonproperty.co.za" },
        social: { website: "https://www.property24.com/" },
        classification: { tier: "Development Specialist" }
    }
];

export function getAgentsForSuburb(suburbSlug: string): Agent[] {
    // 1. Filter agents who have a specific profile for this suburb
    let matches = recommendedAgents.filter(a => a.suburbs && a.suburbs[suburbSlug]);

    // 2. Sort by Priority (Low number = High Priority)
    matches.sort((a, b) => {
        const pA = a.suburbs[suburbSlug].priority || 99;
        const pB = b.suburbs[suburbSlug].priority || 99;
        return pA - pB;
    });

    // 3. Fallback: If < 3 agents, find "Sandton Generalists" (High Velocity ones)
    // We define generalists as those with > 10 recent sales and < 60 days estDaysOnMarket
    if (matches.length < 3) {
        const generalists = recommendedAgents.filter(a =>
            !matches.find(m => m.id === a.id) && // Not already matched
            (a.stats?.recentSales > 10 || a.agency.includes("Byron Thomas") || a.agency.includes("Fine & Country")) // Agencies with good overlap
        ).sort((a, b) => (b.stats?.recentSales || 0) - (a.stats?.recentSales || 0));

        matches = [...matches, ...generalists];
    }

    // 4. Return top 3 (or up to 6 if we want options, but UI handles 3 well)
    return matches.slice(0, 3);
}
