"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, ExternalLink, Search } from "lucide-react";
import Image from "next/image";

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

export default function BlogPage() {
  const [posts, setPosts] = useState<DevToArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const userName = process.env.NEXT_PUBLIC_DEV_TO_USERNAME;
  const fetchBlogPosts = async () => {
    try {
      // Replace 'harisalghifary' with your actual Dev.to username
      const response = await fetch(
        `https://dev.to/api/articles?username=${userName}&per_page=20`
      );
      const data: DevToArticle[] = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      // Fallback mock data for demo
      setPosts(mockBlogPosts);
    } finally {
      setLoading(false);
    }
  };

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag =
      selectedTag === "" || post.tag_list.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const allTags = Array.from(new Set(posts.flatMap((post) => post.tag_list)));

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return <BlogLoadingSkeleton />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Button
            variant="ghost"
            onClick={() => router.push("/")}
            className="text-white hover:text-green-400"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() =>
                window.open(`https://dev.to/${userName}`, "_blank")
              }
              className="text-white hover:text-green-400"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View on Dev.to
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="text-green-400">Blog</span> & Articles
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Sharing insights, tutorials, and thoughts on software development,
            web technologies, and the latest trends in the tech industry.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="px-6 lg:px-20 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
              />
            </div>

            {/* Tag Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTag("")}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  selectedTag === ""
                    ? "bg-green-400 text-black"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                All
              </button>
              {allTags.slice(0, 6).map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    selectedTag === tag
                      ? "bg-green-400 text-black"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-6 lg:px-20 pb-20">
        <div className="max-w-6xl mx-auto">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-gray-400 mb-4">
                No articles found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function BlogCard({ post }: { post: DevToArticle }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/blog/${post.slug}`);
  };

  return (
    <article
      className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-all duration-300 cursor-pointer group hover:scale-105"
      onClick={handleClick}
    >
      {post.cover_image && (
        <div className="aspect-video overflow-hidden">
          <Image
            src={post.cover_image || "/placeholder.svg"}
            alt={post.title}
            width={400}
            height={225}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      )}

      <div className="p-6">
        <div className="flex items-center text-sm text-gray-400 mb-3">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{new Date(post.published_at).toLocaleDateString()}</span>
          <Clock className="w-4 h-4 ml-4 mr-2" />
          <span>{post.reading_time_minutes} min read</span>
        </div>

        <h3 className="text-xl font-bold mb-3 group-hover:text-green-400 transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="text-gray-300 mb-4 line-clamp-3">{post.description}</p>

        {/* Flare Tag */}
        {post.flare_tag && (
          <div className="mb-4">
            <span
              className="px-3 py-1 rounded-full text-xs font-bold"
              style={{
                backgroundColor: post.flare_tag.bg_color_hex,
                color: post.flare_tag.text_color_hex,
              }}
            >
              {post.flare_tag.name}
            </span>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tag_list.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-gray-400">
          <span>❤️ {post.public_reactions_count}</span>
          <span>💬 {post.comments_count}</span>
          <span>👁️ {post.page_views_count}</span>
        </div>
      </div>
    </article>
  );
}

function BlogLoadingSkeleton() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="w-32 h-10 bg-gray-800 rounded animate-pulse"></div>
          <div className="w-32 h-10 bg-gray-800 rounded animate-pulse"></div>
        </div>
      </nav>

      <section className="pt-32 pb-16 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-96 h-16 bg-gray-800 rounded mx-auto mb-6 animate-pulse"></div>
          <div className="w-full max-w-3xl h-6 bg-gray-800 rounded mx-auto animate-pulse"></div>
        </div>
      </section>

      <section className="px-6 lg:px-20 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="aspect-video bg-gray-700 animate-pulse"></div>
                <div className="p-6">
                  <div className="w-32 h-4 bg-gray-700 rounded mb-3 animate-pulse"></div>
                  <div className="w-full h-6 bg-gray-700 rounded mb-3 animate-pulse"></div>
                  <div className="w-full h-4 bg-gray-700 rounded mb-2 animate-pulse"></div>
                  <div className="w-3/4 h-4 bg-gray-700 rounded mb-4 animate-pulse"></div>
                  <div className="flex gap-2 mb-4">
                    <div className="w-16 h-6 bg-gray-700 rounded-full animate-pulse"></div>
                    <div className="w-20 h-6 bg-gray-700 rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex justify-between">
                    <div className="w-12 h-4 bg-gray-700 rounded animate-pulse"></div>
                    <div className="w-12 h-4 bg-gray-700 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Mock data for demo purposes
