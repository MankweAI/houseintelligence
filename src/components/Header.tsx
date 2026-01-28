"use client";

import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Header() {
    const pathname = usePathname();
    const isTransparent = pathname === '/';

    return (
        <header className={cn(
            "fixed top-0 inset-x-0 z-50 border-b transition-all duration-300",
            // Glass effect with noise
            "bg-white/80 backdrop-blur-md border-white/20 shadow-sm",
            "supports-[backdrop-filter]:bg-white/60"
        )}>
            {/* Noise texture overlay for that premium grain */}
            <div className="absolute inset-0 bg-noise opacity-50 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex items-center justify-between h-20">
                    {/* Brand */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-stone-900 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                            <BookOpen className="h-5 w-5 text-amber-500" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-serif font-bold text-xl leading-none tracking-tight text-stone-900">
                                HouseIntelligence
                            </span>
                            <span className="text-[10px] uppercase tracking-[0.15em] text-stone-500 font-medium">
                                by <a href="https://www.bigdataquery.co.za" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700">BigDataQuery</a>
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link
                            href="/"
                            className="text-sm font-medium transition-colors text-stone-600 hover:text-stone-900 uppercase tracking-wide"
                        >
                            Home
                        </Link>
                        <Link
                            href="/sell-house/sandton"
                            className="text-sm font-medium transition-colors text-amber-700 font-bold uppercase tracking-wide"
                        >
                            Sell in Sandton
                        </Link>
                        <Link
                            href="/about"
                            className="text-sm font-medium transition-colors text-stone-600 hover:text-stone-900 uppercase tracking-wide"
                        >
                            About
                        </Link>
                    </nav>

                    {/* CTA */}
                    <Link
                        href="/sell-house/sandton"
                        className="hidden sm:inline-flex items-center gap-2 bg-stone-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-stone-800 hover:shadow-lg hover:shadow-stone-900/20 transition-all group"
                    >
                        <span>Get Selling Plan</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform text-amber-500" />
                    </Link>
                </div>
            </div>
        </header>
    );
}
