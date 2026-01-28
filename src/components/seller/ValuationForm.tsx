"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Lock, Sparkles, Check, ChevronRight } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogDescription
} from "@/components/ui/dialog";

interface ValuationFormProps {
    suburbSlug: string;
    buyerProfile?: string; // e.g. "High-net-worth families"
}

export function ValuationForm({ suburbSlug, buyerProfile = "Target Buyers" }: ValuationFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setStep(3); // Success state
    };

    const handleOpenChange = (open: boolean) => {
        setIsOpen(open);
        if (!open) {
            // Reset form when closed (optional, but good UX if they didn't finish)
            const timer = setTimeout(() => {
                if (step === 3) setStep(1);
            }, 300);
            return () => clearTimeout(timer);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
                <div className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200 cursor-pointer group hover:border-emerald-500 transition-all duration-300 relative overflow-hidden">
                    {/* Decorative background gradient */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-emerald-100 rounded-lg text-emerald-700">
                                <Sparkles className="h-5 w-5" />
                            </div>
                            <h3 className="font-serif font-bold text-slate-900 leading-tight text-lg">
                                Get the {suburbSlug} <br /> Seller Strategy
                            </h3>
                        </div>
                        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                            Unlock the specific data points we can't publish publicly, including street-level pricing and active buyer demands.
                        </p>
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold group-hover:shadow-lg group-hover:shadow-emerald-200/50 transition-all">
                            Unlock Market Insights <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                        <p className="text-[10px] text-center text-slate-400 mt-3 font-medium uppercase tracking-wider flex items-center justify-center gap-1">
                            <Lock className="h-3 w-3" />
                            Private & Confidential
                        </p>
                    </div>
                </div>
            </DialogTrigger>

            <DialogContent className="sm:max-w-md bg-white">
                {step === 3 ? (
                    // Success View
                    <div className="py-6 text-center">
                        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Sparkles className="h-8 w-8 text-emerald-600" />
                        </div>
                        <h3 className="text-xl font-bold text-emerald-900 mb-2">Strategy Unlocked!</h3>
                        <p className="text-slate-600 mb-6 text-sm">
                            We've notified our {suburbSlug} specialist. Expect a WhatsApp shortly to refine these insights based on your property specifics.
                        </p>
                        <Button variant="outline" onClick={() => setIsOpen(false)} className="w-full">
                            Close
                        </Button>
                    </div>
                ) : (
                    // Form View
                    <form onSubmit={handleSubmit}>
                        <DialogHeader className="mb-6">
                            <DialogTitle className="text-2xl font-serif text-slate-900">Unlock {suburbSlug} Insights</DialogTitle>
                            <DialogDescription className="text-slate-500">
                                See exactly how to position your property for the {buyerProfile} market.
                            </DialogDescription>
                        </DialogHeader>

                        {/* Value Props */}
                        <div className="bg-slate-50 p-4 rounded-xl mb-6 space-y-2 border border-slate-100">
                            <div className="flex items-start gap-2 text-sm text-slate-700">
                                <Check className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                                <span>Street-level valuation band</span>
                            </div>
                            <div className="flex items-start gap-2 text-sm text-slate-700">
                                <Check className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                                <span>Active buyer demand profile</span>
                            </div>
                            <div className="flex items-start gap-2 text-sm text-slate-700">
                                <Check className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                                <span>Compliance & staging checklist</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label className="text-slate-700">Street Name</Label>
                                <Input placeholder="e.g. Woodlands Avenue" required />
                            </div>

                            <div className="space-y-2">
                                <Label className="text-slate-700">Property Type</Label>
                                <Select required>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="house">Freehold House</SelectItem>
                                        <SelectItem value="cluster">Cluster Home</SelectItem>
                                        <SelectItem value="apartment">Apartment</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label className="text-slate-700">Estimated Value (Optional)</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select range" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="r2m-r4m">R2m - R4m</SelectItem>
                                        <SelectItem value="r4m-r6m">R4m - R6m</SelectItem>
                                        <SelectItem value="r6m-r10m">R6m - R10m</SelectItem>
                                        <SelectItem value="r10m+">R10m+</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label className="text-slate-700">Name</Label>
                                    <Input placeholder="Your name" required />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-slate-700">WhatsApp</Label>
                                    <Input placeholder="082..." required />
                                </div>
                            </div>

                            <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 mt-2 h-11 text-base font-semibold" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Preparing...
                                    </>
                                ) : (
                                    "Reveal My Strategy"
                                )}
                            </Button>
                        </div>
                    </form>
                )}
            </DialogContent>
        </Dialog>
    );
}
