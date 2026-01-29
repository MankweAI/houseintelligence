"use client";

import { Agent } from "@/lib/agents";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShieldCheck } from "lucide-react";
import { PlaceholderImage } from "../PlaceholderImage";
import { Button } from "../ui/button";
import { ValuationModal } from "@/components/seller/ValuationModal";

interface AgentCardProps {
    agent: Agent;
    suburbName: string;
    suburbSlug: string;
}

export function AgentCard({ agent, suburbName, suburbSlug }: AgentCardProps) {
    const suburbProfile = agent.suburbs?.[suburbSlug];
    // Badge Priority: Suburb Specific -> Agency
    const badgeText = suburbProfile?.badge || agent.agency;
    // Highlight if it's a "special" badge (not just the agency name)
    const isSpecialBadge = !!suburbProfile?.badge;

    return (
        <Card className="overflow-hidden hover:shadow-lg transition-shadow border-stone-200 group">
            <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="w-full md:w-48 h-48 md:h-auto relative bg-stone-100 shrink-0">
                    <PlaceholderImage alt={agent.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute top-2 left-2 flex flex-col gap-1 items-start">
                        <Badge className={`${isSpecialBadge ? 'bg-amber-500 text-white' : 'bg-white/90 text-stone-900'} border-none shadow-sm backdrop-blur-sm`}>
                            {badgeText}
                        </Badge>
                        {isSpecialBadge && (
                            <Badge className="bg-white/90 text-[10px] text-stone-600 border-none shadow-sm backdrop-blur-sm">
                                {agent.agency}
                            </Badge>
                        )}
                    </div>
                </div>

                {/* Content Section */}
                <CardContent className="flex-1 p-6">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="font-serif font-bold text-xl text-stone-900">{agent.name}</h3>
                            <div className="flex items-center gap-2 text-sm text-stone-500 mt-1">
                                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                                <span>Vetted Expert</span>
                                <span className="text-stone-300">•</span>
                                <div className="flex items-center">
                                    <Star className="h-3 w-3 fill-amber-400 text-amber-400 mr-1" />
                                    {agent.rating}
                                </div>
                            </div>
                        </div>
                        <div className="text-right hidden sm:block">
                            {agent.stats.estDaysOnMarket ? (
                                <div className="mb-2">
                                    <p className="text-sm font-bold text-emerald-700">{agent.stats.estDaysOnMarket}</p>
                                    <p className="text-[10px] uppercase tracking-wider text-stone-400">Est. Speed</p>
                                </div>
                            ) : (
                                <div>
                                    <p className="text-sm font-semibold text-stone-900">{agent.stats.avgPrice}</p>
                                    <p className="text-xs text-stone-500">Avg Sale Price</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="mb-6">
                        <p className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">Why We Recommend</p>
                        <ul className="space-y-2">
                            {/* If we have a suburb-specific quote/why, use it? For now, stick to general whyRecommended */}
                            {agent.whyRecommended.slice(0, 3).map((reason, i) => (
                                <li key={i} className="text-sm text-stone-700 flex items-start gap-2">
                                    <span className="text-amber-500 mt-1">✓</span>
                                    {reason}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex gap-3 mt-auto">
                        <ValuationModal suburbName={suburbName} agentName={agent.name}>
                            <Button variant="outline" className="w-full border-stone-300 text-stone-700 hover:bg-stone-50">
                                Contact Just {agent.name.split(' ')[0]}
                            </Button>
                        </ValuationModal>
                    </div>
                </CardContent>
            </div>
        </Card>
    );
}
