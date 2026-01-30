"use client";

import { Badge } from "@/components/ui/badge";
import { CheckCircle, Zap, Trophy, Users } from "lucide-react";

export function AgentSelectionMethodology() {
    return (
        <section className="bg-stone-950 py-20 rounded-3xl overflow-hidden relative mb-16 border border-stone-800">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                </svg>
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 bg-emerald-900/30 px-4 py-1.5 rounded-full border border-emerald-500/30 mb-8">
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-100/90">Rigorous Vetting Process</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                    We Don't List "Famous" Agents.<br />
                    We List <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">The Hungry Ones.</span>
                </h2>

                <p className="text-stone-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-16">
                    We analyzed <strong className="text-white">2,400+ recent Sandton transactions</strong> to find the "Underdogs"—the rising stars who play by a modern set of rules.
                </p>

                <div className="grid md:grid-cols-3 gap-6 text-left">
                    {/* Pillar 1: Velocity */}
                    <div className="bg-stone-900/50 p-8 rounded-2xl border border-stone-800 hover:border-amber-500/30 transition-colors group">
                        <div className="w-14 h-14 bg-stone-800 rounded-xl flex items-center justify-center mb-6 border border-stone-700 group-hover:bg-amber-500/10 group-hover:border-amber-500/50 transition-all">
                            <Zap className="h-7 w-7 text-stone-300 group-hover:text-amber-500" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                            1. Speed is Safety
                            <Badge className="bg-stone-800 text-stone-400 text-[10px] border-stone-700">VERIFIED</Badge>
                        </h3>
                        <p className="text-stone-400 text-sm leading-relaxed">
                            Sandton averages 180 days to sell. Our selected agents average <strong className="text-white">45 days</strong>. Speed is our #1 metric because time kills deals.
                        </p>
                    </div>

                    {/* Pillar 2: The Hunger Index */}
                    <div className="bg-stone-900/50 p-8 rounded-2xl border border-stone-800 hover:border-emerald-500/30 transition-colors group relative overflow-hidden">
                        {/* Subtle highlight for the 'hero' pillar */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl -mr-10 -mt-10"></div>

                        <div className="w-14 h-14 bg-stone-800 rounded-xl flex items-center justify-center mb-6 border border-stone-700 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/50 transition-all relative z-10">
                            <Trophy className="h-7 w-7 text-stone-300 group-hover:text-emerald-500" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2 relative z-10">
                            2. T.E.C.H. Driven
                            <Badge className="bg-emerald-900/50 text-emerald-400 text-[10px] border-emerald-800">CORE</Badge>
                        </h3>
                        <p className="text-stone-400 text-sm leading-relaxed relative z-10">
                            We prioritize digital-first "Rising Stars" (3-12 years exp). They use video-first marketing and AI targeting, not just Sunday show days.
                        </p>
                    </div>

                    {/* Pillar 3: Focus */}
                    <div className="bg-stone-900/50 p-8 rounded-2xl border border-stone-800 hover:border-blue-500/30 transition-colors group">
                        <div className="w-14 h-14 bg-stone-800 rounded-xl flex items-center justify-center mb-6 border border-stone-700 group-hover:bg-blue-500/10 group-hover:border-blue-500/50 transition-all">
                            <Users className="h-7 w-7 text-stone-300 group-hover:text-blue-500" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                            3. Capped Capacity
                            <Badge className="bg-stone-800 text-stone-400 text-[10px] border-stone-700">EXCLUSIVE</Badge>
                        </h3>
                        <p className="text-stone-400 text-sm leading-relaxed">
                            We disqualify "Parking Lot" agents who hoard 50+ listings. Our agents are capped at <strong className="text-white">15 active homes</strong> so yours gets 100% focus.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
