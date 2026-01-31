"use client";

import { useRef } from "react";
import { ArrowDown, Info, TrendingDown } from "lucide-react";
import { motion, useInView } from "framer-motion";
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
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const formatCurrency = (val: number) =>
        new Intl.NumberFormat('en-ZA', {
            style: 'currency',
            currency: 'ZAR',
            maximumFractionDigits: 0,
            notation: "compact", // "1.2M"
            compactDisplay: "short"
        }).format(val);

    const formatFullCurrency = (val: number) =>
        new Intl.NumberFormat('en-ZA', {
            style: 'currency',
            currency: 'ZAR',
            maximumFractionDigits: 0,
        }).format(val);

    // Calculate heights relative to listing price (100%)
    // But ensuring the Sold bar isn't too small visually
    const soldHeightPercent = Math.max(20, (data.soldPrice / data.listingPrice) * 100);

    return (
        <div
            ref={ref}
            className="group relative bg-white rounded-[2rem] p-8 border border-stone-100 shadow-xl shadow-stone-200/40 overflow-hidden h-full flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:shadow-stone-200/60 hover:border-stone-200"
        >
            {/* Background Decor */}
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                <TrendingDown className="w-32 h-32 text-stone-900" />
            </div>

            {/* Header */}
            <div className="relative z-10 mb-8">
                <div className="flex items-start justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-serif font-bold text-2xl text-stone-900">The Reality Gap</h3>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.2 }}
                                className="bg-rose-50 text-rose-600 text-[10px] font-bold px-2 py-0.5 rounded-full border border-rose-100 uppercase tracking-wide"
                            >
                                {suburbName}
                            </motion.div>
                        </div>
                        <p className="text-sm text-stone-500/90 leading-relaxed max-w-[90%]">
                            Market expectation vs. actual transaction reality.
                        </p>
                    </div>
                </div>
            </div>

            {/* Chart Visualization */}
            <div className="relative z-10 mt-auto px-2">
                <div className="flex items-end gap-6 h-64 w-full relative">

                    {/* Grid Lines (Subtle) */}
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                        <div className="w-full h-px bg-stone-300 border-t border-dashed border-stone-400"></div>
                        <div className="w-full h-px bg-stone-300 border-t border-dashed border-stone-400"></div>
                        <div className="w-full h-px bg-stone-300 border-t border-dashed border-stone-400"></div>
                        <div className="w-full h-px bg-stone-900"></div> {/* Baseline */}
                    </div>

                    {/* LISTED PRICE BAR */}
                    <div className="flex-1 flex flex-col justify-end h-full relative group/bar-listed">
                        <motion.div
                            initial={{ height: 0 }}
                            animate={isInView ? { height: "100%" } : {}}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                            className="w-full bg-stone-100 rounded-t-2xl relative overflow-hidden border border-stone-200/60"
                        >
                            <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-5"></div>
                            {/* Top Cap */}
                            <div className="absolute top-0 inset-x-0 h-1 bg-stone-300/50"></div>

                            {/* Label Inside - Bottom */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : {}}
                                transition={{ delay: 0.5 }}
                                className="absolute bottom-4 left-0 right-0 text-center"
                            >
                                <div className="text-[9px] font-bold uppercase tracking-widest text-stone-400 mb-0.5">Listed</div>
                                <div className="text-lg font-bold text-stone-500 tabular-nums tracking-tight">
                                    {formatCurrency(data.listingPrice)}
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* SOLD PRICE BAR */}
                    <div className="flex-1 flex flex-col justify-end h-full relative group/bar-sold">
                        <motion.div
                            initial={{ height: 0 }}
                            animate={isInView ? { height: `${soldHeightPercent}%` } : {}}
                            transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.3 }}
                            className="w-full bg-gradient-to-b from-emerald-500 to-emerald-600 rounded-t-2xl relative overflow-visible shadow-[0_0_40px_-10px_rgba(16,185,129,0.4)] group-hover/bar-sold:shadow-[0_0_60px_-10px_rgba(16,185,129,0.5)] transition-shadow duration-500"
                        >
                            <div className="absolute inset-0 bg-white/10 opacity-30 bg-[length:4px_4px] [background-image:linear-gradient(45deg,transparent_45%,black_50%,transparent_55%)]"></div>
                            {/* Top Glow */}
                            <div className="absolute top-0 inset-x-0 h-[1px] bg-white/60 shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>

                            {/* Label Inside - Bottom */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : {}}
                                transition={{ delay: 0.8 }}
                                className="absolute bottom-3 left-0 right-0 text-center"
                            >
                                <div className="text-[9px] font-bold uppercase tracking-widest text-emerald-200 mb-0.5">Sold</div>
                                <div className="text-xl font-bold text-white tabular-nums tracking-tight drop-shadow-md">
                                    {formatCurrency(data.soldPrice)}
                                </div>
                            </motion.div>

                            {/* GAP INDICATOR */}
                            {/* Floating badge connecting top of Sold to Listing level */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 1.0, type: "spring" }}
                                className="absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap z-30"
                            >
                                <div className="bg-rose-600 text-white pl-2 pr-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-rose-500/30 ring-2 ring-white">
                                    <ArrowDown className="h-3 w-3 text-rose-100" strokeWidth={3} />
                                    <span>{Math.abs(data.gapPercentage)}% Drop</span>
                                </div>
                                {/* Connector Line */}
                                <div className="w-px h-8 bg-rose-500/50 absolute left-1/2 -translate-x-1/2 top-full"></div>
                                <div className="w-1.5 h-1.5 bg-rose-500 rounded-full absolute left-1/2 -translate-x-1/2 top-full mt-8"></div>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Footer Insight */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.2, duration: 1 }}
                className="mt-6 pt-4 border-t border-stone-100"
            >
                <div className="flex gap-2.5">
                    <Info className="h-4 w-4 text-stone-400 shrink-0 mt-0.5" />
                    <p className="text-xs text-stone-500 italic leading-relaxed">
                        "{data.insight}"
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
