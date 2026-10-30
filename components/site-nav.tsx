"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/projects", label: "Work" },
  { href: "/blog", label: "Writing" },
  { href: "/#about", label: "About" },
];

function isActive(pathname: string, href: string) {
  if (href.startsWith("/#")) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-background/70 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-2.5 rounded-md py-1 text-caption font-medium text-foreground"
          aria-label="Haris Salman — home"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-md border border-border bg-surface transition-colors duration-200 group-hover:border-brand/50">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
          </span>
          <span className="tracking-tight">Haris Salman</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-3.5 py-2 text-caption transition-colors duration-200",
                isActive(pathname, link.href)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/#contact">
              Let&apos;s talk
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-surface md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-border bg-background md:hidden"
        >
          <nav className="container flex flex-col py-2" aria-label="Mobile">
            {links.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between border-b border-border/60 py-4 text-h4 font-medium text-foreground last:border-b-0"
              >
                <span>{link.label}</span>
                <span className="text-caption-sm tabular-nums text-muted-foreground">
                  0{index + 1}
                </span>
              </Link>
            ))}
            <Link
              href="/#contact"
              className="mt-4 mb-4 inline-flex h-11 items-center justify-center rounded-full bg-brand px-5 text-sm font-medium text-brand-foreground"
            >
              Let&apos;s talk
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}