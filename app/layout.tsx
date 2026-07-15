import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-space-grotesk" 
});

export const metadata: Metadata = {
  title: "H. K. Chemicals Industries - Leading Sodium Hypochlorite Manufacturer in India",
  description: "Leading sodium hypochlorite manufacturer & exporter in Dahej GIDC, Gujarat, India. 25+ years experience. Producing 3,000+ MT monthly of NaOCl (2%-14% concentration). Supplying to water treatment, textile, pharma, food processing industries globally.",
  keywords: [
    "Sodium Hypochlorite Manufacturer Dahej",
    "Industrial Bleach Supplier Gujarat",
    "NaOCl Exporter India",
    "Water Treatment Chemicals",
    "Textile Bleaching Solutions",
    "Sodium Hypochlorite Gujarat",
    "Chemical Manufacturer Dahej GIDC"
  ],
  authors: [{ name: "H. K. Chemicals Industries" }],
  openGraph: {
    title: "H. K. Chemicals Industries - Sodium Hypochlorite Manufacturer",
    description: "India's Most Trusted Sodium Hypochlorite Solution Manufacturer. 25+ years experience, 3000+ MT monthly capacity.",
    url: "https://hkchemicals.in",
    siteName: "H. K. Chemicals Industries",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="https://static.prod-images.emergentagent.com/jobs/4cd3afaa-6491-4fb6-b567-b4a5f2ffc8c8/images/e38393eb580c5782a9b280aadfb2c192742b11eabb3b42a39f45e4435db5a5b2.png" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-slate-950`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
