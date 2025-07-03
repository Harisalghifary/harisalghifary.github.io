import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Haris Portofolio Dev",
  description: "Created with love and passion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png?v=2" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
