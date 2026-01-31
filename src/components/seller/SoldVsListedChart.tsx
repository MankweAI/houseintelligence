"use client";

import { ArrowDown, Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface SoldVsListedChartProps {
    data: {
        listingPrice: number;
        soldPrice: number;
        gapPercentage: number;
        insight: string;
    };
    suburbName: string;
}

export function SoldVsListedChart({ data, suburbName }: SoldVsListedChartProps) {
    const formatCurrency = (val: number) =>
        new Intl.NumberFormat('en-ZA', {
            style: 'currency',
            currency: 'ZAR',
            maximumFractionDigits: 0,
            notation: "compact",
            compactDisplay: "short"
        }).format(val);

    return (
        <div className="bg-white p-8 rounded-3xl border border-stone-200 h-full flex flex-col justify-between relative overflow-hidden group hover:border-amber-200 transition-all duration-500">

            {/* Header */}
            <div className="mb-8 relative z-10">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif font-bold text-xl text-stone-900">The Reality Gap</h3>
                    <div className="bg-stone-100 p-2 rounded-full text-stone-400 group-hover:text-amber-600 transition-colors">
                        <Info className="h-4 w-4" />
                    </div>
                </div>
                <p className="text-sm text-stone-500 leading-relaxed">
                    Average listing price vs. what sellers actually accept in {suburbName}.
                </p>
            </div>

            {/* Chart Area */}
            <div className="relative z-10 mt-auto px-4">
                <div className="flex items-end gap-4 h-56 w-full border-b border-stone-200 pb-0 relative">

                    {/* Listed Bar */}
                    <div className="flex-1 flex flex-col justify-end h-full relative group/listed">
                        <div className="mb-3 text-stone-400 text-[10px] font-bold uppercase tracking-widest text-center transition-colors group-hover/listed:text-stone-500">Listed Price</div>
                        <div className="w-full bg-gradient-to-b from-stone-200 to-stone-100 rounded-t-2xl h-[90%] relative overflow-visible transition-all duration-700 ease-out group-hover/listed:h-[92%] shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] border-t border-x border-white/50">

                            {/* Value Label */}
                            <div className="absolute top-4 w-full text-center">
                                <span className="font-bold text-stone-500 text-lg tracking-tight group-hover/listed:text-stone-700 transition-colors">
                                    {formatCurrency(data.listingPrice)}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Sold Bar */}
                    <div className="flex-1 flex flex-col justify-end h-full relative group/sold">
                        <div className="mb-3 text-emerald-600 text-[10px] font-bold uppercase tracking-widest text-center transition-colors group-hover/sold:text-emerald-700">Sold Price</div>
                        <div
                            className="w-full bg-gradient-to-b from-emerald-400 to-emerald-500 rounded-t-2xl relative overflow-visible shadow-[0_10px_30px_-10px_rgba(16,185,129,0.4)] transition-all duration-700 ease-out border-t border-x border-white/20 group-hover/sold:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.5)]"
                            style={{ height: `${(data.soldPrice / data.listingPrice) * 90}%` }}
                        >
                            {/* Inner Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-50 rounded-t-2xl pointer-events-none"></div>

                            {/* Value Label */}
                            <div className="absolute top-4 w-full text-center">
                                <span className="font-bold text-white text-xl tracking-tight drop-shadow-md">
                                    {formatCurrency(data.soldPrice)}
                                </span>
                            </div>
                        </div>

                        {/* Gap Pill - Enhanced */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-16 whitespace-nowrap z-20">
                            <div className="bg-white border border-rose-100 text-rose-600 pl-2 pr-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-[0_8px_16px_-4px_rgba(225,29,72,0.15)] ring-4 ring-rose-50/50 backdrop-blur-md transform transition-transform duration-500 hover:scale-105">
                                <div className="bg-rose-100/50 p-1 rounded-full">
                                    <ArrowDown className="h-3 w-3" />
                                </div>
                                <span>{Math.abs(data.gapPercentage)}% Gap</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Footer Insight */}
            <div className="mt-6 pt-4 border-t border-stone-100">
                <p className="text-xs text-stone-500 italic">
                    "{data.insight}"
                </p>
            </div>

        </div>
    );
}
