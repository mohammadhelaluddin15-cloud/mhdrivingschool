import type { Metadata } from "next";
import { Inter, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const bengali = Noto_Sans_Bengali({ subsets: ["bengali"], variable: "--font-bengali", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://mhdrivingschool.com"), // TODO: set the real domain
  title: {
    default: `${site.name} — ড্রাইভিং প্রশিক্ষণ কেন্দ্র, সুবর্ণচর, নোয়াখালী`,
    template: `%s | ${site.name}`,
  },
  description:
    "এমএইচ ড্রাইভিং স্কুল — সুবর্ণচর, নোয়াখালীর আধুনিক ড্রাইভিং প্রশিক্ষণ কেন্দ্র। গাড়ি, বাইক, স্কুটার ও সাইকেল প্রশিক্ষণ, অভিজ্ঞ প্রশিক্ষক, ডুয়েল-কন্ট্রোল যান এবং কোর্স শেষে সার্টিফিকেট। ভর্তি চলছে: 01879-968491",
  keywords: ["driving school Noakhali", "ড্রাইভিং স্কুল", "MH Driving School", "Subarnachar", "bike training", "car training"],
  openGraph: {
    title: `${site.name} — ড্রাইভিং প্রশিক্ষণ কেন্দ্র, নোয়াখালী`,
    description: "গাড়ি, বাইক, স্কুটার ও সাইকেল প্রশিক্ষণ। ভর্তি চলছে।",
    images: ["/images/hero-1.svg"],
    locale: "bn_BD",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bn" className={`${inter.variable} ${bengali.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
