export type ProjectGroup = "ai" | "onchain" | "product";
export type ProjectStatus = "shipped" | "in-progress" | "archived";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectLinks {
  live?: string;
  repo?: string;
  demo?: string;
}

export interface Project {
  /** Stable URL segment. Never rename once published. */
  slug: string;
  title: string;
  /** One line used on cards and link previews. */
  tagline: string;
  /** Two or three sentences used at the top of the detail page. */
  summary: string;
  group: ProjectGroup;
  status: ProjectStatus;
  featured: boolean;
  /** Hidden from the site and from generated routes when true. */
  draft?: boolean;
  year?: string;
  category?: string;
  role?: string;
  duration?: string;
  cover?: string;
  stack: string[];
  features?: string[];
  challenges?: string[];
  results?: string[];
  metrics?: ProjectMetric[];
  gallery?: string[];
  links?: ProjectLinks;
}

export const projectGroups: Record<
  ProjectGroup,
  { label: string; index: string; description: string }
> = {
  ai: {
    label: "AI",
    index: "01",
    description: "LLM features that hold up outside a demo.",
  },
  onchain: {
    label: "Onchain",
    index: "02",
    description: "Contracts, indexes, and the plumbing around them.",
  },
  product: {
    label: "Product & Platform",
    index: "03",
    description: "Software real teams use to run their day.",
  },
};

export const groupOrder: ProjectGroup[] = ["ai", "onchain", "product"];

export const statusLabels: Record<ProjectStatus, string> = {
  shipped: "Shipped",
  "in-progress": "In progress",
  archived: "Archived",
};

/**
 * Single source of truth for the whole site.
 *
 * To publish a draft project: set `draft: false`, fill in the copy, and add
 * `cover: "/projects/<slug>.png"` once a screenshot exists. No component
 * changes are needed.
 */
