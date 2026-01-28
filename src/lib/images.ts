import { StaticImageData } from 'next/image';
import placeholder from '@/assets/placeholder.jpg';
// Suburb Hero Images
// Note: Moving to public path for Hurlingham to consolidate assets
// import hurlinghamHero from '@/assets/suburbs/hurlingham/hero.jpg'; 

export const suburbHeroImages: Record<string, any> = {
    'hurlingham': '/images/city/suburb/hurlingham/hero.jpg',
    'sandown': '/images/hero-images/sandown-hero.png',
    'sandton-cbd': '/images/hero-images/sandton-cbd-hero.png',
    'bryanston': '/images/hero-images/bryanston-hero.png',
    'hyde-park': '/images/hero-images/hyde-park-hero.png',
    'woodmead': '/images/hero-images/woodmead-hero.png',
    'atholl': '/images/hero-images/atholl-hero.png',
    'morningside': '/images/hero-images/morningside-hero.png',
    'fourways': '/images/hero-images/fourways-hero.png',
    'rivonia': '/images/hero-images/rivonia-hero.png',
    'craighall-park': '/images/hero-images/craighall-park-hero.png',
    'benmore-gardens': '/images/hero-images/benmore-gardens-hero.png',
    'river-club': '/images/hero-images/river-club-hero.png',
    'strathavon': '/images/hero-images/strathavon-hero.png',
    'dunkeld': '/images/hero-images/dunkeld-hero.png',
    'sandhurst': '/images/hero-images/sandhurst-hero.png',
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
