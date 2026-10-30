import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";
import { ArrowLeft, ArrowUpRight, MessageCircle } from "lucide-react";

import ContactCta from "@/components/contact-cta";
import Footer from "@/components/footer";
import SiteNav from "@/components/site-nav";
import { Button } from "@/components/ui/button";
import {
  normaliseTags,
  type DevToArticle,
} from "@/lib/devto";
import ShareAndLinkButtons from "./share-button";

const username = process.env.NEXT_PUBLIC_DEV_TO_USERNAME ?? "harisalghifary";

async function getArticle(slug: string): Promise<DevToArticle | null> {
  try {
    const listRes = await fetch(
      `https://dev.to/api/articles?username=${username}&per_page=100`,
      { next: { revalidate: 3600 } }
    );

    if (!listRes.ok) return null;

    const posts: DevToArticle[] = await listRes.json();
    const found = posts.find((post) => post.slug === slug);

    if (!found) return null;

    const fullRes = await fetch(`https://dev.to/api/articles/${found.id}`, {
      next: { revalidate: 3600 },
    });

    if (!fullRes.ok) return found;

    const full = await fullRes.json();

    // The full-article endpoint returns `tags` as a comma-separated string and
    // not always `tag_list`, so normalise it before the page renders.
    return {
      ...found,
      ...full,
      tag_list: normaliseTags({ ...found, ...full }),
    };
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  try {
    const res = await fetch(
      `https://dev.to/api/articles?username=${username}&per_page=100`
    );

    if (!res.ok) return [];

    const posts: DevToArticle[] = await res.json();
    return posts.map((post) => ({ slug: post.slug }));
  } catch {
    return [];
  }
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getArticle(slug);

  if (!post) return { title: "Article not found" };

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.published_at,
      images: post.cover_image ? [post.cover_image] : undefined,
    },
  };
}

function formatDateLong(value: string) {
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getArticle(slug);

  if (!post) notFound();

  const contentHtml =
    post.body_html ||
    (await remark().use(html).process(post.body_markdown ?? "")).toString();

  return (
    <div className="min-h-screen">
      <SiteNav />

      <main id="main">
        <article>
          <header className="relative overflow-hidden border-b border-border">
            <div
              className="pointer-events-none absolute inset-0 -z-10"
              aria-hidden="true"
            >
              <div className="absolute inset-0 grid-pattern opacity-30" />
              <div className="absolute -top-40 right-[-10%] h-[24rem] w-[24rem] rounded-full bg-brand/[0.06] blur-[120px]" />
            </div>

            <div className="container max-w-3xl pb-12 pt-28 lg:pt-36">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-caption text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                All writing
              </Link>

              <div className="mt-10 flex flex-wrap gap-1.5">
                {(post.tag_list ?? []).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-surface px-3 py-1 text-caption-sm text-muted-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <h1 className="mt-5 text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.1] tracking-[-0.02em] text-foreground">
                {post.title}
              </h1>

              <p className="mt-4 text-h4 leading-snug text-muted-foreground">
                {post.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
                <div className="flex items-center gap-3">
                  <Image
                    src={post.user.profile_image}
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full border border-border"
                  />
                  <div>
                    <p className="text-caption font-medium text-foreground">
                      {post.user.name}
                    </p>
                    <p className="text-caption-sm text-muted-foreground">
                      {formatDateLong(post.published_at)} ·{" "}
                      {post.reading_time_minutes} min read
                    </p>
                  </div>
                </div>

                <ShareAndLinkButtons
                  title={post.title}
                  description={post.description}
                  url={post.url}
                />
              </div>
            </div>
          </header>

          {post.cover_image ? (
            <div className="container max-w-3xl py-10">
              <div className="relative aspect-video overflow-hidden rounded-lg border border-border">
                <Image
                  src={post.cover_image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 720px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          ) : null}

          <div className="container max-w-3xl pb-16 pt-10">
            <div
              className="prose prose-site prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </div>
        </article>

        <section className="border-t border-border">
          <div className="container max-w-3xl py-14">
            <div className="rounded-lg border border-border bg-surface p-8">
              <h2 className="text-h2 font-medium text-foreground">
                Enjoyed this article?
              </h2>
              <p className="mt-3 max-w-xl text-body text-muted-foreground">
                I write about AI features, onchain products, and the parts of
                shipping nobody puts on a slide.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <a
                    href={`https://dev.to/${username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Follow on dev.to
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/blog">Read more</Link>
                </Button>
                <span className="inline-flex items-center gap-1.5 text-caption text-muted-foreground">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  {post.comments_count} comments on dev.to
                </span>
              </div>
            </div>
          </div>
        </section>

        <ContactCta />
      </main>

      <Footer />
    </div>
  );
}