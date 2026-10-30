import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";

import ContactCta from "@/components/contact-cta";
import Footer from "@/components/footer";
import ProjectCover from "@/components/project-cover";
import SiteNav from "@/components/site-nav";
import { Button } from "@/components/ui/button";
import {
  getProject,
  projectGroups,
  publishedProjects,
  statusLabels,
} from "@/lib/projects";
import { cn } from "@/lib/utils";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return publishedProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: `${project.title} — Haris Salman`,
      description: project.tagline,
      type: "article",
    },
  };
}

const statusDot: Record<string, string> = {
  shipped: "bg-brand",
  "in-progress": "bg-warning",
  archived: "bg-muted-foreground",
};

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const group = projectGroups[project.group];

  const meta = [
    project.year ? { label: "Year", value: project.year } : null,
    project.role ? { label: "Role", value: project.role } : null,
    project.duration ? { label: "Timeline", value: project.duration } : null,
    { label: "Status", value: statusLabels[project.status] },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <div className="min-h-screen">
      <SiteNav />

      <main id="main">
        <article>
          {/* Header */}
          <header className="relative overflow-hidden border-b border-border">
            <div
              className="pointer-events-none absolute inset-0 -z-10"
              aria-hidden="true"
            >
              <div className="absolute inset-0 grid-pattern opacity-30" />
              <div className="absolute -top-40 right-[-10%] h-[26rem] w-[26rem] rounded-full bg-brand/[0.06] blur-[120px]" />
            </div>

            <div className="container pb-12 pt-28 lg:pb-16 lg:pt-36">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-caption text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                All work
              </Link>

              <p className="mt-10 flex items-center gap-2.5 text-caption-sm uppercase tracking-[0.18em] text-muted-foreground">
                <span className="text-brand">{group.index}</span>
                <span className="h-px w-5 bg-border" aria-hidden="true" />
                {group.label}
                <span className="text-muted-foreground/50">/</span>
                {project.category ?? "Project"}
              </p>

              <h1 className="mt-5 max-w-3xl text-[clamp(2.5rem,5.5vw,4rem)] font-medium leading-[1.05] tracking-[-0.02em] text-foreground">
                {project.title}
              </h1>

              <p className="mt-5 max-w-2xl text-h4 leading-snug text-muted-foreground">
                {project.tagline}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-surface px-3 py-1 text-caption-sm text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.links?.live ? (
                  <Button asChild size="lg">
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View live site
                      <ArrowUpRight aria-hidden="true" />
                    </a>
                  </Button>
                ) : null}

                {project.links?.repo ? (
                  <Button asChild size="lg" variant="outline">
                    <a
                      href={project.links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github aria-hidden="true" />
                      View code
                    </a>
                  </Button>
                ) : null}
              </div>
            </div>
          </header>

          {/* Cover */}
          <div className="container -mt-px border-b border-border py-12 lg:py-16">
            <ProjectCover
              project={project}
              index={group.index}
              className="aspect-video lg:aspect-[21/9]"
              priority
            />
          </div>

          {/* Body */}
          <div className="container py-14 lg:py-20">
            <div className="grid gap-14 lg:grid-cols-[1fr_17rem] lg:gap-20">
              <div className="min-w-0">
                <h2 className="text-h2 font-medium text-foreground">
                  Overview
                </h2>
                <p className="mt-4 max-w-2xl text-[1.0625rem] leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>

                {project.features?.length ? (
                  <section className="mt-12">
                    <h2 className="text-h4 font-medium text-foreground">
                      Key features
                    </h2>
                    <ul className="mt-5 space-y-3">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-body text-muted-foreground"
                        >
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                            aria-hidden="true"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </section>
                ) : null}

                {project.challenges?.length ? (
                  <section className="mt-12">
                    <h2 className="text-h4 font-medium text-foreground">
                      Challenges
                    </h2>
                    <ul className="mt-5 space-y-3">
                      {project.challenges.map((challenge) => (
                        <li
                          key={challenge}
                          className="flex items-start gap-3 text-body text-muted-foreground"
                        >
                          <span
                            className="mt-2.5 h-px w-3 shrink-0 bg-border"
                            aria-hidden="true"
                          />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </section>
                ) : null}

                {project.results?.length ? (
                  <section className="mt-12">
                    <h2 className="text-h4 font-medium text-foreground">
                      Results
                    </h2>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {project.results.map((result) => (
                        <div
                          key={result}
                          className="rounded-lg border border-brand/20 bg-brand-muted p-4 text-caption text-foreground"
                        >
                          {result}
                        </div>
                      ))}
                    </div>
                  </section>
                ) : null}
              </div>

              {/* Sidebar */}
              <aside className="lg:sticky lg:top-24 lg:self-start">
                <div className="rounded-lg border border-border bg-surface p-5">
                  <dl className="space-y-3">
                    {meta.map((row) => (
                      <div
                        key={row.label}
                        className="flex items-baseline justify-between gap-4"
                      >
                        <dt className="text-caption-sm uppercase tracking-[0.12em] text-muted-foreground">
                          {row.label}
                        </dt>
                        <dd className="flex items-center gap-2 text-right text-caption text-foreground">
                          {row.label === "Status" ? (
                            <span
                              className={cn(
                                "h-1.5 w-1.5 rounded-full",
                                statusDot[project.status]
                              )}
                              aria-hidden="true"
                            />
                          ) : null}
                          {row.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  {project.stack.length ? (
                    <div className="mt-5 border-t border-border pt-4">
                      <p className="text-caption-sm uppercase tracking-[0.12em] text-muted-foreground">
                        Stack
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-border px-2.5 py-1 text-caption-sm text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </aside>
            </div>
          </div>
        </article>

        <ContactCta />
      </main>

      <Footer />
    </div>
  );
}