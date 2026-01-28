import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getSellerData } from '@/lib/seller-data';
import { getAgentsForSuburb } from '@/lib/agents';
import { getSuburbBySlug } from '@/lib/data';
import { CinematicHero } from '@/components/CinematicHero';
import { AgentCard } from '@/components/seller/AgentCard';
import { ValuationForm } from '@/components/seller/ValuationForm';
import { InteractiveInsights } from '@/components/seller/InteractiveInsights';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';
import { ArrowLeft, CheckCircle, TrendingUp, Users } from 'lucide-react';
import { getSuburbHeroImage } from '@/lib/images';
import { SuburbComparator } from '@/components/seller/SuburbComparator';
import { NearbySuburbs } from '@/components/seller/NearbySuburbs';
import { BroadcastValuationModal } from '@/components/seller/BroadcastValuationModal';
import { Button } from '@/components/ui/button';
import { ValuePropCards } from '@/components/seller/ValuePropCards';
import { SellerFAQs } from '@/components/seller/SellerFAQs';

// Inside the component return:



export const dynamicParams = true;

interface PageProps {
    params: Promise<{ suburbSlug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
    const { suburbSlug } = await params;
    const suburb = getSuburbBySlug(suburbSlug);
    if (!suburb) return { title: 'Suburb Not Found' };

    return {
        title: `Sell Your House in ${suburb.name} | 2025 Seller's Playbook`,
        description: `Maximize your sale price in ${suburb.name}. See what buyers are paying for, avoid common pricing mistakes, and meet practically vetted agents.`,
    };
}

export default async function SuburbSellerPage({ params }: PageProps) {
    const { suburbSlug } = await params;

    // 1. Fetch Data
    const suburb = getSuburbBySlug(suburbSlug);
    const sellerData = getSellerData(suburbSlug);
    const agents = getAgentsForSuburb(suburbSlug);

    // 2. Guardrails
    if (!suburb || !sellerData) {
        return notFound();
    }

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* JSON-LD Schema for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "WebPage",
                                "name": `Sell Your House in ${suburb.name}`,
                                "description": `Expert guide to selling your property in ${suburb.name}. Market data, pricing strategies, and top-rated local agents.`,
                                "url": `https://houseintelligence.co.za/sell-house/sandton/${suburb.slug}`,
                                "breadcrumb": {
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [
                                        {
                                            "@type": "ListItem",
                                            "position": 1,
                                            "name": "HouseIntelligence",
                                            "item": "https://houseintelligence.co.za/sell-house"
                                        },
                                        {
                                            "@type": "ListItem",
                                            "position": 2,
                                            "name": `Sell in ${suburb.name}`,
                                            "item": `https://houseintelligence.co.za/sell-house/sandton/${suburb.slug}`
                                        }
                                    ]
                                }
                            },
                            {
                                "@type": "RealEstateAgent",
                                "name": `${suburb.name} Market Intel`,
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
            {/* Navigation Back */}
            <div className="fixed top-24 left-4 z-40 hidden xl:block">
                <Link href="/sell-house" className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 bg-white/80 p-3 rounded-full backdrop-blur-sm shadow-sm transition-all border border-slate-200">
                    <ArrowLeft className="h-4 w-4" />
                    All Suburbs
                </Link>
            </div>

            {/* 1. Hero */}
            <div className="-mt-20">
                <CinematicHero
                    title="Homes Here Sell 40% Faster"
                    subtitle={`${sellerData.supplyDemand.estDaysOnMarket} days avg vs 180 Sandton-wide | ${sellerData.pricing.freehold.avgPrice} avg (Freehold)`}
                    supertitle={`${suburb.name} Market Intel`}
                    imageSrc={getSuburbHeroImage(suburb.slug)}
                    imageAlt={`${suburb.name} property market`}
                />
            </div>

            {/* E-E-A-T Signal Bar */}
            <div className="bg-slate-900 text-white relative z-20 -mt-20 py-4 border-b border-slate-800/50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-6 items-center text-sm text-slate-400">
                    <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-500" />
                        <span>Researched by <strong className="text-white">{sellerData.author.name}</strong></span>
                    </div>
                    <div className="hidden sm:block w-1 h-1 bg-slate-700 rounded-full" />
                    <div>
                        Last Verified: <strong className="text-white">{sellerData.lastUpdated}</strong>
                    </div>
                    <div className="hidden sm:block w-1 h-1 bg-slate-700 rounded-full" />
                    <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-indigo-400" />
                        <span>{sellerData.supplyDemand.salesPerYear} verified sales analyzed</span>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* LEFT COLUMN: Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* SEO Intro Paragraph */}
                        {/* SEO Intro Paragraph */}
                        <div className="text-center max-w-3xl mx-auto">
                            <p className="text-lg text-slate-700 leading-relaxed">
                                {sellerData.description ? (
                                    <>
                                        {sellerData.description}
                                    </>
                                ) : (
                                    <>
                                        Looking to <strong className="text-slate-900">sell your house in {suburb.name}</strong>? Our data shows homes here <strong className="text-emerald-700">sell 40% faster</strong> than the Sandton average.
                                    </>
                                )}
                            </p>
                        </div>

