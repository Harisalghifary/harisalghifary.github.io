export interface DevToArticle {
  id: number;
  title: string;
  description: string;
  published_at: string;
  slug: string;
  url: string;
  reading_time_minutes: number;
  cover_image: string | null;
  tag_list: string[];
  public_reactions_count: number;
  comments_count: number;
  body_markdown?: string;
  body_html?: string;
  tags?: string;
  /** Mock fallback posts link out to dev.to instead of a generated route. */
  external?: boolean;
  user: {
    name: string;
    username: string;
    profile_image: string;
  };
}

const username = process.env.NEXT_PUBLIC_DEV_TO_USERNAME ?? "harisalghifary";

export const mockPosts: DevToArticle[] = [
  {
    id: 1,
    title: "Building Scalable React Applications with TypeScript",
    description:
      "How to structure maintainable React applications using TypeScript, modern patterns, and a few opinions that survived production.",
    published_at: "2025-01-15T10:00:00Z",
    slug: "building-scalable-react-applications-typescript",
    url: "https://dev.to/harisalghifary",
    external: true,
    reading_time_minutes: 8,
    cover_image: null,
    tag_list: ["react", "typescript"],
    public_reactions_count: 42,
    comments_count: 8,
    user: {
      name: "Haris Salman",
      username: "harisalghifary",
      profile_image: "/placeholder-user.jpg",
    },
  },
  {
    id: 2,
    title: "What Actually Breaks When You Scale a Pipeline",
    description:
      "Notes from rebuilding a reconciliation pipeline that fell over at a hundred thousand rows, and what it took to push it past a million.",
    published_at: "2025-01-10T14:30:00Z",
    slug: "what-breaks-when-you-scale-a-pipeline",
    url: "https://dev.to/harisalghifary",
    external: true,
    reading_time_minutes: 12,
    cover_image: null,
    tag_list: ["go", "backend"],
    public_reactions_count: 67,
    comments_count: 15,
    user: {
      name: "Haris Salman",
      username: "harisalghifary",
      profile_image: "/placeholder-user.jpg",
    },
  },
  {
    id: 3,
    title: "RAG Without the Hype",
    description:
      "A practical look at retrieval pipelines over official documents, where they fail, and how to keep answers grounded in the source.",
    published_at: "2025-01-05T09:15:00Z",
    slug: "rag-without-the-hype",
    url: "https://dev.to/harisalghifary",
    external: true,
    reading_time_minutes: 6,
    cover_image: null,
    tag_list: ["ai", "llm"],
    public_reactions_count: 89,
    comments_count: 23,
    user: {
      name: "Haris Salman",
      username: "harisalghifary",
      profile_image: "/placeholder-user.jpg",
    },
  },
];

export function normaliseTags(article: DevToArticle): string[] {
  if (Array.isArray(article.tag_list)) return article.tag_list;
  if (typeof article.tags === "string") {
    return article.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);
  }
  return [];
}

/**
 * Fetched at build time so the exported HTML already contains the articles.
 * Falls back to the local posts when dev.to is unreachable.
 */
export async function fetchArticles(limit = 20): Promise<DevToArticle[]> {
  try {
    const response = await fetch(
      `https://dev.to/api/articles?username=${username}&per_page=${limit}`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) throw new Error(`dev.to responded ${response.status}`);

    const data: DevToArticle[] = await response.json();

    if (!Array.isArray(data) || data.length === 0) return mockPosts;

    return data.map((article) => ({
      ...article,
      tag_list: normaliseTags(article),
    }));
  } catch {
    return mockPosts;
  }
}

export function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}