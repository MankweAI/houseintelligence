"use client";

import { Agent } from "@/lib/agents";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShieldCheck } from "lucide-react";
import { PlaceholderImage } from "../PlaceholderImage"; // Reuse existing
import { Button } from "../ui/button";
import { ValuationModal } from "@/components/seller/ValuationModal";

interface AgentCardProps {
    agent: Agent;
    suburbName: string;
}

export function AgentCard({ agent, suburbName }: AgentCardProps) {
    return (
        <Card className="overflow-hidden hover:shadow-lg transition-shadow border-slate-200">
            <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="w-full md:w-48 h-48 md:h-auto relative bg-slate-100 shrink-0">
                    <PlaceholderImage alt={agent.name} fill className="object-cover" />
                    <div className="absolute top-2 left-2">
                        <Badge className="bg-white/90 text-slate-900 border-none shadow-sm backdrop-blur-sm">
                            {agent.agency}
                        </Badge>
                    </div>
                </div>

                {/* Content Section */}
                <CardContent className="flex-1 p-6">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="font-serif font-bold text-xl text-slate-900">{agent.name}</h3>
                            <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                                <span>Vetted Expert</span>
                                <span className="text-slate-300">•</span>
                                <div className="flex items-center">
                                    <Star className="h-3 w-3 fill-amber-400 text-amber-400 mr-1" />
                                    {agent.rating}
                                </div>
                            </div>
                        </div>
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-semibold text-slate-900">{agent.stats.avgPrice}</p>
                            <p className="text-xs text-slate-500">Avg Sale Price</p>
                        </div>
                    </div>

                    <div className="mb-6">
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Why We Recommend</p>
                        <ul className="space-y-2">
                            {agent.whyRecommended.map((reason, i) => (
                                <li key={i} className="text-sm text-slate-700 flex items-start gap-2">
                                    <span className="text-emerald-500 mt-1">✓</span>
                                    {reason}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex gap-3 mt-auto">
                        <ValuationModal suburbName={suburbName} agentName={agent.name}>
                            <Button variant="outline" className="w-full border-slate-300 text-slate-700 hover:bg-slate-50">
                                Contact Just {agent.name.split(' ')[0]}
                            </Button>
                        </ValuationModal>
                    </div>
                </CardContent>
            </div>
        </Card>
    );
}
