import type { Metadata } from "next";

import ContactCta from "@/components/contact-cta";
import Footer from "@/components/footer";
import ProjectsBrowser from "@/components/projects-browser";
import SiteNav from "@/components/site-nav";
import { publishedProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "AI, onchain, and product projects built end to end by Haris Salman — from a RAG pipeline over Ministry of Finance documents to DeFi infrastructure.",
};

export default function ProjectsPage() {
  const years = publishedProjects
    .map((project) => Number(project.year))
    .filter((year) => Number.isFinite(year));
  const latest = years.length > 0 ? Math.max(...years) : undefined;

  const stats = [
    { label: "Projects", value: String(publishedProjects.length) },
    { label: "Disciplines", value: "03" },
    { label: "Latest", value: latest ? String(latest) : "—" },
  ];

  return (
    <div className="min-h-screen">
      <SiteNav />

      <main id="main">
        <section className="relative overflow-hidden border-b border-border">
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            aria-hidden="true"
          >
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="absolute -top-40 right-[-10%] h-[26rem] w-[26rem] rounded-full bg-brand/[0.06] blur-[120px]" />
          </div>

          <div className="container pb-14 pt-32 lg:pb-16 lg:pt-40">
            <p className="flex items-center gap-2.5 text-caption-sm uppercase tracking-[0.18em] text-muted-foreground">
              <span
                className="h-1.5 w-1.5 rounded-full bg-brand"
                aria-hidden="true"
              />
              Index — Work
            </p>

            <h1 className="mt-5 text-[clamp(2.75rem,6vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-foreground">
              Work<span className="text-brand">.</span>
            </h1>

            <p className="mt-5 max-w-xl text-body text-muted-foreground">
              {publishedProjects.length} projects, most of them built end to
              end. Some are running with real users, some are still in the
              workshop. Filter by whatever you&apos;re curious about.
            </p>

            <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-6 border-t border-border pt-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-caption-sm text-muted-foreground">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 text-h4 font-medium tabular-nums text-foreground">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="container py-12 lg:py-16">
          <ProjectsBrowser />
        </section>

        <ContactCta />
      </main>

      <Footer />
    </div>
  );
}