const mockBlogPosts: DevToArticle[] = [
  {
    type_of: "article",
    id: 1,
    title: "Building Scalable React Applications with TypeScript",
    description:
      "Learn how to structure and build maintainable React applications using TypeScript, best practices, and modern development patterns.",
    published: true,
    published_at: "2024-01-15T10:00:00Z",
    slug: "building-scalable-react-applications-typescript",
    path: "/tajmirul/building-scalable-react-applications-typescript",
    url: "https://dev.to/tajmirul/building-scalable-react-applications-typescript",
    comments_count: 8,
    public_reactions_count: 42,
    page_views_count: 1000,
    published_timestamp: "2024-01-15T10:00:00Z",
    body_markdown: "...",
    positive_reactions_count: 42,
    cover_image: "/placeholder.svg?height=225&width=400",
    tag_list: ["react", "typescript", "javascript", "frontend"],
    canonical_url:
      "https://dev.to/tajmirul/building-scalable-react-applications-typescript",
    reading_time_minutes: 8,
    user: {
      name: "Tajmirul",
      username: "tajmirul",
      twitter_username: null,
      github_username: null,
      user_id: 123,
      website_url: null,
      profile_image: "...",
      profile_image_90: "...",
    },
  },
  {
    type_of: "article",
    id: 2,
    title: "Next.js 15: What's New and How to Upgrade",
    description:
      "Explore the latest features in Next.js 15, including performance improvements, new APIs, and migration strategies from previous versions.",
    published: true,
    published_at: "2024-01-10T14:30:00Z",
    slug: "nextjs-15-whats-new-upgrade-guide",
    path: "/tajmirul/nextjs-15-whats-new-upgrade-guide",
    url: "https://dev.to/tajmirul/nextjs-15-whats-new-upgrade-guide",
    comments_count: 15,
    public_reactions_count: 67,
    page_views_count: 1500,
    published_timestamp: "2024-01-10T14:30:00Z",
    body_markdown: "...",
    positive_reactions_count: 67,
    cover_image: "/placeholder.svg?height=225&width=400",
    tag_list: ["nextjs", "react", "javascript", "webdev"],
    canonical_url: "https://dev.to/tajmirul/nextjs-15-whats-new-upgrade-guide",
    reading_time_minutes: 12,
    user: {
      name: "Tajmirul",
      username: "tajmirul",
      twitter_username: null,
      github_username: null,
      user_id: 123,
      website_url: null,
      profile_image: "...",
      profile_image_90: "...",
    },
  },
  {
    type_of: "article",
    id: 3,
    title: "CSS Grid vs Flexbox: When to Use Which",
    description:
      "A comprehensive comparison of CSS Grid and Flexbox, with practical examples and use cases to help you choose the right layout method.",
    published: true,
    published_at: "2024-01-05T09:15:00Z",
    slug: "css-grid-vs-flexbox-when-to-use",
    path: "/tajmirul/css-grid-vs-flexbox-when-to-use",
    url: "https://dev.to/tajmirul/css-grid-vs-flexbox-when-to-use",
    comments_count: 23,
    public_reactions_count: 89,
    page_views_count: 2000,
    published_timestamp: "2024-01-05T09:15:00Z",
    body_markdown: "...",
    positive_reactions_count: 89,
    cover_image: "/placeholder.svg?height=225&width=400",
    tag_list: ["css", "webdev", "frontend", "design"],
    canonical_url: "https://dev.to/tajmirul/css-grid-vs-flexbox-when-to-use",
    reading_time_minutes: 6,
    user: {
      name: "Tajmirul",
      username: "tajmirul",
      twitter_username: null,
      github_username: null,
      user_id: 123,
      website_url: null,
      profile_image: "...",
      profile_image_90: "...",
    },
  },
];
