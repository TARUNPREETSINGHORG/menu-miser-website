import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Nav } from "@/components/Nav";
import { LayoutContent } from "@/components/LayoutContent";
import { CustomCursor } from "@/components/CustomCursor";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Menu Miser – Your Personal Meal Planning Assistant",
  description:
    "Save time, money, and stress. AI-powered meal plans from your pantry, quick recipes, and a kitchen assistant—all in one app.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Menu Miser – Your Personal Meal Planning Assistant",
    description:
      "Save time, money, and stress. AI-powered meal plans from your pantry, quick recipes, and a kitchen assistant.",
    images: [{ url: "/icon.png", width: 512, height: 512, alt: "Menu Miser" }],
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
        <Analytics />
      </body>
    </html>
  );
}
