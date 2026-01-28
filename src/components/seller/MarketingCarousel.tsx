'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, animate } from 'framer-motion';
import { FadeIn } from '../Animations';
import { Image as ImageIcon, Star, ChevronRight, Hand } from 'lucide-react';

interface MarketingCarouselProps {
    suburbName: string;
    images: string[];
}

export function MarketingCarousel({ suburbName, images }: MarketingCarouselProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);
    const x = useMotionValue(0);

    useEffect(() => {
        if (ref.current) {
            setWidth(ref.current.scrollWidth - ref.current.offsetWidth);
        }
    }, [images]);

    if (!images || images.length === 0) return null;

    return (
        <section className="py-8">
            <FadeIn>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
                    <div>
                        <div className="flex items-center gap-2 text-amber-600 mb-2">
                            <ImageIcon className="h-4 w-4" />
                            <span className="text-xs font-bold uppercase tracking-widest">Visual Strategy</span>
                        </div>
                        <h2 className="text-2xl font-serif font-bold text-stone-900">
                            Cinematic Marketing
                        </h2>
                        <p className="text-stone-600 text-sm mt-1 max-w-lg">
                            We use premium architectural photography to highlight the unique lifestyle of {suburbName}.
                        </p>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-medium text-stone-400">
                        <div className="flex items-center gap-1.5 bg-stone-100 px-3 py-1.5 rounded-full text-stone-600">
                            <Hand className="h-3 w-3" />
                            <span>Drag to Explore</span>
                        </div>
                    </div>
                </div>

                {/* Carousel Container */}
                <motion.div
                    ref={ref}
                    className="cursor-grab active:cursor-grabbing overflow-hidden rounded-2xl"
                    whileTap={{ cursor: "grabbing" }}
                >
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        style={{ x }}
                        className="flex gap-4"
                    >
                        {images.map((img, index) => (
                            <div
                                key={index}
                                className="relative min-w-[280px] md:min-w-[400px] h-[250px] md:h-[300px] rounded-xl overflow-hidden shrink-0 group"
                            >
                                <Image
                                    src={img}
                                    alt={`${suburbName} marketing example ${index + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 80vw, 40vw"
                                    draggable={false}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                {index === 0 && (
                                    <div className="absolute top-3 left-3 bg-amber-500/90 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded">
                                        FEATURED
                                    </div>
                                )}
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </FadeIn>
        </section>
    );
}
