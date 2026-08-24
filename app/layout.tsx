import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.phxcw.com"),
  title: {
    default: "Phoenix Creative Works | Full-Service Support for Behavioral Health Organizations",
    template: "%s | Phoenix Creative Works",
  },
  description:
    "Phoenix Creative Works is a Phoenix-based professional services partner helping behavioral health organizations strengthen the systems behind care, marketing, SharePoint, IT, staffing, and operational support.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.phxcw.com",
    siteName: "Phoenix Creative Works",
    images: [{ url: "/images/photo-hero.jpg" }],
  },
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <head>
        <style>{`
          :root {
            --font-display: var(--font-sora), system-ui, sans-serif;
            --font-sans: var(--font-inter), system-ui, sans-serif;
          }
          .font-display {
            font-family: var(--font-display);
          }
          .font-sans {
            font-family: var(--font-sans);
          }
        `}</style>
      </head>
      <body className="bg-white font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
