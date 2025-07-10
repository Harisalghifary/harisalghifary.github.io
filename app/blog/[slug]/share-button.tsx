"use client";

import { Button } from "@/components/ui/button";
import { Share2, ExternalLink } from "lucide-react";

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
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title, text: description, url });
      } else {
        await navigator.clipboard.writeText(url);
        alert("Link copied to clipboard!");
      }
    } catch (error) {
      console.log("Error sharing:", error);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <Button
        variant="ghost"
        onClick={handleShare}
        className="text-white hover:text-green-400"
      >
        <Share2 className="w-4 h-4 mr-2" />
        Share
      </Button>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-white hover:text-green-400"
      >
        <Button variant="ghost" className="flex items-center gap-2">
          <ExternalLink className="w-4 h-4" />
          View on Dev.to
        </Button>
      </a>
    </div>
  );
}
