"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import ProjectCard from "@/components/project-card";
import {
  groupCounts,
  groupOrder,
  projectGroups,
  publishedProjects,
  type ProjectGroup,
} from "@/lib/projects";
import { cn } from "@/lib/utils";

type GroupFilter = ProjectGroup | "all";

function Pill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "inline-flex h-9 items-center gap-2 rounded-full border px-4 text-caption transition-colors duration-200",
        active
          ? "border-brand bg-brand text-brand-foreground"
          : "border-border text-muted-foreground hover:border-white/20 hover:text-foreground"
      )}
    >
      {children}
    </button>
  );
}

export default function ProjectsBrowser() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState<GroupFilter>("all");
  const counts = groupCounts();

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();

    return publishedProjects.filter((project) => {
      const matchesGroup = group === "all" || project.group === group;
      if (!matchesGroup) return false;
      if (!needle) return true;

      return [project.title, project.tagline, project.summary, ...project.stack]
        .join(" ")
        .toLowerCase()
        .includes(needle);
    });
  }, [group, query]);

  return (
    <div>
      <div className="flex flex-col gap-5 border-b border-border pb-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-sm">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <label htmlFor="project-search" className="sr-only">
            Search projects
          </label>
          <input
            id="project-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search projects and tools…"
            className="h-11 w-full rounded-full border border-border bg-surface pl-11 pr-4 text-caption text-foreground placeholder:text-muted-foreground focus-visible:border-brand/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
          />
        </div>

        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          <Pill active={group === "all"} onClick={() => setGroup("all")}>
            All
            <span className="tabular-nums opacity-70">
              {publishedProjects.length}
            </span>
          </Pill>
          {groupOrder.map((key) => (
            <Pill
              key={key}
              active={group === key}
              onClick={() => setGroup(key)}
            >
              {projectGroups[key].label}
              <span className="tabular-nums opacity-70">{counts[key]}</span>
            </Pill>
          ))}
        </div>
      </div>

      <p
        className="mt-6 text-caption-sm text-muted-foreground"
        aria-live="polite"
      >
        {filtered.length} project{filtered.length === 1 ? "" : "s"}
      </p>

      {filtered.length === 0 ? (
        <div className="mt-10 rounded-lg border border-dashed border-border p-14 text-center">
          <h2 className="text-h4 font-medium text-foreground">
            Nothing matches that filter.
          </h2>
          <p className="mt-2 text-caption text-muted-foreground">
            Try a different search, or clear the filters.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setGroup("all");
            }}
            className="mt-5 inline-flex h-9 items-center rounded-full border border-border px-4 text-caption text-foreground transition-colors hover:bg-surface"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={`0${publishedProjects.indexOf(project) + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}