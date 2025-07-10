import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import ProjectNotFound from "@/components/project-not-found";

const projectData: Record<string, any> = [
  {
    id: "haluka",
    title: "Haluka",
    subtitle: "Boarding School Management Platform",
    description:
      "A management and call coordination system tailored for boarding schools.",
    longDescription:
      "Haluka is an end-to-end platform that simplifies booth-based operations and call scheduling in boarding schools. Built for efficiency and discipline, the system supports booth registration, queuing logic, and real-time call tracking. It ensures structured communication while reducing manual supervision effort.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Nodejs",
    ],
    features: [
      "Booth registration and time-based calling",
      "Real-time queue and status tracking",
      "Admin dashboard with role-based access",
      "Mobile-friendly responsive design",
      "Audit log for user activities",
    ],
    challenges: [
      "Designing a scalable queuing system",
      "Ensuring real-time updates without external services",
      "User management across multiple booths",
    ],
    results: [
      "50% reduction in communication issues",
      "Automated daily scheduling",
      "Adopted in 3+ boarding schools within 6 months",
    ],
    liveUrl: "https://haluka.vercel.app",
    githubUrl: "https://github.com/harisalghifary/haluka",
    year: "2022",
    category: "Web App",
    status: "completed",
    featured: true,
    image: "/projects/haluka.png",
  },
  {
    id: "personal-grammarly",
    title: "Personal Grammarly",
    subtitle: "Context-Aware Sentence Enhancer",
    description:
      "An AI-powered grammar and clarity corrector that adapts to your personal tone and supports Bahasa Indonesia.",
    longDescription:
      "This tool helps users write better English and Indonesian sentences with personalized suggestions. Using LLMs and rule-based NLP, it corrects grammar, improves tone, and adapts to context like formality or writing goals. Ideal for students, professionals, and multilingual users.",
    technologies: ["Huggingface", "OpenAI API", "Gradio", "Python"],
    features: [
      "Sentence correction with LLM",
      "Tone-aware and personalized feedback",
      "Bahasa Indonesia support",
    ],
    challenges: [
      "Supporting bilingual UX",
      "Designing a minimal, non-intrusive interface",
    ],
    results: [
      "Used by 1000+ users in beta phase",
      "Received 4.9/5 user feedback on clarity improvement",
      "Saved users hours in editing time",
    ],
    liveUrl: "https://personalgrammarly.vercel.app",
    githubUrl: "https://github.com/harisalghifary/personal-grammarly",
    year: "2025",
    category: "AI/ML",
    status: "in-progress",
    featured: true,
    image: "/projects/personal-grammarly.png",
  },
  {
    id: "finance-tracker",
    title: "Finance Tracker",
    subtitle: "AI-Enhanced Personal Finance Manager",
    description:
      "A private and intuitive finance dashboard with smart insights powered by AI.",
    longDescription:
      "Track your income, expenses, and saving goals with AI-generated suggestions. Designed for privacy and ease, this tool learns from your patterns to help you budget better and meet financial goals faster.",
    technologies: [
      "Next.js",
      "Pinecone",
      "LangChain",
      "Tailwind CSS",
      "Supabase",
      "Golang",
    ],
    features: [
      "Income and expense logging",
      "Smart tags and categorization",
      "Monthly overview and budget goals",
      "AI chat assistant for finance questions",
      "End-to-end encrypted user data",
    ],
    challenges: [
      "Balancing personalization with privacy",
      "Handling offline-first budgeting",
      "Training budget suggestions without overshooting",
    ],
    results: ["Still in building MVP"],
    liveUrl: "",
    githubUrl: "https://github.com/harisalghifary/finance-tracker",
    year: "2025",
    category: "Finance",
    status: "in-progress",
    featured: true,
    image: "/projects/finance-tracker.png",
  },
  {
    id: "beacondex",
    title: "BeaconDEX",
    subtitle: "Decentralized Exchange Built for Hackathon",
    description:
      "A full-featured decentralized exchange built on Base network with Uniswap v3 and permit-based swap support.",
    longDescription:
      "BeaconDEX is a gas-efficient DEX prototype designed during a hackathon. It supports liquidity pools, trading view charts, token swaps, and meta-transactions via Permit2. Built with a custom subgraph and stateless frontend.",
    technologies: [
      "Solidity",
      "Next.js",
      "Uniswap SDK",
      "RainbowKit",
      "Wagmi",
      "TypeScript",
    ],
    features: [
      "Token swap and liquidity pool creation",
      "Permit2-based meta transactions",
      "TradingView chart integration",
      "ERC-20 approval-less flow",
      "Subgraph-based market stats",
    ],
    challenges: [
      "Handling permit signatures across chains",
      "Maintaining minimal latency in swaps",
      "Hackathon time constraint",
    ],
    results: [
      "Top 5 finalist in Hackathon",
      "300+ testnet transactions",
      "Recognized by sponsor as 'most gas-efficient design'",
    ],
    liveUrl: "https://beacondex.vercel.app",
    githubUrl: "https://github.com/harisalghifary/beacondex",
    year: "2025",
    category: "Web3",
    status: "completed",
    featured: false,
    image: "/projects/beacondex.png",
  },
  {
    id: "consulting-hris",
    title: "Consulting HRIS",
    subtitle: "HR System Prototype for Small Business",
    description:
      "A prototype for a Human Resources Information System tailored for consulting and onboarding workflows.",
    longDescription:
      "This project simulates key HRIS features such as employee directory, attendance, leave requests, and payroll reporting. Built for SMEs or consultants needing lightweight solutions.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Chakra UI"],
    features: [
      "Employee profile management",
      "Time tracking and leave management",
      "Role-based admin control",
      "Simple payroll export",
      "Email reminders",
    ],
    challenges: [
      "Designing flexible schema for custom needs",
      "Handling secure employee data",
      "Adapting to consulting-first flow",
    ],
    results: [
      "Tested with 2 partner SMEs",
      "Improved HR admin task completion by 40%",
      "Extended to support multi-location HR teams",
    ],
    liveUrl: "https://consulting-hris.vercel.app",
    githubUrl: "https://github.com/harisalghifary/consulting-hris",
    year: "2025",
    category: "Web App",
    status: "in-progress",
    featured: false,
    image: "/projects/consulting-hris.png",
  },
  {
    id: "portofolio-dev",
    title: "Portofolio DEV",
    subtitle: "Developer Portfolio and Project Showcase",
    description:
      "A responsive portfolio site to showcase skills, projects, and open source contributions.",
    longDescription:
      "Built as a minimal, fast-loading developer portfolio that integrates blog posts, project demos, and code snippets. Designed for hiring managers and collaborators to explore work in one place.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "MDX"],
    features: [
      "Dynamic project and blog pages",
      "Dark mode toggle",
      "Custom markdown rendering",
      "Social media integration",
      "SEO optimization",
    ],
    challenges: [
      "Creating a CMS-less yet dynamic site",
      "Balancing simplicity with content density",
      "Designing an aesthetic reading experience",
    ],
    results: [
      "Received 1000+ monthly views",
      "Led to 3 inbound freelance projects",
      "Maintained 90+ Lighthouse scores",
    ],
    liveUrl: "https://harisalghifary.dev",
    githubUrl: "https://github.com/harisalghifary/portofolio-dev",
    year: "2025",
    category: "Personal",
    status: "completed",
    featured: true,
    image: "/projects/portofolio-dev.png",
  },
];

