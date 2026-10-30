"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

import { formatDate, type DevToArticle } from "@/lib/devto";
import { cn } from "@/lib/utils";

function BlogCover({ post }: { post: DevToArticle }) {
  if (post.cover_image) {
    return (
      <div className="relative aspect-video overflow-hidden border-b border-border">
        <Image
          src={post.cover_image}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-quart group-hover:scale-[1.03]"
        />
      </div>
    );
  }

  return (
    <div
      className="relative aspect-video overflow-hidden border-b border-border bg-surface"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 120% at 70% 80%, hsl(var(--brand) / 0.18) 0%, hsl(var(--brand) / 0.04) 40%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <span className="absolute bottom-4 left-5 text-caption-sm uppercase tracking-[0.16em] text-muted-foreground">
        {post.tag_list[0] ? `#${post.tag_list[0]}` : "Article"}
      </span>
    </div>
  );
}

function BlogCard({ post }: { post: DevToArticle }) {
  const href = post.external ? post.url : `/blog/${post.slug}`;

  return (
    <Link
      href={href}
      {...(post.external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-surface transition-[transform,border-color] duration-300 ease-quart hover:-translate-y-1 hover:border-white/15"
    >
      <BlogCover post={post} />

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-wrap gap-1.5">
          {post.tag_list.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-2.5 py-1 text-caption-sm text-muted-foreground"
            >
              #{tag}
            </span>
          ))}
        </div>

        <h3 className="text-h4 font-medium text-foreground transition-colors duration-200 group-hover:text-brand">
          {post.title}
        </h3>

        <p className="line-clamp-3 text-caption text-muted-foreground">
          {post.description}
        </p>

        <div className="mt-auto flex items-center justify-between pt-2 text-caption-sm text-muted-foreground">
          <span>{formatDate(post.published_at)}</span>
          <span>{post.reading_time_minutes} min read</span>
        </div>
      </div>
    </Link>
  );
}

export default function BlogBrowser({
  initialPosts,
}: {
  initialPosts: DevToArticle[];
}) {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("");

  const tags = useMemo(
    () =>
      Array.from(new Set(initialPosts.flatMap((post) => post.tag_list))).slice(
        0,
        6
      ),
    [initialPosts]
  );

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();

    return initialPosts.filter((post) => {
      const matchesTag = tag === "" || post.tag_list.includes(tag);
      if (!matchesTag) return false;
      if (!needle) return true;
      return `${post.title} ${post.description}`.toLowerCase().includes(needle);
    });
  }, [initialPosts, query, tag]);

  return (
    <div>
      <div className="flex flex-col gap-5 border-b border-border pb-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-sm">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <label htmlFor="post-search" className="sr-only">
            Search articles
          </label>
          <input
            id="post-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search articles…"
            className="h-11 w-full rounded-full border border-border bg-surface pl-11 pr-4 text-caption text-foreground placeholder:text-muted-foreground focus-visible:border-brand/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
          />
        </div>

        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Filter by tag"
        >
          <button
            type="button"
            onClick={() => setTag("")}
            aria-pressed={tag === ""}
            className={cn(
              "inline-flex h-9 items-center rounded-full border px-4 text-caption transition-colors",
              tag === ""
                ? "border-brand bg-brand text-brand-foreground"
                : "border-border text-muted-foreground hover:border-white/20 hover:text-foreground"
            )}
          >
            All
          </button>
          {tags.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTag(item)}
              aria-pressed={tag === item}
              className={cn(
                "inline-flex h-9 items-center rounded-full border px-4 text-caption transition-colors",
                tag === item
                  ? "border-brand bg-brand text-brand-foreground"
                  : "border-border text-muted-foreground hover:border-white/20 hover:text-foreground"
              )}
            >
              #{item}
            </button>
          ))}
        </div>
      </div>

      <p
        className="mt-6 text-caption-sm text-muted-foreground"
        aria-live="polite"
      >
        {filtered.length} article{filtered.length === 1 ? "" : "s"}
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
              setTag("");
            }}
            className="mt-5 inline-flex h-9 items-center rounded-full border border-border px-4 text-caption text-foreground transition-colors hover:bg-surface"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}