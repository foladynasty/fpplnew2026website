import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fp-edu.com';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1e3a5f', // Primary blue color
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Financial Perspectives | Singapore's Premier Financial Education Provider",
    template: "%s | Financial Perspectives"
  },
  description: "Singapore's CFP® pioneer since 1999. Trusted by 20,000+ professionals. Offering CFP® certification, SCFP-HNWI advanced certification, and CPD courses with up to 90% IBF funding.",
  keywords: [
    "CFP certification Singapore",
    "Certified Financial Planner",
    "financial planning courses",
    "wealth management training",
    "HNWI advisory",
    "IBF approved courses",
    "CPD courses Singapore",
    "SCFP certification",
    "financial advisor training"
  ],
  authors: [{ name: "Financial Perspectives Pte Ltd" }],
  creator: "Financial Perspectives",
  publisher: "Financial Perspectives Pte Ltd",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_SG',
    url: siteUrl,
    siteName: 'Financial Perspectives',
    title: "Financial Perspectives | Singapore's Premier Financial Education Provider",
    description: "Singapore's CFP® pioneer since 1999. Trusted by 20,000+ professionals. Offering CFP® certification, SCFP-HNWI advanced certification, and CPD courses.",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Financial Perspectives - Singapore CFP Education Leader',
      },
    ],
  },
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: "Financial Perspectives | Singapore's Premier Financial Education Provider",
    description: "Singapore's CFP® pioneer since 1999. Trusted by 20,000+ professionals.",
    images: ['/og-image.png'],
  },
  // Verification (add your IDs when available)
  verification: {
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  // Alternate languages (if applicable)
  alternates: {
    canonical: siteUrl,
  },
  // Category
  category: 'education',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-white text-gray-900" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}



