import { remark } from "remark";
import html from "remark-html";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Calendar,
  Clock,
  ExternalLink,
  Heart,
  MessageCircle,
  Share2,
  Eye,
} from "lucide-react";
import ShareAndLinkButtons from "./share-button";

interface DevToArticle {
  type_of: string;
  id: number;
  title: string;
  description: string;
  published: boolean;
  published_at: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  page_views_count: number;
  published_timestamp: string;
  body_markdown: string;
  body_html?: string;
  positive_reactions_count: number;
  cover_image: string | null;
  tag_list: string[];
  canonical_url: string;
  reading_time_minutes: number;
  user: {
    name: string;
    username: string;
    twitter_username: string | null;
    github_username: string | null;
    user_id: number;
    website_url: string | null;
    profile_image: string;
    profile_image_90: string;
  };
  flare_tag?: {
    name: string;
    bg_color_hex: string;
    text_color_hex: string;
  };
}

const userName = process.env.NEXT_PUBLIC_DEV_TO_USERNAME;

async function getArticle(slug: string): Promise<DevToArticle | null> {
  const userName = process.env.NEXT_PUBLIC_DEV_TO_USERNAME;
  const res = await fetch(
    `https://dev.to/api/articles?username=${userName}&per_page=100`,
    {
      next: { revalidate: 3600 }, // optional caching
    }
  );

  if (!res.ok) return null;

  const posts: DevToArticle[] = await res.json();
  const found = posts.find((p) => p.slug === slug);

  if (!found) return null;

  const fullRes = await fetch(`https://dev.to/api/articles/${found.id}`);
  const full = await fullRes.json();

  return full;
}

export async function generateStaticParams() {
  const res = await fetch(
    `https://dev.to/api/articles?username=${userName}&per_page=100`
  );
  const posts: DevToArticle[] = await res.json();

  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage(props: {
  params: { slug: string };
}) {
  const { slug } = props.params;
  const post = await getArticle(slug);

  if (!post) return mockBlogPost;

  const contentHtml =
    post.body_html || (await convertMarkdownToHtml(post.body_markdown));

  // console.log("content", contentHtml);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm p-6">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/blog">
            <Button variant="ghost" className="text-white hover:text-green-400">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
          <div className="flex items-center space-x-4">
            <ShareAndLinkButtons
              title={post.title}
              description={post.description}
              url={post.url}
            />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center text-sm text-gray-400 mb-6">
            <Calendar className="w-4 h-4 mr-2" />
            <span>
              {new Date(post.published_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <Clock className="w-4 h-4 ml-6 mr-2" />
            <span>{post.reading_time_minutes} min read</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          {/* <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            {post.description}
          </p> */}
          <div className="flex flex-wrap gap-3 mb-8">
            {Array.isArray(post?.tag_list) &&
              post.tag_list.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-gray-800 text-green-400 rounded-full text-sm font-medium"
                >
                  #{tag}
                </span>
              ))}
          </div>
          {post.flare_tag && (
            <div className="mb-6">
              <span
                className="px-4 py-2 rounded-full text-sm font-bold"
                style={{
                  backgroundColor: post.flare_tag.bg_color_hex,
                  color: post.flare_tag.text_color_hex,
                }}
              >
                {post.flare_tag.name}
              </span>
            </div>
          )}
          <div className="flex items-center justify-between border-t border-b border-gray-800 py-6">
            <div className="flex items-center">
              <Image
                src={post.user.profile_image || "/placeholder.svg"}
                alt={post.user.name}
                width={48}
                height={48}
                className="rounded-full mr-4"
              />
              <div>
                <p className="font-semibold">{post.user.name}</p>
                <p className="text-gray-400 text-sm">@{post.user.username}</p>
                {post.user.github_username && (
                  <p className="text-gray-500 text-xs">
                    GitHub: @{post.user.github_username}
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center space-x-6 text-gray-400">
              <div className="flex items-center">
                <Heart className="w-5 h-5 mr-2" />
                <span>{post.public_reactions_count}</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                <span>{post.comments_count}</span>
              </div>
              <div className="flex items-center">
                <Eye className="w-5 h-5 mr-2" />
                <span>{post.page_views_count}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {post.cover_image && (
        <section className="px-6 lg:px-20 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden">
              <Image
                src={post.cover_image}
                alt={post.title}
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      )}

      <section className="px-6 lg:px-20 pb-20">
        <div className="max-w-4xl mx-auto">
          <div
            className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-a:text-green-400 prose-strong:text-white prose-code:text-green-400 prose-pre:bg-gray-800 prose-blockquote:border-green-400"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </section>

      <section className="px-6 lg:px-20 pb-20">
        <div className="max-w-4xl mx-auto text-center bg-gray-800 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Enjoyed this article?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Follow me on Dev.to for more insights on frontend development, web
            technologies, and programming tutorials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://dev.to/${userName}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-white hover:text-green-400"
            >
              <Button className="bg-green-400 hover:bg-green-500 text-black">
                Follow on Dev.to
              </Button>
            </a>
            <Link href="/blog">
              <Button
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-700 bg-transparent"
              >
                Read More Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

async function convertMarkdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

// Mock data for demo
const mockBlogPost: DevToArticle = {
  type_of: "article",
  id: 1,
  title: "Building Scalable React Applications with TypeScript",
  description:
    "Learn how to structure and build maintainable React applications using TypeScript, best practices, and modern development patterns.",
  published: true,
  published_at: "2024-01-15T10:00:00Z",
  slug: "building-scalable-react-applications-typescript",
  path: "/harisalghifary/building-scalable-react-applications-typescript",
  url: "https://dev.to/harisalghifary/building-scalable-react-applications-typescript",
  comments_count: 8,
  public_reactions_count: 42,
  page_views_count: 1000,
  published_timestamp: "2024-01-15T10:00:00Z",
  body_markdown: "",
  positive_reactions_count: 42,
  cover_image: "/placeholder.svg?height=450&width=800",
  tag_list: ["react", "typescript", "javascript", "frontend"],
  canonical_url:
    "https://dev.to/harisalghifary/building-scalable-react-applications-typescript",
  reading_time_minutes: 8,
  user: {
    name: "Haris",
    username: "harisalghifary",
    twitter_username: null,
    github_username: null,
    user_id: 1,
    website_url: null,
    profile_image: "/placeholder.svg?height=48&width=48",
    profile_image_90: "/placeholder.svg?height=90&width=90",
  },
  flare_tag: undefined,
};
