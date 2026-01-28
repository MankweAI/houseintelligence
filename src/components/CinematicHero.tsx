"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { FadeIn } from './Animations';

interface CinematicHeroProps {
    title: string;
    subtitle: string;
    imageSrc: any; // StaticImageData or string
    imageAlt: string;
    supertitle?: string;
}

export function CinematicHero({ title, subtitle, imageSrc, imageAlt, supertitle = "The Collection" }: CinematicHeroProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <div ref={ref} className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center">
            {/* Background Image with Parallax & Scale */}
            <motion.div
                style={{ y, scale }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    priority
                    className="object-cover object-center"
                    quality={90}
                />
                <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
            </motion.div>

            {/* Content using Layout animations (since we're already using motion for parallax) */}
            <motion.div
                style={{ opacity }}
                className="relative z-10 text-center px-4 max-w-4xl mx-auto"
            >
                <FadeIn delay={0.2} direction="up">
                    <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs font-medium tracking-[0.2em] text-white/90 uppercase mb-8 backdrop-blur-sm">
                        {supertitle}
                    </span>
                </FadeIn>

                <FadeIn delay={0.4} direction="up">
                    <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-6 tracking-tight text-shadow-sm">
                        {title}
                    </h1>
                </FadeIn>

                <FadeIn delay={0.6} direction="up">
                    <p className="text-lg md:text-2xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed antialiased">
                        {subtitle}
                    </p>
                </FadeIn>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-widest text-white/70">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent opacity-50" />
            </motion.div>
        </div>
    );
}
