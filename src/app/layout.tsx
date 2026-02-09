import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import { Nav } from "@/components/Nav";
import { LayoutContent } from "@/components/LayoutContent";
import { CustomCursor } from "@/components/CustomCursor";
import { AnalyticsWrapper } from "@/components/Analytics";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Menu Miser – AI Meal Planner & Pantry Recipe App",
  description:
    "Save money and reduce food waste with Menu Miser. Get AI-powered meal plans from your pantry, quick recipes, and a kitchen assistant—all in one app.",
  keywords: [
    "AI meal planner",
    "pantry recipe app",
    "reduce food waste",
    "save money on groceries",
    "meal planning assistant",
    "personalized recipes",
    "cooking assistant",
    "weekly meal plans",
  ],
  itunes: {
    appId: "6758177930",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    title: "Menu Miser – AI Meal Planner & Pantry Recipe App",
    description:
      "Save money and reduce food waste. AI-powered meal plans from your pantry, quick recipes, and a kitchen assistant.",
    url: "https://menumiser.co",
    siteName: "Menu Miser",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Menu Miser App Icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Menu Miser – AI Meal Planner & Pantry Recipe App",
    description: "Save money and reduce food waste. AI-powered meal plans from your pantry, quick recipes, and a kitchen assistant.",
    images: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className={`${geistMono.variable} antialiased flex min-h-screen flex-col bg-[var(--bg)] text-[var(--text)]`}>
        <CustomCursor />
        <Nav />
        <LayoutContent>{children}</LayoutContent>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
