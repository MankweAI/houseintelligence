import Link from 'next/link';
import Image from 'next/image';
import { getSuburbSlugs } from '@/lib/data';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';
import { ArrowRight, CheckCircle2, TrendingUp, ShieldAlert, Users, MapPin, BarChart3, Award, Clock, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata = {
    title: 'Sell Your Home in Sandton | The Seller\'s Playbook',
    description: 'Don\'t just list. Execute a strategy. Get a data-backed selling plan and access to Sandton\'s top 3 vetted agents.',
};

export default function GlobalSellerHub() {
    const suburbSlugs = getSuburbSlugs().slice(0, 12); // Show top 12

    return (
        <div className="bg-stone-50 min-h-screen">
            {/* 1. Hero Section with Image */}
            <section className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-stone-950 text-white overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(52,211,153,0.2),transparent_50%)]" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Content */}
                        <FadeIn>
                            <div>
                                <span className="inline-block py-1.5 px-4 bg-amber-500/10 border border-amber-500/20 rounded-full text-sm font-bold text-amber-400 mb-6">
                                    🏆 HouseIntelligence
                                </span>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                                    Sell Your Sandton Home
                                    <span className="block text-amber-400 mt-2">40% Faster</span>
                                </h1>
                                <p className="text-xl text-stone-300 mb-8 leading-relaxed">
                                    Most sellers leave R500k+ on the table. We arm you with hyper-local data, proven pricing strategies,
                                    and access to the top 3 agents in your specific suburb.
                                </p>

                                {/* Stats Row */}
                                <div className="grid grid-cols-3 gap-4 mb-8">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                                        <div className="text-3xl font-bold text-amber-400">12</div>
                                        <div className="text-xs text-stone-400 uppercase tracking-wider mt-1">Suburbs</div>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                                        <div className="text-3xl font-bold text-amber-400">112</div>
                                        <div className="text-xs text-stone-400 uppercase tracking-wider mt-1">Avg. Days</div>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                                        <div className="text-3xl font-bold text-amber-400">3</div>
                                        <div className="text-xs text-stone-400 uppercase tracking-wider mt-1">Top Agents</div>
                                    </div>
                                </div>

                                <Button size="lg" className="bg-amber-500 hover:bg-amber-400 text-white border-none shadow-xl shadow-amber-500/20">
                                    Find Your Suburb Strategy
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </div>
                        </FadeIn>

                        {/* Right: Hero Image */}
                        <FadeIn delay={0.2}>
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl opacity-20 blur-2xl" />
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                                    <Image
                                        src="/images/seller_hero.png"
                                        alt="Successful home sale in Sandton"
                                        width={600}
                                        height={400}
                                        className="w-full h-auto"
                                        priority
                                    />
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* Bottom Gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-50 to-transparent" />
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* 2. Trust Indicators */}
                <FadeIn>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24 -mt-8">
                        <TrustCard
                            icon={<TrendingUp className="h-6 w-6 text-amber-600" />}
                            stat="40%"
                            label="Faster Sales"
                        />
                        <TrustCard
                            icon={<Award className="h-6 w-6 text-amber-600" />}
                            stat="R5.1M"
                            label="Avg. Sale Price"
                        />
                        <TrustCard
                            icon={<Users className="h-6 w-6 text-indigo-600" />}
                            stat="100%"
                            label="Vetted Agents"
                        />
                        <TrustCard
                            icon={<ShieldAlert className="h-6 w-6 text-rose-600" />}
                            stat="Zero"
                            label="Hidden Fees"
                        />
                    </div>
                </FadeIn>

                {/* 3. Value Proposition Cards */}
                <section className="mb-24">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-4">
                                Why Sellers Choose Us
                            </h2>
                            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
                                We don't just connect you with agents. We arm you with the intelligence to win.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<BarChart3 className="h-8 w-8 text-amber-600" />}
                            image="/images/data_dashboard.png"
                            title="Data-Backed Pricing"
                            description="See the exact heatmaps, liquidity scores, and comparable sales specific to your street. No guesswork."
                        />
                        <FeatureCard
                            icon={<Users className="h-8 w-8 text-indigo-600" />}
                            title="Vetted Experts Only"
                            description="We don't sell your data to 10 random agents. We recommend the top 3 specialists who actually move stock in your area."
                            highlight="3 Agents Max"
                        />
                        <FeatureCard
                            icon={<ShieldAlert className="h-8 w-8 text-amber-600" />}
                            title="Avoid Costly Mistakes"
                            description="Learn the specific red flags that kill deals in your suburb: from overpricing to staging errors."
                            highlight="Save R500k+"
                        />
                    </div>
                </section>

                {/* 4. Suburb Preview with Image */}
                <section className="mb-24">
                    <FadeIn>
                        <div className="bg-white rounded-3xl shadow-lg border border-stone-100 overflow-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                {/* Left: Image */}
                                <div className="relative h-64 lg:h-96">
                                    <Image
                                        src="/images/suburb_aerial.png"
                                        alt="Sandton suburbs aerial view"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Right: Content */}
                                <div className="p-8 md:p-12 flex flex-col justify-center">
                                    <MapPin className="h-12 w-12 text-amber-600 mb-6" />
                                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
                                        Find Your Suburb's Playbook
                                    </h2>
                                    <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                                        Real estate is hyper-local. A 5-minute drive can change everything: buyer demographics,
                                        pricing strategy, even the best month to list.
                                    </p>
                                    <p className="text-stone-700 font-medium mb-6">
                                        Select your suburb below to see:
                                    </p>
                                    <ul className="space-y-3 mb-8">
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                                            <span className="text-stone-700">Exact days-on-market for your micro-market</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                                            <span className="text-stone-700">Premium drivers buyers pay extra for</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                                            <span className="text-stone-700">3 proven marketing angles that work</span>
                                        </li>
                                    </ul>
                                    <div className="flex gap-4">
                                        <Button className="bg-amber-600 hover:bg-amber-500 text-white">
                                            View All Suburbs
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </section>

                {/* 5. Suburb Grid */}
                <section className="mb-24">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-4">
                                12 Sandton Suburbs
                            </h2>
                            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
                                Each playbook is tailored to your suburb's unique buyer profile and market dynamics.
                            </p>
                        </div>
                    </FadeIn>

                    <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {suburbSlugs.map((slug) => (
                            <StaggerItem key={slug}>
                                <Link
                                    href={`/sell-house/sandton/${slug}`}
                                    className="group block bg-white border-2 border-stone-200 p-6 rounded-2xl hover:border-amber-500 hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-serif font-bold text-lg text-stone-900 capitalize group-hover:text-amber-600 transition-colors">
                                            {slug.replace(/-/g, ' ')}
                                        </span>
                                        <ArrowRight className="h-4 w-4 text-stone-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                                    </div>
                                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 group-hover:text-amber-600">
                                        View Playbook
                                    </span>
                                </Link>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </section>

                {/* 6. Methodology with Visual Enhancement */}
                <section className="mb-24">
                    <div className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-950 text-white rounded-3xl overflow-hidden relative">
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-900/30 to-transparent pointer-events-none" />
                        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-8 p-8 md:p-12">
                            {/* Left: Content (3/5) */}
                            <div className="lg:col-span-3">
                                <span className="inline-block py-1.5 px-4 bg-amber-500/10 border border-amber-500/20 rounded-full text-sm font-bold text-amber-400 mb-6">
                                    Our Methodology
                                </span>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                                    Why Only 3 Agents?
                                </h2>
                                <p className="text-lg text-stone-300 mb-6 leading-relaxed">
                                    Most directory sites are "pay-to-play". Whoever pays the most gets your lead, regardless of track record.
                                </p>
                                <p className="text-lg text-stone-300 mb-8 leading-relaxed">
                                    <strong className="text-white">We work differently.</strong> We analyze actual sales data to find agents
                                    who move stock in your specific suburb. Competition drives performance, but too much choice causes paralysis.
                                    Three is the magic number.
                                </p>

                                <div className="space-y-4 mb-8">
                                    <MethodologyPoint
                                        number="1"
                                        title="Data Analysis"
                                        description="We track recent sales, pricing accuracy, and days-on-market per agent"
                                    />
                                    <MethodologyPoint
                                        number="2"
                                        title="Suburb Specialization"
                                        description="Only agents with proven track records in YOUR suburb make the cut"
                                    />
                                    <MethodologyPoint
                                        number="3"
                                        title="Competitive Tension"
                                        description="3 agents compete for your listing with their best pricing strategy"
                                    />
                                </div>

                                <Button size="lg" className="bg-amber-500 hover:bg-amber-400 text-white border-none shadow-xl">
                                    Get Your Suburb Report
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </div>

                            {/* Right: Stats Highlight (2/5) */}
                            <div className="lg:col-span-2 flex flex-col justify-center space-y-6">
                                <StatHighlight
                                    icon={<Clock className="h-6 w-6" />}
                                    value="40%"
                                    label="Faster sales vs. market average"
                                />
                                <StatHighlight
                                    icon={<DollarSign className="h-6 w-6" />}
                                    value="R500k"
                                    label="Average premium captured"
                                />
                                <StatHighlight
                                    icon={<Award className="h-6 w-6" />}
                                    value="100%"
                                    label="Agents vetted by sales data"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

function TrustCard({ icon, stat, label }: { icon: React.ReactNode, stat: string, label: string }) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-md border border-stone-100 text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-3">
                <div className="bg-stone-50 p-3 rounded-xl">
                    {icon}
                </div>
            </div>
            <div className="text-2xl font-bold text-stone-900 mb-1">{stat}</div>
            <div className="text-sm text-stone-600">{label}</div>
        </div>
    );
}

function FeatureCard({ icon, image, title, description, highlight }: {
    icon: React.ReactNode,
    image?: string,
    title: string,
    description: string,
    highlight?: string
}) {
    return (
        <FadeIn className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 hover:shadow-xl hover:border-amber-200 transition-all duration-300 h-full flex flex-col">
            {image && (
                <div className="relative h-48 -mx-8 -mt-8 mb-6 rounded-t-3xl overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
            <div className="bg-stone-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                {icon}
            </div>
            <h3 className="font-serif font-bold text-xl text-stone-900 mb-3">{title}</h3>
            <p className="text-stone-600 leading-relaxed mb-4 flex-grow">{description}</p>
            {highlight && (
                <div className="inline-block px-4 py-2 bg-amber-50 text-amber-700 rounded-lg text-sm font-semibold">
                    {highlight}
                </div>
            )}
        </FadeIn>
    );
}

function MethodologyPoint({ number, title, description }: {
    number: string,
    title: string,
    description: string
}) {
    return (
        <div className="flex gap-4">
            <div className="shrink-0 w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-sm">
                {number}
            </div>
            <div>
                <h4 className="font-bold text-white mb-1">{title}</h4>
                <p className="text-sm text-stone-400">{description}</p>
            </div>
        </div>
    );
}

function StatHighlight({ icon, value, label }: {
    icon: React.ReactNode,
    value: string,
    label: string
}) {
    return (
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-4 mb-3">
                <div className="text-amber-400">
                    {icon}
                </div>
                <div className="text-3xl font-bold text-white">{value}</div>
            </div>
            <p className="text-sm text-stone-400">{label}</p>
        </div>
    );
}
