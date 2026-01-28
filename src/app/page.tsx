'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';
import {
    Home,
    ShieldCheck,
    TrendingUp,
    ArrowRight,
    Map
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AppHome() {
    return (
        <div className="bg-stone-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[600px] bg-stone-900 flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/hero-images/app-dashboard-hero.webp"
                        alt="HouseIntelligence Market Dashboard"
                        fill
                        className="object-cover opacity-70"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/80 to-transparent" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <FadeIn>
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-2 mb-6">
                                <span className="bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                                    HouseIntelligence Suite
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                                Your Command Center for <span className="text-amber-500">Property Wealth.</span>
                            </h1>
                            <p className="text-xl text-stone-300 mb-8 leading-relaxed">
                                Access verified market data, generate seller playbooks, and audit property value with institutional-grade intelligence.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/sell-house/sandton">
                                    <Button className="h-12 px-8 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-full">
                                        Start Selling
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                                <Link href="/about">
                                    <Button variant="outline" className="h-12 px-8 border-stone-600 text-stone-300 hover:text-white hover:bg-stone-800 rounded-full">
                                        Learn Methodology
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Tools Grid */}
            <section className="py-20 -mt-20 relative z-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Tool 1: Seller Playbook */}
                        <StaggerItem>
                            <Link href="/sell-house/sandton" className="group block h-full">
                                <div className="bg-white p-8 rounded-3xl shadow-xl shadow-stone-900/5 border border-stone-100 hover:border-amber-500/30 transition-all h-full flex flex-col">
                                    <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Home className="h-6 w-6 text-amber-600" />
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-stone-900 mb-3">Seller's Playbook</h3>
                                    <p className="text-stone-600 leading-relaxed mb-6 flex-1">
                                        Generate a suburb-specific strategy to sell your home 40% faster. Pricing, marketing, and verified agent selection.
                                    </p>
                                    <div className="flex items-center text-amber-600 font-bold text-sm">
                                        Launch Tool <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        </StaggerItem>

                        {/* Tool 2: Market Audit (Future) */}
                        <StaggerItem>
                            <div className="bg-stone-100 p-8 rounded-3xl border border-transparent h-full flex flex-col opacity-80 cursor-not-allowed">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                                    <ShieldCheck className="h-6 w-6 text-stone-400" />
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-stone-500 mb-3">Wealth Audit</h3>
                                <p className="text-stone-500 leading-relaxed mb-6 flex-1">
                                    Analyze your total property portfolio risk and growth potential against live market indices.
                                </p>
                                <div className="flex items-center text-stone-400 font-bold text-sm uppercase tracking-wider">
                                    Coming Soon
                                </div>
                            </div>
                        </StaggerItem>

                        {/* Tool 3: Suburb Explorer */}
                        <StaggerItem>
                            <Link href="/sell-house/sandton" className="group block h-full">
                                <div className="bg-white p-8 rounded-3xl shadow-xl shadow-stone-900/5 border border-stone-100 hover:border-emerald-500/30 transition-all h-full flex flex-col">
                                    <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Map className="h-6 w-6 text-emerald-600" />
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-stone-900 mb-3">Suburb Explorer</h3>
                                    <p className="text-stone-600 leading-relaxed mb-6 flex-1">
                                        Deep dive into 17 verified Sandton suburbs. Access live sales data, safety ratings, and lifestyle profiles.
                                    </p>
                                    <div className="flex items-center text-emerald-600 font-bold text-sm">
                                        View Map <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>

            {/* Live Data Ticker Section */}
            <section className="py-12 border-t border-stone-200 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Live Market Pulse</h2>
                            <p className="text-stone-500">Real-time data stream from BigDataQuery</p>
                        </div>

                        <div className="overflow-x-auto border border-stone-200 rounded-xl">
                            <div className="flex gap-8 px-4 py-4">
                                <div className="bg-stone-50 px-6 py-4 rounded-xl min-w-[200px]">
                                    <div className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">
                                        Sandton Median
                                    </div>
                                    <div className="text-2xl font-bold text-stone-900">R5.1M</div>
                                    <div className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                                        <TrendingUp className="h-3 w-3" /> +2.4% YoY
                                    </div>
                                </div>

                                <div className="bg-stone-50 px-6 py-4 rounded-xl min-w-[200px]">
                                    <div className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">
                                        Active Buyers
                                    </div>
                                    <div className="text-2xl font-bold text-stone-900">1,240</div>
                                    <div className="text-xs text-stone-500 font-bold">
                                        Last 30 Days
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
