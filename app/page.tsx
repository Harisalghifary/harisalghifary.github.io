import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import ContactCta from "@/components/contact-cta";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import HeroCard from "@/components/hero-card";
import ProjectRow from "@/components/project-row";
import SectionHeading from "@/components/section-heading";
import SiteNav from "@/components/site-nav";
import TechStack from "@/components/tech-stack";
import { Button } from "@/components/ui/button";
import {
  featuredByGroup,
  groupOrder,
  projectGroups,
  publishedProjects,
} from "@/lib/projects";

const proof = [
  { value: "5+", label: "Years shipping" },
  { value: "16×", label: "Faster pipelines" },
  { value: "20+", label: "DeFi protocols" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <SiteNav />

      <main id="main">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            aria-hidden="true"
          >
            <div className="absolute inset-0 grid-pattern opacity-40" />
            <div className="absolute -top-48 right-[-10%] h-[34rem] w-[34rem] rounded-full bg-brand/[0.07] blur-[130px]" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
          </div>

          <div className="container grid items-center gap-14 pb-16 pt-32 lg:grid-cols-[1fr_22rem] lg:gap-20 lg:pb-24 lg:pt-44">
            <div>
              <p className="flex items-center gap-2.5 text-caption-sm uppercase tracking-[0.18em] text-muted-foreground">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-brand"
                  aria-hidden="true"
                />
                Software Engineer · AI &amp; Onchain
              </p>

              <h1 className="mt-6 max-w-[18ch] text-[clamp(2.5rem,5.6vw,4.5rem)] font-medium leading-[1.04] tracking-[-0.02em] text-foreground">
                I build systems that move data and{" "}
                <span className="text-brand">money</span> without falling over.
              </h1>

              <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-muted-foreground">
                Five years across ByteDance logistics, DeFi infrastructure, and
                applied AI. I work mostly in Go and TypeScript, and I care about
                the part that has to hold up when traffic, data, or money gets
                real.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button asChild size="lg">
                  <Link href="/#contact">
                    Let&apos;s talk
                    <ArrowUpRight aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/#projects">See selected work</Link>
                </Button>
              </div>

              <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-6">
                {proof.map((item) => (
                  <div key={item.label}>
                    <dt className="sr-only">{item.label}</dt>
                    <dd>
                      <span className="block text-h4 font-medium tabular-nums text-foreground">
                        {item.value}
                      </span>
                      <span className="mt-1 block text-caption-sm text-muted-foreground">
                        {item.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <HeroCard />
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-20 border-t border-border">
          <div className="container py-24 lg:py-32">
            <SectionHeading
              index="01"
              label="About"
              title="AI needs plumbing. Onchain needs UX. I do both ends."
            />

            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
              <p className="text-[1.0625rem] leading-relaxed text-muted-foreground">
                I&apos;ve spent five years on systems that can&apos;t afford to
                be slow. At ByteDance I rebuilt two reconciliation pipelines to
                process a million records in under three hours, sixteen times
                faster than the version that fell over at a hundred thousand. At
                Belajarplus I ran a multi-tenant backend for a hundred schools
                and led two engineers.
              </p>

              <p className="text-[1.0625rem] leading-relaxed text-muted-foreground">
                Most recently I built the off-chain side of a DeFi protocol: API,
                indexer, subgraph, Merkle server, oracle, and a TypeScript SDK
                covering twenty-plus protocols. I like the unglamorous part.
                Batch windows, idempotency, retries, and data models that
                don&apos;t need rewriting six months later.
              </p>
            </div>
          </div>
        </section>

        {/* Stack */}
        <section id="stack" className="scroll-mt-20 border-t border-border">
          <div className="container py-24 lg:py-32">
            <SectionHeading
              index="02"
              label="Stack"
              title="The tools I reach for."
              description="Chosen for the problem, not the trend. Most of my day is Go, TypeScript, and the database underneath."
            />
            <TechStack />
          </div>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="scroll-mt-20 border-t border-border"
        >
          <div className="container py-24 lg:py-32">
            <SectionHeading
              index="03"
              label="Experience"
              title="Five years, four teams."
            />
            <Experience />
          </div>
        </section>

        {/* Work */}
        <section id="projects" className="scroll-mt-20 border-t border-border">
          <div className="container py-24 lg:py-32">
            <SectionHeading
              index="04"
              label="Selected work"
              title="Things I built and still stand behind."
              description={`${publishedProjects.length} projects, all built end to end. AI, onchain, and the product work in between.`}
            />

            <div className="space-y-14">
              {groupOrder.map((groupKey) => {
                const items = featuredByGroup(groupKey);
                if (items.length === 0) return null;
                const group = projectGroups[groupKey];

                return (
                  <div
                    key={groupKey}
                    className="grid gap-5 lg:grid-cols-[13rem_1fr] lg:gap-10"
                  >
                    <div className="lg:sticky lg:top-24 lg:self-start">
                      <p className="flex items-center gap-2 text-caption-sm uppercase tracking-[0.16em] text-muted-foreground">
                        <span className="text-brand">{group.index}</span>
                        <span className="h-px w-4 bg-border" aria-hidden="true" />
                        {group.label}
                      </p>
                      <p className="mt-2 max-w-[16rem] text-caption text-muted-foreground">
                        {group.description}
                      </p>
                    </div>

                    <div>
                      {items.map((project, index) => (
                        <ProjectRow
                          key={project.slug}
                          project={project}
                          index={`0${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12">
              <Button asChild variant="outline">
                <Link href="/projects">
                  View all {publishedProjects.length} projects
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <ContactCta />
      </main>

      <Footer />
    </div>
  );
}