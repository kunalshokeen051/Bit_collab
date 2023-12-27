import type { Metadata } from "next";
import Providers from "./GlobalRedux/provider";

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bit Sync - Syncing Teams",
  description: "Bit Sync - Syncing Teams, Anywhere, Anytime",
  bookmarks: "https://example.com",
  alternates: { canonical: "https://example.com" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body
        className={`min-h-screen font-sans antialiased grainy ${inter.className}`}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
