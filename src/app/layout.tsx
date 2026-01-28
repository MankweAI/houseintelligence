import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import './globals.css';

const playfair = Playfair_Display({
  variable: '--font-serif',
  subsets: ['latin'],
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://houseintelligence.co.za'),
  title: {
    default: "HouseIntelligence | Sandton Property Guide",
    template: "%s | HouseIntelligence",
  },
  description:
    "Data-driven property insights for Sandton sellers. Compare suburbs, find vetted agents, and maximize your sale price.",
  keywords: [
    'Sandton property',
    'luxury real estate',
    'sell property Sandton',
    'Sandown',
    'Hyde Park',
    'Morningside',
  ],
  authors: [{ name: "HouseIntelligence" }],
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    siteName: "HouseIntelligence",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// WebSite structured data
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: "HouseIntelligence",
  url: 'https://houseintelligence.co.za',
  description: 'Data-driven property insights for Sandton sellers.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://houseintelligence.co.za/sandton?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA" className={`${jakarta.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-sans antialiased bg-stone-50 text-stone-900 min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