                        {/* 0. Value Proposition Cards - NEW */}
                        {sellerData.valueProp && (
                            <ValuePropCards valueProp={sellerData.valueProp} />
                        )}

                        {/* 1. Market Intelligence Grid */}
                        <FadeIn className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
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
                                    <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                                        {sellerData.supplyDemand.estDaysOnMarket}
                                    </div>
                                    <div className="text-xs text-emerald-600 font-medium bg-emerald-50 inline-block px-2 py-1 rounded">
                                        Well-priced
                                    </div>
                                </div>
                            </div>

                            {/* Insight */}
                            <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-600 italic mb-8 border-l-4 border-emerald-500">
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

                        {/* Micro-Markets (New Layer of Defensibility) */}
                        {sellerData.microMarkets && sellerData.microMarkets.length > 0 && (
                            <div className="border-t pt-6">
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

                        {/* Interactive Insights (Buyer Avatar, Mistakes, Strategy) */}
                        <InteractiveInsights data={sellerData} suburbName={suburb.name} />

                        {/* Smart Context Comparator */}
                        <SuburbComparator data={sellerData} suburbName={suburb.name} />



                        {/* Recommended Agents */}
                        <section>
                            <div className="flex justify-between items-end mb-6">
                                <h2 className="text-2xl font-serif font-bold text-slate-900">Top {suburb.name} Real Estate Agents</h2>
                                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Curated Selection ({agents.length})</span>
                            </div>

                            {/* Primary CTA - Broadcast to All */}
                            <BroadcastValuationModal suburbName={suburb.name} agents={agents}>
                                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white h-14 text-base font-bold mb-8 shadow-lg shadow-emerald-200/50 hover:shadow-xl hover:shadow-emerald-200/60 transition-all">
                                    🎯 Request Quotes from All {agents.length} Agents
                                </Button>
                            </BroadcastValuationModal>

                            <StaggerContainer className="grid gap-6">
                                {agents.map((agent) => (
                                    <StaggerItem key={agent.id}>
                                        <AgentCard agent={agent} suburbName={suburb.name} />
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                            <p className="text-xs text-slate-400 mt-6 text-center">
                                Disclaimer: We recommend these agents based on their proven track record in {suburb.name}, consistent sales performance, and client satisfaction. We are not employed by any specific agency.
                            </p>
                        </section>



                        {/* RIGHT COLUMN: Sticky CTA */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24" id="valuation-form">
                                <ValuationForm
                                    suburbSlug={suburb.name}
                                    buyerProfile={sellerData.buyerProfile.dominant}
                                />
                            </div>
                        </div>

                        {/* Smart Interlinking Footer */}
                        <NearbySuburbs currentSuburb={suburb} />


                    </div>

                </div>
            </div>

            {/* FAQ Section */}
            <SellerFAQs
                suburbName={suburb.name}
                avgPrice={sellerData.pricing.freehold.avgPrice}
                daysOnMarket={sellerData.supplyDemand.estDaysOnMarket}
            />

        </div>
    );
}
