"use client";

import { Footer } from "./Footer";

export function LayoutContent({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
