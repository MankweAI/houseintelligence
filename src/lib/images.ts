import { StaticImageData } from 'next/image';
import placeholder from '@/assets/placeholder.jpg';
// Suburb Hero Images
import hurlinghamHero from '@/assets/suburbs/hurlingham/hero.jpg';

export const suburbHeroImages: Record<string, StaticImageData> = {
    'hurlingham': hurlinghamHero,
};

export function getSuburbHeroImage(slug: string): StaticImageData {
    return suburbHeroImages[slug] || placeholder;
}
