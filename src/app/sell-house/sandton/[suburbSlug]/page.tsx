import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getSellerData } from '@/lib/seller-data';
import { getAgentsForSuburb } from '@/lib/agents';
import { getSuburbBySlug } from '@/lib/data';
import { CinematicHero } from '@/components/CinematicHero';
import { AgentCard } from '@/components/seller/AgentCard';
import { ValuationSimulator } from '@/components/seller/ValuationSimulator';
import { InteractiveInsights } from '@/components/seller/InteractiveInsights';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';
import { ArrowLeft, CheckCircle, TrendingUp, Users, Calendar } from 'lucide-react';
import { MarketPositioning } from "@/components/seller/MarketPositioning";
import { NearbySuburbs } from '@/components/seller/NearbySuburbs';
import { SoldVsListedChart } from '@/components/seller/SoldVsListedChart';
import { RenovationRoiCards } from '@/components/seller/RenovationRoiCards';
import { Button } from '@/components/ui/button';
import { ValuePropCards } from '@/components/seller/ValuePropCards';
import { SellerFAQs } from '@/components/seller/SellerFAQs';
import { DataMethodology } from '@/components/seller/DataMethodology';
import { PrintPlaybookButton } from '@/components/seller/PrintPlaybookButton';
import { BroadcastValuationModal } from '@/components/seller/BroadcastValuationModal';
import { getSuburbHeroImage } from '@/lib/images';
import { AgentSelectionMethodology } from '@/components/seller/AgentSelectionMethodology';
import { MarketNarrative } from '@/components/seller/MarketNarrative';
import { MarketPulseWidget } from '@/components/seller/MarketPulseWidget';


// Inside the component return:



export const dynamicParams = true;

