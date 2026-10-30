import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/lib/projects";

interface ProjectRowProps {
  project: Project;
  index: string;
}

export default function ProjectRow({ project, index }: ProjectRowProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 gap-y-1 border-b border-border py-5 transition-colors duration-200 first:border-t sm:grid-cols-[3rem_1fr_auto_auto] sm:py-6"
    >
      <span className="text-caption-sm tabular-nums text-muted-foreground/60 transition-colors group-hover:text-brand">
        {index}
      </span>

      <span className="min-w-0">
        <span className="block text-h2 font-medium text-foreground transition-colors duration-200 group-hover:text-brand">
          {project.title}
        </span>
        <span className="mt-1 block truncate text-caption text-muted-foreground">
          {project.tagline}
        </span>
      </span>

      <span className="hidden text-caption-sm text-muted-foreground sm:block">
        {project.stack.slice(0, 2).join(" · ")}
      </span>

      <ArrowUpRight
        className="h-4 w-4 justify-self-end text-muted-foreground transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
        aria-hidden="true"
      />
    </Link>
  );
}