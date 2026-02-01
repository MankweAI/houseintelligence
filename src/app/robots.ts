import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            disallow: '/',
            allow: [
                '/$', // Home page
                '/sell-house/sandton', // Hub + Suburbs
                '/property-agents/sandton', // Agent Hub
            ],
        },
        sitemap: 'https://propertyintelligence.co.za/sitemap.xml',
    }
}
