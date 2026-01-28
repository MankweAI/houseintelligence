'use client';

import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQ {
    question: string;
    answer: string;
}

interface SellerFAQsProps {
    suburbName: string;
    avgPrice: string;
    daysOnMarket: number;
}

export function SellerFAQs({ suburbName, avgPrice, daysOnMarket }: SellerFAQsProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs: FAQ[] = [
        {
            question: `How long does it take to sell a house in ${suburbName}?`,
            answer: `Based on recent market data, homes in ${suburbName} take an average of ${daysOnMarket} days to sell when priced correctly. Well-maintained properties in sought-after locations tend to sell even quicker, while properties that are overpriced or need updating may take significantly longer.`
        },
        {
            question: `What is the average house price in ${suburbName}?`,
            answer: `The average freehold property price in ${suburbName} is ${avgPrice}. Prices vary significantly based on property type, size, condition, and specific location within the suburb. Sectional title properties typically offer a more accessible entry point into the area.`
        },
        {
            question: `Should I sell my ${suburbName} property now?`,
            answer: `${suburbName} shows consistent demand from buyers seeking quality properties in established Sandton neighborhoods. Current market conditions favor sellers who price competitively and present well-maintained homes. Consider consulting with a local agent to assess your specific property's market position and timing.`
        },
        {
            question: `What are the biggest mistakes sellers make in ${suburbName}?`,
            answer: `The three most common mistakes are: 1) Overpricing based on personal attachment rather than current market data, which leads to extended listing times and eventual price reductions, 2) Neglecting curb appeal and minor repairs that could significantly impact first impressions, and 3) Choosing an agent based solely on commission rates rather than local expertise, proven track record, and marketing strategy.`
        },
        {
            question: `How do I choose the best estate agent in ${suburbName}?`,
            answer: `Look for agents with a proven track record of recent sales in ${suburbName}, strong knowledge of local micro-markets and property types, transparent communication throughout the sales process, and a data-driven pricing strategy. We recommend interviewing multiple agents to compare their market analysis, marketing plans, and understanding of your specific property's unique selling points.`
        }
    ];

    return (
        <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            {/* FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    })
                }}
            />

            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">
                Frequently Asked Questions About Selling in {suburbName}
            </h2>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-slate-200 rounded-xl overflow-hidden hover:border-emerald-200 transition-colors"
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors"
                        >
                            <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                            <ChevronDown
                                className={`h-5 w-5 text-slate-400 shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''
                                    }`}
                            />
                        </button>
                        {openIndex === index && (
                            <div className="px-4 pb-4 text-slate-600 leading-relaxed">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
