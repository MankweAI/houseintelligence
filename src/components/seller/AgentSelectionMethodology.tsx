"use client";

import { CheckCircle, Zap, Trophy, Users } from "lucide-react";

export function AgentSelectionMethodology() {
    return (
        <section className="bg-stone-900 py-16 rounded-3xl overflow-hidden relative mb-16">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                </svg>
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 bg-stone-800/50 px-4 py-1.5 rounded-full border border-stone-700 mb-6">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-300">Our Vetting Process</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                    We Don't List "Famous" Agents.<br />
                    We List <span className="text-amber-500">Hungry</span> Ones.
                </h2>

                <p className="text-stone-400 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
                    Most "Top Agent" lists are just a popularity contest. We chose a different path.
                    We analyzed 2,400+ transactions to find the "Underdogs"—the rising stars who play by a new set of rules.
                </p>

                <div className="grid md:grid-cols-3 gap-8 text-left">
                    {/* Pillar 1: Velocity */}
                    <div className="bg-stone-800/50 p-6 rounded-2xl border border-stone-700/50 backdrop-blur-sm">
                        <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mb-4">
                            <Zap className="h-6 w-6 text-amber-500" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">1. Velocity First</h3>
                        <p className="text-stone-400 text-sm">
                            Sandton averages 180 days to sell. Our selected agents average <strong>45 days</strong>. Speed is our #1 metric because time kills deals.
                        </p>
                    </div>

                    {/* Pillar 2: The Hunger Index */}
                    <div className="bg-stone-800/50 p-6 rounded-2xl border border-stone-700/50 backdrop-blur-sm">
                        <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center mb-4">
                            <Trophy className="h-6 w-6 text-emerald-500" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">2. The "Hunger" Index</h3>
                        <p className="text-stone-400 text-sm">
                            We prioritize "Rising Stars" (3-12 years exp) over veterans. They are experienced enough to be safe, but hungry enough to answer your call at 7 PM.
                        </p>
                    </div>

                    {/* Pillar 3: Focus */}
                    <div className="bg-stone-800/50 p-6 rounded-2xl border border-stone-700/50 backdrop-blur-sm">
                        <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                            <Users className="h-6 w-6 text-blue-500" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">3. Low Inventory</h3>
                        <p className="text-stone-400 text-sm">
                            We disqualify "Parking Lot" agents who hoard 50+ listings. Our agents carry leaner portfolios (5-15 homes) so yours gets 100% focus.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
