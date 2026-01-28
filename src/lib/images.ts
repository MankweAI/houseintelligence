import { StaticImageData } from 'next/image';
import placeholder from '@/assets/placeholder.jpg';
// Suburb Hero Images
// Note: Moving to public path for Hurlingham to consolidate assets
// import hurlinghamHero from '@/assets/suburbs/hurlingham/hero.jpg'; 

export const suburbHeroImages: Record<string, any> = {
    'hurlingham': '/images/hero-images/hurlingham-hero.webp',
    'sandown': '/images/hero-images/sandown-hero.webp',
    'sandton-cbd': '/images/hero-images/sandton-cbd-hero.webp',
    'bryanston': '/images/hero-images/bryanston-hero.webp',
    'hyde-park': '/images/hero-images/hyde-park-hero.webp',
    'woodmead': '/images/hero-images/woodmead-hero.webp',
    'atholl': '/images/hero-images/atholl-hero.webp',
    'morningside': '/images/hero-images/morningside-hero.webp',
    'fourways': '/images/hero-images/fourways-hero.webp',
    'rivonia': '/images/hero-images/rivonia-hero.webp',
    'craighall-park': '/images/hero-images/craighall-park-hero.webp',
    'benmore-gardens': '/images/hero-images/benmore-gardens-hero.webp',
    'river-club': '/images/hero-images/river-club-hero.webp',
    'strathavon': '/images/hero-images/strathavon-hero.webp',
    'dunkeld': '/images/hero-images/dunkeld-hero.webp',
    'sandhurst': '/images/hero-images/sandhurst-hero.webp',
};

// Marketing/Gallery Images (Public folder paths)
export const suburbMarketingImages: Record<string, string[]> = {
    'hurlingham': [
        '/images/city/suburb/hurlingham/hero.jpg',
    ]
};

export function getSuburbHeroImage(slug: string): any {
    return suburbHeroImages[slug] || placeholder;
}

export function getSuburbMarketingImages(slug: string): string[] {
    return suburbMarketingImages[slug] || [];
}
