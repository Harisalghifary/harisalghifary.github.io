"use client";

import { useState } from "react";
import { Check, ExternalLink, Share2 } from "lucide-react";

import { Button } from "@/components/ui/button";

interface Props {
  title: string;
  description: string;
  url: string;
}

export default function ShareAndLinkButtons({
  title,
  description,
  url,
}: Props) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    try {
      if (navigator.share) {
        await navigator.share({ title, text: description, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // User dismissed the share sheet; nothing to do.
    }
  }

  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" size="sm" onClick={handleShare}>
        {copied ? (
          <Check aria-hidden="true" />
        ) : (
          <Share2 aria-hidden="true" />
        )}
        {copied ? "Copied" : "Share"}
      </Button>

      <Button asChild variant="ghost" size="sm">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <ExternalLink aria-hidden="true" />
          dev.to
        </a>
      </Button>
    </div>
  );
}