export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const project = projectData.find((p: any) => p.id === slug);
  if (!project) {
    return <ProjectNotFound />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm p-6">
        <div className="flex justify-between items-center">
          <Button
            asChild
            variant="ghost"
            className="text-white hover:text-green-400"
          >
            <a href="/#projects" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </a>
          </Button>
          <div className="flex space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-green-400"
            >
              <Github className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-green-400"
            >
              <ExternalLink className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <span className="text-green-400 text-sm font-medium">
              {project.year} • PROJECT
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold mt-4 mb-6">
              {project.title}
            </h1>
            <p className="text-2xl text-gray-400 mb-8">{project.subtitle}</p>
            <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mb-12">
            {project.technologies.map((tech: string, index: number) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800 text-green-400 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex space-x-4">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <Button className="bg-green-400 hover:bg-green-500 text-black">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live Site
              </Button>
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-800 bg-transparent"
              >
                <Github className="w-4 h-4 mr-2" />
                View Code
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="px-6 lg:px-20 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt={project.title}
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="px-6 lg:px-20 mb-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              {project.longDescription}
            </p>

            <h3 className="text-2xl font-bold mb-4">Key Features</h3>
            <ul className="space-y-2 mb-8">
              {project.features.map((feature: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-bold mb-4">Challenges & Solutions</h3>
            <ul className="space-y-2">
              {project.challenges.map((challenge: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-yellow-400 mr-3">•</span>
                  <span className="text-gray-300">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Results & Impact</h3>
            <div className="space-y-4">
              {project.results.map((result: string, index: number) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg">
                  <p className="text-green-400 font-medium">{result}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-20 pb-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Interested in working together?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and exciting
            projects. Let's create something amazing together.
          </p>
          <Button className="bg-green-400 hover:bg-green-500 text-black text-lg px-8 py-3">
            Get In Touch
          </Button>
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { slug: "haluka" },
    { slug: "personal-grammarly" },
    { slug: "finance-tracker" },
    { slug: "portofolio-dev" },
    { slug: "consulting-hris" },
  ];
}