interface PageProps {
    params: Promise<{ suburbSlug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
    const { suburbSlug } = await params;
    const suburb = await getSuburbBySlug(suburbSlug);
    if (!suburb) return { title: 'Suburb Not Found' };

    return {
        title: `Property Valuation & Selling in ${suburb.name} | 2025 Market Intel`,
        description: `Get a free property valuation in ${suburb.name}. See real market data, sold prices, and how to sell 40% faster than the Sandton average.`,
    };
}

export default async function SuburbSellerPage({ params }: PageProps) {
    const { suburbSlug } = await params;

    // 1. Fetch Data
    const suburb = await getSuburbBySlug(suburbSlug);
    const sellerData = await getSellerData(suburbSlug);
    const agents = getAgentsForSuburb(suburbSlug);

    // 2. Guardrails
    if (!suburb || !sellerData) {
        return notFound();
    }

    return (
        <div className="bg-stone-50 min-h-screen">
            {/* JSON-LD Schema for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "WebPage",
                                "name": `Property Valuation in ${suburb.name}`,
                                "description": `Expert property valuation methodology and selling guide for ${suburb.name}.`,
                                "url": `https://houseintelligence.co.za/sell-house/sandton/${suburb.slug}`,
                                "breadcrumb": {
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [
                                        {
                                            "@type": "ListItem",
                                            "position": 1,
                                            "name": "PropertyIntelligence",
                                            "item": "https://propertyintelligence.co.za/sell-house"
                                        },
                                        {
                                            "@type": "ListItem",
                                            "position": 2,
                                            "name": `${suburb.name} Valuation`,
                                            "item": `https://propertyintelligence.co.za/sell-house/sandton/${suburb.slug}`
                                        }
                                    ]
                                }
                            },
                            {
                                "@type": "RealEstateAgent",
                                "name": `${suburb.name} Valuation Services`,
                                "areaServed": {
                                    "@type": "City",
                                    "name": suburb.name,
                                    "containedIn": "Sandton, Johannesburg"
                                },
                                "offers": {
                                    "@type": "Offer",
                                    "description": "Free property valuation and seller consultation"
                                }
                            }
                        ]
                    })
                }}
            />

            {/* Desktop Navigation - Floating style */}
            <div className="fixed top-24 left-4 z-40 hidden md:block">
                <Link href="/sell-house/sandton" className="flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-stone-900 bg-white/80 p-3 rounded-full backdrop-blur-sm shadow-sm transition-all border border-stone-200">
                    <ArrowLeft className="h-4 w-4" />
                    All Suburbs
                </Link>
            </div>

            {/* 1. Hero */}
            <div className="-mt-20">
                <CinematicHero
                    title="What is Your Home Worth?"
                    subtitle={`Property valuation and sales intelligence for ${suburb.name}. See why well-priced homes sell 40% faster.`}
                    supertitle={`${suburb.name} Valuation & Market Intel`}
                    imageSrc={getSuburbHeroImage(suburb.slug)}
                    imageAlt={`${suburb.name} property valuation`}
                />
            </div>

            {/* E-E-A-T Signal Bar */}
            <div className="bg-stone-900 text-white relative z-20 -mt-20 py-4 border-b border-stone-800/50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-0 items-center text-sm text-stone-400">
                    <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-500" />
                        <span>Research by <strong className="text-white">Big Data Query</strong></span>
                    </div>
                    <div className="hidden sm:block w-1 h-1 bg-stone-700 rounded-full" />
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-emerald-500" />
                        <span className="text-stone-400">Next Update:</span>
                        <strong className="text-white">
                            {new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </strong>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">




                    {/* LEFT COLUMN: Content (Second on Mobile, Left on Desktop) */}
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 space-y-12">

                        {/* SEO Intro Paragraph */}
                        {/* SEO Intro Paragraph */}
                        {/* SEO Intro Paragraph - Dynamic Narrative */}
                        <MarketNarrative data={sellerData} suburbName={suburb.name} />

                        {/* 1. THE HOOK: The Reality Gap (Loss Aversion) */}
                        <div className="mb-12">
                            <SoldVsListedChart
                                suburbName={suburb.name}
                                data={sellerData.soldVsListed || {
                                    listingPrice: sellerData.pricing.freehold.avgPrice.includes('M')
                                        ? parseFloat(sellerData.pricing.freehold.avgPrice.replace('R', '').replace('M', '')) * 1000000 * 1.08
                                        : 2500000,
                                    soldPrice: sellerData.pricing.freehold.avgPrice.includes('M')
                                        ? parseFloat(sellerData.pricing.freehold.avgPrice.replace('R', '').replace('M', '')) * 1000000
                                        : 2200000,
                                    gapPercentage: -8,
                                    insight: `Sellers in ${suburb.name} are accepting offers ~8% below asking price.`
                                }}
                            />
                        </div>

                        {/* 2. THE CONTEXT: Social Proof (Ego) */}
                        <MarketPositioning data={sellerData} suburbName={suburb.name} />

                        {/* RIGHT COLUMN: Simulator (First on Mobile, Right on Desktop) */}
                        <div className="lg:col-span-1 lg:col-start-3 lg:row-start-1">
                            <div className="sticky top-24" id="valuation-form">
                                <ValuationSimulator
                                    suburbName={suburb.name}
                                    pricingData={{
                                        freehold: { avgPrice: sellerData.pricing.freehold.avgPrice },
                                        sectional: { avgPrice: sellerData.pricing.sectional.avgPrice }
                                    }}
                                />
                            </div>
                        </div>

                        {/* 3. THE GUIDE: Empathy (Trust) */}
                        <InteractiveInsights data={sellerData} suburbName={suburb.name} />

                        {/* 4. MARKET PULSE: Urgency */}
                        <MarketPulseWidget suburbName={suburb.name} />

                        {/* 5. THE DATA: Logic (Justification) */}
                        <FadeIn className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <TrendingUp className="h-6 w-6 text-emerald-600" />
                                <h2 className="text-2xl font-serif font-bold text-slate-900">
                                    {suburb.name} Market Intelligence for Sellers
                                </h2>
                            </div>

                            {/* Big Numbers First - Scannable */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
                                {/* Freehold Card */}
                                <div className="text-center p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors">
                                    <div className="text-xs uppercase tracking-wider text-slate-500 mb-2 font-semibold">Freehold Avg</div>
                                    <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 break-words">
                                        {sellerData.pricing.freehold.avgPrice}
                                    </div>
                                    <div className="text-xs text-slate-400 leading-tight">
                                        {sellerData.pricing.freehold.range}
                                    </div>
                                </div>

                                {/* Sectional Card - Featured */}
                                <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-2xl border-2 border-emerald-200 hover:shadow-md transition-all relative overflow-hidden">
                                    {/* Subtle Badge */}
                                    {sellerData.pricing.sectional.trend === 'UP' && (
                                        <div className="absolute top-2 right-2 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                                            TRENDING
                                        </div>
                                    )}
                                    <div className="text-xs uppercase tracking-wider text-emerald-700 mb-2 font-semibold">Sectional Avg</div>
                                    <div className="text-3xl md:text-4xl font-bold text-emerald-900 mb-2 break-words">
                                        {sellerData.pricing.sectional.avgPrice}
                                    </div>
                                    {sellerData.pricing.sectional.trend === 'UP' && (
                                        <div className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-200/50 px-2 py-1 rounded-full">
                                            <span>↗</span>
                                            <span>{sellerData.pricing.sectional.trendValue} YoY</span>
                                        </div>
                                    )}
                                </div>

                                {/* Days to Sell Card */}
                                <div className="text-center p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors">
                                    <div className="text-xs uppercase tracking-wider text-slate-500 mb-2 font-semibold">Avg Days to Sell</div>
                                    <div className="text-3xl md:text-4xl font-bold text-stone-900 mb-2">
                                        {sellerData.supplyDemand.estDaysOnMarket}
                                    </div>
                                    <div className="text-xs text-amber-600 font-medium bg-amber-50 inline-block px-2 py-1 rounded">
                                        Well-priced
                                    </div>
                                </div>
                            </div>

                            {/* Insight */}
                            <div className="bg-stone-50 p-4 rounded-lg text-sm text-stone-600 italic mb-8 border-l-4 border-amber-500">
                                "{sellerData.pricing.insight}"
                            </div>

                            {/* Secondary Stats */}
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wider">Market Health</h3>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span className="text-slate-600 text-sm">Ownership (11+ yrs)</span>
                                            <span className="font-bold text-slate-900">{sellerData.ownerStability.longTerm}%</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-600 text-sm">Market Temp</span>
                                            <span className={`font-bold px-2 py-0.5 rounded text-xs ${sellerData.supplyDemand.temperature === 'Sellers' ? 'bg-emerald-100 text-emerald-800' :
                                                sellerData.supplyDemand.temperature === 'Buyers' ? 'bg-amber-100 text-amber-800' :
                                                    'bg-blue-100 text-blue-800'
                                                }`}>{sellerData.supplyDemand.temperature}</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wider">Supply Mix</h3>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span className="text-slate-600 text-sm">Active Listings</span>
                                            <span className="font-bold text-slate-900">{sellerData.marketComposition.activeListings}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-600 text-sm">Annual Sales</span>
                                            <span className="font-bold text-slate-900">{sellerData.supplyDemand.salesPerYear}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Micro-Markets (Logic Continued) */}
                        {sellerData.microMarkets && sellerData.microMarkets.length > 0 && (
                            <div className="border-t pt-6 mb-12">
                                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <Users className="h-4 w-4 text-slate-400" />
                                    Buying Pockets (Micro-Markets)
                                </h3>
                                <div className="grid gap-3">
                                    {sellerData.microMarkets.map((micro, i) => (
                                        <div key={i} className="flex gap-4 p-3 bg-slate-50 rounded-lg">
                                            <div className={`shrink-0 w-2 h-full rounded-full ${micro.sentiment === 'Positive' ? 'bg-emerald-400' :
                                                micro.sentiment === 'Negative' ? 'bg-rose-400' : 'bg-slate-400'
                                                }`} />
                                            <div>
                                                <div className="font-bold text-sm text-slate-900 text-balance">{micro.name}</div>
                                                <div className="text-xs text-slate-600 leading-normal">{micro.insight}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* 6. THE SOLUTION: Action (Hope) */}
                        <div className="space-y-4 mb-12">
                            <div className="flex items-center gap-2 mb-2">
                                <h3 className="font-serif font-bold text-xl text-stone-900">Strategic Improvements</h3>
                            </div>
                            <RenovationRoiCards
                                data={sellerData.renovationRoi || [
                                    { item: "Kitchen Assessment", cost: 120000, valueAdd: 200000, roi: 1.6, verdict: 'Do It' },
                                    { item: "Security Upgrade", cost: 50000, valueAdd: 95000, roi: 1.9, verdict: 'Do It' },
                                    { item: "Pool Resurfacing", cost: 85000, valueAdd: 40000, roi: 0.47, verdict: 'Skip It' },
                                    { item: "Solar / Backup", cost: 150000, valueAdd: 150000, roi: 1.0, verdict: 'Caution' }
                                ]}
                            />
                        </div>

                        {/* Value Proposition Cards */}
                        {sellerData.valueProp && (
                            <ValuePropCards valueProp={sellerData.valueProp} />
                        )}

                        {/* Recommended Agents Primary CTA */}
                        <section>
                            <div className="mb-8">
                                <h2 className="text-3xl font-serif font-bold text-stone-900 mb-2">Top {suburb.name} Real Estate Agents</h2>
                                <p className="text-stone-500 text-sm max-w-xl italic">
                                    Vetted rising stars with a proven "hunger index" to outperform the market average and deliver your results faster.
                                </p>
                            </div>

                            {/* Primary CTA - Broadcast to All */}
                            <BroadcastValuationModal suburbName={suburb.name} agents={agents}>
                                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white h-14 text-base font-bold mb-8 shadow-lg shadow-amber-200/50 hover:shadow-xl hover:shadow-amber-200/60 transition-all">
                                    🎯 Get Valuation from All 3 Agents
                                </Button>
                            </BroadcastValuationModal>

                            <StaggerContainer className="grid gap-6">
                                {agents.map((agent) => (
                                    <StaggerItem key={agent.id}>
                                        <AgentCard agent={agent} suburbName={suburb.name} suburbSlug={suburbSlug} />
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                            <p className="text-xs text-stone-400 mt-6 text-center mb-16">
                                Disclaimer: We recommend these agents based on their proven track record in {suburb.name}, consistent sales performance, and client satisfaction. We are not employed by any specific agency.
                            </p>

                            {/* Methodology Section - Trust Signal */}
                            <AgentSelectionMethodology />
                        </section>





                    </div>
                </div>
                {/* End Main Content Wrapper */}
            </div>

            {/* Smart Interlinking Footer - Full Width */}
            <NearbySuburbs currentSuburb={suburb} />

            {/* Data Methodology Section - E-E-A-T Trust Signal */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
                <DataMethodology
                    suburbName={suburb.name}
                    salesAnalyzed={sellerData.supplyDemand.salesPerYear ?? 0}
                    lastUpdated={sellerData.lastUpdated}
                />
            </div>

            {/* FAQ Section */}
            <SellerFAQs
                suburbName={suburb.name}
                avgPrice={sellerData.pricing.freehold.avgPrice}
                daysOnMarket={sellerData.supplyDemand.estDaysOnMarket}
                marketTemperature={sellerData.supplyDemand.temperature}
            />

        </div>
    );
}
