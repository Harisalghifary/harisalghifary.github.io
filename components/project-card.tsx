import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import ProjectCover from "@/components/project-cover";
import type { Project } from "@/lib/projects";
import { statusLabels } from "@/lib/projects";
import { cn } from "@/lib/utils";

const statusDot: Record<Project["status"], string> = {
  shipped: "bg-brand",
  "in-progress": "bg-warning",
  archived: "bg-muted-foreground",
};

interface ProjectCardProps {
  project: Project;
  index?: string;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-surface transition-[transform,border-color] duration-300 ease-quart hover:-translate-y-1 hover:border-white/15 focus-visible:-translate-y-1"
    >
      <ProjectCover project={project} index={index} />

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between text-caption-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <span
              className={cn("h-1.5 w-1.5 rounded-full", statusDot[project.status])}
              aria-hidden="true"
            />
            {statusLabels[project.status]}
          </span>
          {project.year ? <span>{project.year}</span> : null}
        </div>

        <h3 className="text-h4 font-medium text-foreground transition-colors duration-200 group-hover:text-brand">
          {project.title}
        </h3>

        <p className="line-clamp-2 text-caption text-muted-foreground">
          {project.tagline}
        </p>

        <div className="mt-auto flex items-end justify-between gap-4 pt-2">
          <div className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border px-2.5 py-1 text-caption-sm text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
          <ArrowUpRight
            className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
            aria-hidden="true"
          />
        </div>
      </div>
    </Link>
  );
}