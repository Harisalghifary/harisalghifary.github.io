import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Haris Salman Al Ghifary | Full Stack Software Engineer",
  description: "High-impact L4 Software Engineer at ByteDance. Expert in high-scale systems, real-time communication, and performance optimization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="fixed inset-0 -z-10 bg-[#050505] overflow-hidden">
          {/* Satin Shimmer / Folds */}
          <div className="absolute top-[-20%] left-[-10%] h-[120%] w-[40%] bg-gradient-to-r from-transparent via-white/[0.03] to-transparent rotate-[25deg] blur-[100px]" />
          <div className="absolute top-[10%] right-[-5%] h-[100%] w-[30%] bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -rotate-[15deg] blur-[80px]" />
          
          {/* Soft Ethereal Glows */}
          <div className="absolute top-[-10%] left-[-5%] h-[60%] w-[60%] rounded-full bg-primary/10 blur-[130px]" />
          <div className="absolute bottom-[-10%] right-[-5%] h-[60%] w-[60%] rounded-full bg-indigo-500/5 blur-[130px]" />
          
          {/* Lustrous Highlights */}
          <div className="absolute top-[30%] left-[20%] h-[1px] w-[60%] bg-white/[0.05] blur-[40px] rotate-[10deg]" />
        </div>
        {children}
      </body>
    </html>
  );
}
