import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import Footer from "@/components/footer";
import SiteNav from "@/components/site-nav";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <SiteNav />

      <main
        id="main"
        className="relative flex min-h-[80vh] items-center overflow-hidden"
      >
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          aria-hidden="true"
        >
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute left-1/2 top-1/3 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-brand/[0.07] blur-[120px]" />
        </div>

        <div className="container">
          <p className="text-caption-sm uppercase tracking-[0.18em] text-brand">
            404
          </p>

          <h1 className="mt-5 max-w-2xl text-[clamp(2.25rem,5vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.02em] text-foreground">
            Nothing here.
          </h1>

          <p className="mt-5 max-w-md text-body text-muted-foreground">
            The link may be old, or the project moved. The work is still where
            you left it.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/projects">
                Back to work
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/">
                <ArrowLeft aria-hidden="true" />
                Home
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}