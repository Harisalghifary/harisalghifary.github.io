import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

import BlogBrowser from "@/components/blog-browser";
import ContactCta from "@/components/contact-cta";
import Footer from "@/components/footer";
import SiteNav from "@/components/site-nav";
import { Button } from "@/components/ui/button";
import { fetchArticles } from "@/lib/devto";

const username = process.env.NEXT_PUBLIC_DEV_TO_USERNAME ?? "harisalghifary";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes on building AI features, onchain products, and the unglamorous parts of shipping. Cross-posted from dev.to.",
};

export default async function BlogPage() {
  const posts = await fetchArticles(20);

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
              Index — Writing
            </p>

            <h1 className="mt-5 text-[clamp(2.75rem,6vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-foreground">
              Writing<span className="text-brand">.</span>
            </h1>

            <p className="mt-5 max-w-xl text-body text-muted-foreground">
              Notes on building AI features, onchain products, and the
              unglamorous parts of shipping. Cross-posted from dev.to.
            </p>

            <div className="mt-8">
              <Button asChild variant="outline">
                <a
                  href={`https://dev.to/${username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read on dev.to
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="container py-12 lg:py-16">
          <BlogBrowser initialPosts={posts} />
        </section>

        <ContactCta />
      </main>

      <Footer />
    </div>
  );
}