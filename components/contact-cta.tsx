import { ArrowUpRight, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";

const upworkUrl =
  "https://www.upwork.com/freelancers/~012d8669590cc72ec9";
const email = "haris.solo68@gmail.com";

export default function ContactCta() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-border">
      <div className="container py-24 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="flex items-center gap-3 text-caption-sm uppercase tracking-[0.18em] text-muted-foreground">
              <span className="text-brand">05</span>
              <span className="h-px w-6 bg-border" aria-hidden="true" />
              <span>Contact</span>
            </div>

            <h2 className="mt-5 max-w-2xl text-display font-medium text-foreground">
              Got something worth building?
            </h2>

            <p className="mt-5 max-w-xl text-body text-muted-foreground">
              I&apos;m open to senior software roles and a small number of
              freelance projects. Remote, happy to overlap with EU, MENA, or US
              hours, and I usually reply within a day.
            </p>

            <p className="mt-6 inline-flex items-center gap-2 text-caption text-muted-foreground">
              <span
                className="h-1.5 w-1.5 rounded-full bg-brand"
                aria-hidden="true"
              />
              Available for work
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href={`mailto:${email}`}>
                <Mail aria-hidden="true" />
                Email me
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={upworkUrl} target="_blank" rel="noopener noreferrer">
                Upwork
                <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}