import Image from "next/image";

import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

interface ProjectCoverProps {
  project: Project;
  index?: string;
  className?: string;
  priority?: boolean;
}

/**
 * Deterministic so server and client render the same thing.
 */
function seedFromSlug(slug: string): number {
  let hash = 0;
  for (let i = 0; i < slug.length; i += 1) {
    hash = (hash * 31 + slug.charCodeAt(i)) % 100000;
  }
  return hash;
}

export default function ProjectCover({
  project,
  index,
  className,
  priority = false,
}: ProjectCoverProps) {
  if (project.cover) {
    return (
      <div
        className={cn(
          "relative aspect-video overflow-hidden rounded-lg border border-border bg-surface",
          className
        )}
      >
        <Image
          src={project.cover}
          alt={`${project.title} preview`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    );
  }

  const seed = seedFromSlug(project.slug);
  const x = 25 + (seed % 50);
  const y = 60 + (seed % 25);

  return (
    <div
      className={cn(
        "relative aspect-video overflow-hidden rounded-lg border border-border bg-surface",
        className
      )}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(120% 120% at ${x}% ${y}%, hsl(var(--brand) / 0.22) 0%, hsl(var(--brand) / 0.06) 38%, transparent 68%)`,
        }}
      />
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-between p-5">
        <div className="flex items-center justify-between gap-4 text-caption-sm uppercase tracking-[0.16em] text-muted-foreground">
          <span
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand/70"
            aria-hidden="true"
          />
          <span className="truncate text-right">
            {project.category ?? ""}
          </span>
        </div>

        <div className="flex items-end justify-between gap-4">
          <span className="text-[clamp(2.5rem,7vw,4rem)] font-medium leading-none tabular-nums text-foreground/15">
            {index ?? "00"}
          </span>
          <span className="text-caption-sm uppercase tracking-[0.16em] text-brand/70">
            Case study
          </span>
        </div>
      </div>

      <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/5" />
    </div>
  );
}