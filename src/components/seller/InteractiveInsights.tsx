"use client";

import { useState } from "react";
import { Users, AlertTriangle, TrendingUp, CheckCircle, Home, Building2, MousePointerClick } from "lucide-react";
import { SuburbSellerData } from "@/lib/seller-data";
import { cn } from "@/lib/utils";

interface InteractiveInsightsProps {
    data: SuburbSellerData;
    suburbName: string;
}

export function InteractiveInsights({ data, suburbName }: InteractiveInsightsProps) {
    const [context, setContext] = useState<"house" | "sectional">("house");

    // Helper to get active data based on context
    const activeBuyer = context === "house"
        ? data.buyerProfile
        : { ...data.buyerProfile, ...data.buyerProfile.variations?.sectional };

    const activeIntelligence = context === "house"
        ? data.sellerIntelligence
        : { ...data.sellerIntelligence, ...data.sellerIntelligence.variations?.sectional };

    // Resolve motivations (handle string[] vs potential variation)
    const motivations = activeBuyer.motivations || data.buyerProfile.motivations;
    const pricingMistakes = activeIntelligence.pricingMistakes || data.sellerIntelligence.pricingMistakes;
    const marketingAngles = activeIntelligence.marketingAngles || data.sellerIntelligence.marketingAngles;

    // Hardcoded descriptions to map to the data points for richer UI (simplified for demo)
    const getStrategyDescription = (title: string, index: number) => {
        if (context === "house") {
            const descriptions = [
                "Don't just sell security features; sell the lifestyle of total safety. Highlight the boomed access as a 'private estate' feel.",
                "Convert the 4th bedroom or staff quarters into a high-spec WFH office. This is the #1 request from Sandton buyers.",
                "List on private brokerage networks 7 days before Property24. Creating 'scarcity' drives higher initial offers."
            ];
            return descriptions[index] || "Maximize value by aligning with this key buyer driver.";
        } else {
            // Sectional descriptions
            const descriptions = [
                "Position the unit as the perfect secure base for high-travel executives. Lock-up-and-go is the primary value driver.",
                "Investors are looking for yield. Explicitly calculate and show potential rental returns in your listing copy.",
                "Emphasize the 'freedom' of low-maintenance living. Highlight the complex amenities (pool/gym) as personal extensions."
            ];
            return descriptions[index] || "Focus on the convenience and investment potential.";
        }
    };

    return (
        <div className="space-y-12">
            {/* Context Toggle */}
            <div className="flex justify-center mb-8">
                <div className="bg-stone-100 p-1.5 rounded-full inline-flex relative">
                    <button
                        onClick={() => setContext("house")}
                        className={cn(
                            "px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all duration-300 relative z-10",
                            context === "house" ? "bg-white text-amber-800 shadow-sm" : "text-stone-500 hover:text-stone-700"
                        )}
                    >
                        <Home className="w-4 h-4" />
                        Freehold House
                    </button>
                    <button
                        onClick={() => setContext("sectional")}
                        className={cn(
                            "px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all duration-300 relative z-10",
                            context === "sectional" ? "bg-white text-amber-800 shadow-sm" : "text-stone-500 hover:text-stone-700"
                        )}
                    >
                        <Building2 className="w-4 h-4" />
                        Apartment / Cluster
                    </button>
                </div>
            </div>

            {/* 2. Buyer Profile */}
            <section>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-serif font-bold text-stone-900 flex items-center gap-2">
                        <Users className="h-6 w-6 text-amber-600" />
                        The {suburbName} Buyer Avatar
                    </h2>
                    <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
                        {context === "house" ? "House Buyers" : "Sectional Buyers"}
                    </span>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-stone-200 relative overflow-hidden transition-all duration-500">
                    <div className="relative z-10">
                        <p className="font-medium text-lg text-stone-800 mb-6">
                            Target: <span className="font-bold text-amber-700">{activeBuyer.dominant}</span>
                        </p>

                        {/* Demographics Bar (Static for now as split is suburb wide, but could be specific) */}
                        <div className="flex h-4 w-full rounded-full overflow-hidden mb-6 opacity-80 grayscale-[0.3]">
                            {data.buyerProfile.split.map((segment, i) => (
                                <div
                                    key={i}
                                    style={{ width: `${segment.percentage}%` }}
                                    className={`h-full ${i === 0 ? 'bg-amber-600' : i === 1 ? 'bg-amber-400' : 'bg-amber-200'}`}
                                />
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-stone-500 mb-8">
                            <span className="italic text-xs">Market-wide demographic split</span>
                        </div>

                        <h4 className="font-bold text-stone-900 mb-4">Top Motivations (Sell to this!)</h4>
                        <div className="space-y-3">
                            {motivations.map((m, i) => (
                                <div key={i} className="flex items-start gap-3 animate-in fade-in slide-in-from-bottom-2" style={{ animationDelay: `${i * 100}ms` }}>
                                    <CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                                    <span className="text-stone-700 font-medium leading-tight">
                                        {m}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Mistakes to Avoid */}
            <section>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6 flex items-center gap-2">
                    <AlertTriangle className="h-6 w-6 text-amber-500" />
                    Don't Lose The Deal
                </h2>
                <div className="bg-amber-50 p-8 rounded-3xl border border-amber-100 transition-all duration-500">
                    <div className="space-y-4">
                        {pricingMistakes.map((mistake, i) => (
                            <div key={i} className="flex gap-4 items-start animate-in fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                                <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-bold text-sm border border-amber-200">
                                    {i + 1}
                                </span>
                                <p className="text-amber-900 font-medium leading-relaxed pt-1">
                                    {mistake}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Strategic Timeline */}
            <section className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
                {/* Header */}
                <div className="flex items-center gap-3 mb-8 pb-6 border-b border-stone-200">
                    <div className="h-10 w-10 rounded-lg bg-amber-600 flex items-center justify-center">
                        <TrendingUp className="h-5 w-5 text-white" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-stone-900">
                            Execution Strategy
                        </h2>
                        <p className="text-sm text-stone-500">
                            {context === "house" ? "Freehold Properties" : "Sectional Title"}
                        </p>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Time on Market */}
                    <div className="bg-white p-6 rounded-xl border border-stone-200 hover:border-amber-300 hover:shadow-md transition-all group">
                        <div className="text-sm font-medium text-stone-600 mb-3 uppercase tracking-wide">
                            Time on Market
                        </div>
                        <div className="text-3xl font-bold text-stone-900 mb-3">
                            {data.sellerIntelligence.timeline.wellPriced}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-amber-700">
                            <CheckCircle className="h-4 w-4" />
                            <span>if priced correctly</span>
                        </div>
                    </div>

                    {/* Negotiation Room */}
                    <div className="bg-white p-6 rounded-xl border border-stone-200 hover:border-stone-300 hover:shadow-md transition-all">
                        <div className="text-sm font-medium text-stone-600 mb-3 uppercase tracking-wide">
                            Negotiation Room
                        </div>
                        <div className="text-3xl font-bold text-stone-900 mb-3">
                            {data.sellerIntelligence.timeline.negotiationRoom}
                        </div>
                        <div className="text-sm text-stone-500">
                            typical buyer discount
                        </div>
                    </div>

                    {/* Best Launch Window */}
                    <div className="bg-white p-6 rounded-xl border border-stone-200 hover:border-stone-300 hover:shadow-md transition-all">
                        <div className="text-sm font-medium text-stone-600 mb-3 uppercase tracking-wide">
                            Best Launch Window
                        </div>
                        <div className="text-3xl font-bold text-stone-900 mb-3">
                            {data.sellerIntelligence.timeline.bestSeason}
                        </div>
                        <div className="text-sm text-stone-500">
                            peak buyer activity
                        </div>
                    </div>
                </div>

                {/* Winning Strategies */}
                <div className="bg-white p-6 rounded-xl border border-stone-200">
                    <div className="flex items-center gap-2 mb-6 pb-4 border-b border-stone-100">
                        <div className="h-1 w-8 bg-amber-600 rounded-full" />
                        <h3 className="text-base font-bold text-stone-900">
                            How You Win in {suburbName}
                        </h3>
                    </div>

                    <div className="space-y-4">
                        {marketingAngles.map((angle, i) => (
                            <div
                                key={i}
                                className="flex gap-4 p-0 rounded-lg hover:bg-stone-50 transition-all group cursor-pointer border border-transparent hover:border-stone-200"
                            >
                                <div className="h-10 w-10 rounded-lg bg-stone-900 flex items-center justify-center shrink-0 group-hover:bg-amber-600 transition-colors">
                                    <span className="font-bold text-white text-sm">{i + 1}</span>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-stone-900 font-semibold mb-1.5 text-sm">
                                        {angle.replace(/['"]/g, '')}
                                    </h4>
                                    <p className="text-sm text-stone-600 leading-relaxed">
                                        {getStrategyDescription(angle, i)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
