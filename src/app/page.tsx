import Link from 'next/link';
import Image from 'next/image';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';
import { ArrowRight, MapPin, TrendingUp, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata = {
    title: 'Sell Your Home | The Seller\'s Playbook',
    description: 'Data-backed selling strategies for South African property sellers. Find your city and unlock hyper-local market intelligence.',
};

const cities = [
    {
        slug: 'sandton',
        name: 'Sandton',
        province: 'Gauteng',
        suburbCount: 12,
        avgPrice: 'R5.1M',
        avgDays: 112,
        description: 'Premium suburbs in Africa\'s richest square mile',
        available: true
    },
    // Future cities
    {
        slug: 'cape-town',
        name: 'Cape Town',
        province: 'Western Cape',
        suburbCount: 0,
        avgPrice: 'Coming Soon',
        avgDays: 0,
        description: 'Atlantic Seaboard to Southern Suburbs',
        available: false
    },
    {
        slug: 'johannesburg',
        name: 'Johannesburg',
        province: 'Gauteng',
        suburbCount: 0,
        avgPrice: 'Coming Soon',
        avgDays: 0,
        description: 'From Parktown to Parkhurst',
        available: false
    }
];

export default function GlobalCitySelector() {
    return (
        <div className="bg-stone-50 min-h-screen">
            {/* Hero */}
            <section className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-stone-950 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(180,83,9,0.15),transparent_50%)]" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
                    <FadeIn>
                        <div className="text-center max-w-4xl mx-auto">
                            <span className="inline-block py-1.5 px-4 bg-amber-500/10 border border-amber-500/20 rounded-full text-sm font-bold text-amber-400 mb-6">
                                🏆 HouseIntelligence
                            </span>
                            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                                Sell Smarter in
                                <span className="block text-amber-400 mt-2">South Africa's Top Cities</span>
                            </h1>
                            <p className="text-xl text-stone-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                                Hyper-local market intelligence, data-backed pricing strategies, and vetted agents
                                for every major South African city.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4 mb-12">
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/10">
                                    <div className="text-sm text-stone-400">Live Cities</div>
                                    <div className="text-2xl font-bold text-emerald-400">1</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/10">
                                    <div className="text-sm text-stone-400">Suburbs</div>
                                    <div className="text-2xl font-bold text-amber-400">12</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/10">
                                    <div className="text-sm text-stone-400">Coming Soon</div>
                                    <div className="text-2xl font-bold text-stone-400">2+</div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-50 to-transparent" />
            </section>

            {/* City Selection */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-8">
                <FadeIn>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-4">
                            Select Your City
                        </h2>
                        <p className="text-xl text-stone-600 max-w-2xl mx-auto">
                            Each city has unique market dynamics. Choose yours to access suburb-specific playbooks.
                        </p>
                    </div>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {cities.map((city) => (
                        <StaggerItem key={city.slug}>
                            <CityCard city={city} />
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/* Why Hyper-Local */}
                <section className="bg-white rounded-3xl shadow-lg border border-stone-100 p-8 md:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <MapPin className="h-12 w-12 text-amber-600 mb-6" />
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
                                Why Hyper-Local Matters
                            </h2>
                            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                                A property in Sandton sells differently than one in Cape Town. Different buyer demographics,
                                different price expectations, different marketing angles.
                            </p>
                            <p className="text-stone-700 mb-6">
                                Our playbooks go even deeper: we analyze <strong>suburb-level</strong> data to give you
                                insights your competitors don't have.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <TrendingUp className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                                    <span className="text-stone-700">City-specific market cycles and seasonality</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <TrendingUp className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                                    <span className="text-stone-700">Suburb-level buyer demographics and motivations</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <TrendingUp className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                                    <span className="text-stone-700">Local agents with proven track records</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-stone-50 rounded-2xl p-8">
                            <h3 className="font-serif font-bold text-xl text-stone-900 mb-4">Coming Soon</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-stone-200">
                                    <div>
                                        <div className="font-semibold text-stone-900">Cape Town</div>
                                        <div className="text-sm text-stone-500">Atlantic Seaboard expansion</div>
                                    </div>
                                    <div className="text-sm font-medium text-amber-600">Q2 2026</div>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-stone-200">
                                    <div>
                                        <div className="font-semibold text-stone-900">Johannesburg</div>
                                        <div className="text-sm text-stone-500">Northern suburbs focus</div>
                                    </div>
                                    <div className="text-sm font-medium text-stone-600">Q3 2026</div>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-stone-200">
                                    <div>
                                        <div className="font-semibold text-stone-900">Pretoria</div>
                                        <div className="text-sm text-stone-500">Eastern suburbs</div>
                                    </div>
                                    <div className="text-sm font-medium text-stone-600">Q4 2026</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

function CityCard({ city }: { city: typeof cities[0] }) {
    const content = (
        <div className={`
            bg-white rounded-3xl shadow-lg border-2 h-full flex flex-col
            ${city.available
                ? 'border-slate-200 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 cursor-pointer'
                : 'border-slate-100 opacity-60 cursor-not-allowed'
            }
        `}>
            <div className="p-8 flex-grow">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <h3 className="text-2xl font-serif font-bold text-slate-900 mb-1">
                            {city.name}
                        </h3>
                        <p className="text-sm text-slate-500">{city.province}</p>
                    </div>
                    {city.available ? (
                        <div className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full">
                            LIVE
                        </div>
                    ) : (
                        <div className="bg-slate-100 text-slate-500 text-xs font-bold px-3 py-1 rounded-full">
                            SOON
                        </div>
                    )}
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed">
                    {city.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-50 rounded-xl p-4">
                        <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Suburbs</div>
                        <div className="text-2xl font-bold text-slate-900">
                            {city.available ? city.suburbCount : '—'}
                        </div>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4">
                        <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Avg. Price</div>
                        <div className="text-lg font-bold text-slate-900">
                            {city.avgPrice}
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-6 border-t border-slate-100">
                {city.available ? (
                    <div className="flex items-center justify-between text-emerald-600 font-semibold">
                        <span>View Suburbs</span>
                        <ArrowRight className="h-5 w-5" />
                    </div>
                ) : (
                    <div className="text-center text-slate-400 text-sm">
                        Notify me when available
                    </div>
                )}
            </div>
        </div>
    );

    if (city.available) {
        return (
            <Link href={`/sell-house/${city.slug}`} className="block h-full">
                {content}
            </Link>
        );
    }

    return content;
}