export const projects: Project[] = [
  {
    slug: "paham-pajak",
    title: "Paham Pajak",
    tagline: "Tax questions answered from the source, not from a forum.",
    summary:
      "A tax-education platform with a RAG pipeline over Ministry of Finance documents. Ask a regulatory question in plain language and get an answer with the source attached, instead of a forum thread from 2014.",
    group: "ai",
    status: "shipped",
    // Hidden for now: no public repo or write-up yet. Keep the data for later.
    featured: false,
    draft: true,
    year: "2025",
    category: "GovTech",
    role: "Solo build",
    stack: ["Go", "Next.js", "Gemini", "RAG"],
    features: [
      "Natural-language Q&A over Ministry of Finance regulations",
      "Every answer cites the source document",
      "Retrieval pipeline built over official regulatory text",
    ],
    challenges: [
      "Keeping retrieval accurate on dense legal language",
      "Stopping the model from answering beyond the source",
    ],
  },
  {
    slug: "personal-grammarly",
    title: "Personal Grammarly",
    tagline: "Grammar and tone correction for English and Bahasa.",
    summary:
      "A writing assistant that fixes grammar, adjusts tone, and works in both English and Indonesian, which most tools quietly ignore. It ran in beta with around a thousand users.",
    group: "ai",
    status: "shipped",
    featured: true,
    year: "2025",
    category: "Writing",
    role: "Solo build",
    stack: ["Python", "OpenAI API", "Gradio", "Hugging Face"],
    features: [
      "Grammar and clarity correction",
      "Tone-aware suggestions",
      "Full English and Bahasa Indonesia support",
    ],
    challenges: [
      "Handling mixed-language input",
      "Keeping suggestions useful without being intrusive",
    ],
    results: [
      "Used by 1,000+ people in beta",
      "4.9/5 on clarity improvement",
    ],
  },
  {
    slug: "finance-tracker",
    title: "Finance Tracker",
    tagline: "Personal finance, with an assistant that reads your own numbers.",
    summary:
      "A private dashboard for income, expenses, and savings goals, plus a chat assistant that answers questions about your data instead of giving generic advice. Next.js and Supabase up front, a Go service and a RAG pipeline behind the chat.",
    group: "ai",
    status: "in-progress",
    featured: true,
    year: "2025",
    category: "Finance",
    role: "Solo build",
    stack: ["Next.js", "LangChain", "Pinecone", "Supabase", "Go"],
    features: [
      "Income and expense tracking",
      "Smart tags and categorization",
      "Monthly overview and budget goals",
      "AI chat assistant over your own data",
    ],
    challenges: [
      "Personalizing suggestions without compromising privacy",
      "Making budgeting work when the data is incomplete",
    ],
  },
  {
    slug: "chainmind",
    title: "ChainMind",
    tagline: "An AI auditor that reads Solidity like a security reviewer.",
    summary:
      "ChainMind parses a Solidity contract, splits it into function-level chunks, and retrieves similar real-world exploit patterns with pgvector. An LLM reviews each chunk and returns a severity-ranked report with the vulnerable code, a suggested fix, and the pattern it matched.",
    group: "ai",
    status: "shipped",
    featured: true,
    year: "2026",
    category: "Security",
    role: "Solo build",
    cover: "/projects/chainmind.png",
    stack: ["Go", "pgvector", "Next.js", "Claude", "OpenAI"],
    features: [
      "Solidity parsing and function-level chunking",
      "pgvector search over 21 curated exploit patterns",
      "Claude and OpenAI providers with retry and automatic fallback",
      "Async audit jobs with live chunk-level progress",
      "Severity-ranked findings with fixes and references",
    ],
    challenges: [
      "Keeping retrieved exploit patterns relevant without flooding the prompt",
      "Making provider fallback invisible to the user when one API fails",
    ],
    results: [
      "End-to-end pipeline from contract to structured report",
      "Keyless mock mode so the demo runs without API keys",
    ],
    links: {
      repo: "https://github.com/Harisalghifary/chainmind",
    },
  },
  {
    slug: "beacondex",
    title: "BeaconDEX",
    tagline: "A hackathon DEX built on Base.",
    summary:
      "A decentralized exchange prototype built in 48 hours: swaps, liquidity pools, and Permit2 meta-transactions so users do not burn gas on approvals. It finished top five and the sponsor called the gas design the most efficient in the room.",
    group: "onchain",
    status: "shipped",
    featured: true,
    year: "2025",
    category: "DeFi",
    role: "Solo build",
    duration: "48 hours",
    stack: ["Solidity", "Next.js", "Wagmi", "RainbowKit", "TypeScript"],
    features: [
      "Token swaps and liquidity pool creation",
      "Permit2-based meta transactions",
      "TradingView chart integration",
      "Subgraph-based market stats",
    ],
    challenges: [
      "Handling permit signatures across chains",
      "Gas optimization under a 48-hour deadline",
    ],
    results: ["Top 5 finalist", "300+ testnet transactions"],
  },
  {
    slug: "satu-sehat",
    title: "Satu Sehat Clinic SaaS",
    tagline: "A multi-tenant clinic system wired into Indonesia's national health platform.",
    summary:
      "Satu Sehat handles the daily work of running a clinic: patients, visits, records, and files. It is multi-tenant from the ground up and integrates with the national Satu Sehat platform, so records do not stop at the clinic door.",
    group: "product",
    status: "shipped",
    featured: true,
    year: "2025",
    category: "HealthTech",
    role: "Solo build",
    stack: ["Python", "FastAPI", "PostgreSQL", "Redis", "MinIO"],
    features: [
      "Multi-tenant clinic management",
      "Patient, visit, and record tracking",
      "File storage with MinIO",
      "Integration with the national Satu Sehat platform",
    ],
    challenges: [
      "Isolating data between tenants",
      "Mapping real clinic workflows onto a national API",
    ],
    links: {
      repo: "https://github.com/Harisalghifary/sehat-bridge",
    },
  },
  {
    slug: "haluka",
    title: "Haluka",
    tagline: "Booth scheduling and student calling for boarding schools.",
    summary:
      "Haluka replaces the paper-and-WhatsApp routine boarding schools use to run daily booth sessions. Admins schedule booths, call students in order, and watch the queue update live, without standing in the hallway with a clipboard.",
    group: "product",
    status: "shipped",
    featured: true,
    year: "2022",
    category: "EdTech",
    role: "Solo build",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Node.js"],
    features: [
      "Booth registration and time-based calling",
      "Real-time queue and status tracking",
      "Admin dashboard with role-based access",
      "Audit log for user activity",
    ],
    challenges: [
      "Designing a queue that scales without external services",
      "Managing users across multiple booths",
    ],
    results: ["50% fewer communication issues", "Adopted by 3+ boarding schools"],
  },
  {
    slug: "bandar-swing-tracker",
    title: "Bandar Swing Tracker",
    tagline: "A swing trading journal that keeps score honestly.",
    // TODO: replace with the real write-up before setting draft: false.
    summary: "A write-up is in progress for this project.",
    group: "product",
    status: "in-progress",
    featured: false,
    draft: true,
    year: "2026",
    category: "Trading",
    stack: [],
  },
  {
    slug: "gitlab-duo-cicd",
    title: "GitLab Duo CI/CD",
    tagline: "Pipelines with an AI reviewer in the loop.",
    // TODO: replace with the real write-up before setting draft: false.
    summary: "A write-up is in progress for this project.",
    group: "product",
    status: "in-progress",
    featured: false,
    draft: true,
    year: "2026",
    category: "DevOps",
    stack: [],
  },
];

export const publishedProjects = projects.filter((project) => !project.draft);

export const featuredProjects = publishedProjects.filter(
  (project) => project.featured
);

export function getProject(slug: string): Project | undefined {
  return publishedProjects.find((project) => project.slug === slug);
}

export function publishedByGroup(group: ProjectGroup): Project[] {
  return publishedProjects.filter((project) => project.group === group);
}

export function featuredByGroup(group: ProjectGroup): Project[] {
  return featuredProjects.filter((project) => project.group === group);
}

export function groupCounts(): Record<ProjectGroup, number> {
  return {
    ai: publishedByGroup("ai").length,
    onchain: publishedByGroup("onchain").length,
    product: publishedByGroup("product").length,
  };
}