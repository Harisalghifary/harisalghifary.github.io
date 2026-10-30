import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/Geist-Variable.woff2",
  variable: "--font-geist-sans",
  display: "swap",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMono-Variable.woff2",
  variable: "--font-geist-mono",
  display: "swap",
  weight: "100 900",
});

const siteUrl = "https://harisalghifary.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Haris Salman — Software Engineer (AI & Web3)",
    template: "%s — Haris Salman",
  },
  description:
    "Software engineer building AI and onchain products. Five years across ByteDance logistics, DeFi infrastructure, and applied AI.",
  applicationName: "Haris Salman",
  authors: [{ name: "Haris Salman Al Ghifary" }],
  creator: "Haris Salman Al Ghifary",
  keywords: [
    "Haris Salman",
    "software engineer",
    "fullstack engineer",
    "AI engineer",
    "web3 engineer",
    "Go",
    "TypeScript",
    "Solidity",
    "Next.js",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Haris Salman",
    title: "Haris Salman — Software Engineer (AI & Web3)",
    description:
      "Software engineer building AI and onchain products. Five years across ByteDance logistics, DeFi infrastructure, and applied AI.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haris Salman — Software Engineer (AI & Web3)",
    description:
      "Software engineer building AI and onchain products. Five years across ByteDance logistics, DeFi infrastructure, and applied AI.",
  },
  icons: {
    icon: [{ url: "/favicon.png?v=2", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable}`}
      style={{ colorScheme: "dark" }}
    >
      <body
        className="min-h-screen bg-background font-sans text-foreground antialiased"
        suppressHydrationWarning
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-brand-foreground"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}