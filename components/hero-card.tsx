import { Github, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";

const rows = [
  { label: "Focus", value: "AI products · Onchain systems" },
  { label: "Stack", value: "TypeScript · Go · Solidity" },
  { label: "Base", value: "Remote · EU / MENA / US overlap" },
];

export default function HeroCard() {
  return (
    <div className="relative mx-auto w-full max-w-sm lg:mx-0">
      <div
        className="glow-brand pointer-events-none absolute -inset-12 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative overflow-hidden rounded-lg border border-border bg-surface shadow-[0_24px_80px_-32px_rgba(0,0,0,0.9)]">
        <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
          <span className="inline-flex items-center gap-2 text-caption-sm font-medium uppercase tracking-[0.14em] text-brand">
            <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
            </span>
            Available for work
          </span>
          <span className="text-caption-sm text-muted-foreground">
            Remote
          </span>
        </div>

        <div className="px-5 py-6">
          <p className="text-h4 font-medium text-foreground">Haris Salman</p>
          <p className="mt-1 text-caption text-muted-foreground">
            Software Engineer — AI &amp; Onchain
          </p>
        </div>

        <dl className="border-t border-border">
          {rows.map((row) => (
            <div
              key={row.label}
              className="flex items-baseline justify-between gap-4 border-b border-border/60 px-5 py-3 last:border-b-0"
            >
              <dt className="text-caption-sm uppercase tracking-[0.14em] text-muted-foreground">
                {row.label}
              </dt>
              <dd className="text-right text-caption text-foreground">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="flex gap-2 border-t border-border p-4">
          <Button asChild variant="outline" size="sm" className="flex-1">
            <a
              href="https://github.com/Harisalghifary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github aria-hidden="true" />
              GitHub
            </a>
          </Button>
          <Button asChild size="sm" className="flex-1">
            <a href="mailto:haris.solo68@gmail.com">
              <Mail aria-hidden="true" />
              Email
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}