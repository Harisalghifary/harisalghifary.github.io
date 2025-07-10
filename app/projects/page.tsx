"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Calendar,
  ExternalLink,
  Github,
  Search,
  Filter,
} from "lucide-react";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  results: string[];
  liveUrl: string;
  githubUrl: string;
  year: string;
  category: string;
  status: "completed" | "in-progress" | "archived";
  featured: boolean;
  image: string;
}

export const projectsData: Project[] = [
  {
    id: "haluka",
    title: "Haluka",
    subtitle: "Boarding School Management System",
    description:
      "An internal system to streamline booth scheduling and student calling in boarding schools.",
    longDescription:
      "Haluka digitizes daily boarding school operations such as booth scheduling, student calling, and activity coordination. Built for efficiency and simplicity, it reduces administrative burdens and improves communication.",
    technologies: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "TypeScript",
      "Tailwind CSS",
    ],
    features: [
      "Booth and activity scheduling",
      "Automated student calling system",
      "Admin dashboard with analytics",
      "Student performance tracking",
      "Role-based access control",
    ],
    challenges: [
      "Real-time call queue management",
      "Preventing schedule overlap",
      "Data access security and control",
    ],
    results: [
      "60% reduction in admin workload",
      "Improved operational transparency",
      "Faster student response times",
    ],
    liveUrl: "https://haluka.app",
    githubUrl: "https://github.com/harisalghifary/haluka",
    year: "2024",
    category: "Education",
    status: "completed",
    featured: true,
    image: "/projects/haluka.png",
  },
  {
    id: "personal-grammarly",
    title: "Personal Grammarly",
    subtitle: "AI-Powered Grammar Enhancer",
    description:
      "Context-aware English & Bahasa grammar correction tool with personalized tone.",
    longDescription:
      "This AI-driven grammar assistant not only corrects grammatical errors but also improves clarity and tone based on user preference. Supports English and Bahasa Indonesia, making it ideal for bilingual users.",
    technologies: ["Next.js", "OpenAI API", "TypeScript", "Tailwind CSS"],
    features: [
      "Dual-language grammar support",
      "Tone-aware rewriting",
      "Instant suggestions",
      "User history tracking",
    ],
    challenges: [
      "Balancing formality and personalization",
      "Handling mixed-language inputs",
      "Latency with API calls",
    ],
    results: [
      "1500+ users improved clarity",
      "Positive user sentiment",
      "Expanded to Bahasa support",
    ],
    liveUrl: "https://personal-grammarly.app",
    githubUrl: "https://github.com/harisalghifary/personal-grammarly",
    year: "2024",
    category: "AI/ML",
    status: "completed",
    featured: true,
    image: "/projects/personal-grammarly.png",
  },
  {
    id: "finance-tracker",
    title: "Finance Tracker AI",
    subtitle: "AI Personal Finance Assistant",
    description:
      "A smart personal finance dashboard with spending insights and savings tips.",
    longDescription:
      "Helps users categorize expenses, monitor habits, and receive AI-based saving tips. Prioritizes user security and clear visuals to support better financial decision-making.",
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "OpenAI API",
      "Tailwind CSS",
    ],
    features: [
      "Automated expense categorization",
      "Spending analysis and alerts",
      "Budget planner",
      "AI-powered savings suggestions",
    ],
    challenges: [
      "Secure bank integration",
      "Accurate category mapping",
      "Personalized recommendations",
    ],
    results: [
      "15% average user savings/month",
      "High adoption in early beta",
      "Low churn rate",
    ],
    liveUrl: "https://financetracker.ai",
    githubUrl: "https://github.com/harisalghifary/finance-tracker-ai",
    year: "2024",
    category: "Finance",
    status: "in-progress",
    featured: true,
    image: "/projects/finance-tracker.png",
  },
  {
    id: "beacondex",
    title: "BeaconDEX",
    subtitle: "Hackathon DEX Project",
    description:
      "A simple, fast-deploy DEX for cross-token swapping with on-chain liquidity pools.",
    longDescription:
      "BeaconDEX is a decentralized exchange developed for a hackathon. It supports basic AMM operations, token swaps, and liquidity pool creation using Solidity and a minimal front-end.",
    technologies: ["Solidity", "Next.js", "Viem", "Ethers.js", "TypeScript"],
    features: [
      "On-chain token swaps",
      "Liquidity pool creation",
      "Slippage tolerance input",
      "Clean developer-first frontend",
    ],
    challenges: [
      "Building under 48 hours",
      "Gas optimization",
      "UI feedback synchronization",
    ],
    results: [
      "Fully demoed during hackathon",
      "Deployed to Base Sepolia",
      "Open sourced and forkable",
    ],
    liveUrl: "https://beacondex.xyz",
    githubUrl: "https://github.com/harisalghifary/beacondex",
    year: "2024",
    category: "Web3",
    status: "completed",
    featured: false,
    image: "/projects/beacondex.png",
  },
  {
    id: "consulting-hris",
    title: "Consulting HRIS",
    subtitle: "Lightweight HR Management System",
    description:
      "A custom HRIS built for a consulting firm's internal use, covering onboarding and payroll.",
    longDescription:
      "Consulting HRIS streamlines HR workflows like employee records, leave tracking, payroll summary, and approvals. Designed for internal use with a focus on usability and role-based control.",
    technologies: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
    features: [
      "Employee profile management",
      "Leave and attendance tracking",
      "Payroll report generation",
      "Access control and roles",
    ],
    challenges: [
      "Workflow customization per team",
      "Document automation",
      "Legacy browser compatibility",
    ],
    results: [
      "Onboarding time reduced by 50%",
      "90% of HR tasks automated",
      "Used across 3 consulting teams",
    ],
    liveUrl: "https://consulting-hris.com",
    githubUrl: "https://github.com/harisalghifary/consulting-hris",
    year: "2023",
    category: "HR Tech",
    status: "completed",
    featured: false,
    image: "/projects/hris.png",
  },
];

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedTech, setSelectedTech] = useState("");
  const router = useRouter();

  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "" || project.category === selectedCategory;
    const matchesStatus =
      selectedStatus === "" || project.status === selectedStatus;
    const matchesTech =
      selectedTech === "" || project.technologies.includes(selectedTech);

    return matchesSearch && matchesCategory && matchesStatus && matchesTech;
  });

  const categories = Array.from(
    new Set(projectsData.map((project) => project.category))
  );
  const statuses = Array.from(
    new Set(projectsData.map((project) => project.status))
  );
  const allTechnologies = Array.from(
    new Set(projectsData.flatMap((project) => project.technologies))
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500";
      case "in-progress":
        return "bg-yellow-500";
      case "archived":
        return "bg-gray-500";
      default:
        return "bg-blue-500";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "in-progress":
        return "In Progress";
      case "archived":
        return "Archived";
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
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
                window.open("https://github.com/harisalghifary", "_blank")
              }
              className="text-white hover:text-green-400"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="text-green-400">Projects</span> & Work
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive showcase of my development projects, from e-commerce
            platforms to AI-powered applications. Each project represents a
            unique challenge and innovative solution.
          </p>
          <div className="flex items-center justify-center space-x-8 mt-8 text-gray-400">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">
                {projectsData.length}
              </div>
              <div className="text-sm">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">
                {projectsData.filter((p) => p.status === "completed").length}
              </div>
              <div className="text-sm">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">
                {projectsData.filter((p) => p.featured).length}
              </div>
              <div className="text-sm">Featured</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="px-6 lg:px-20 mb-12">
        <div className="max-w-7xl mx-auto">
          {/* Search */}
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects, technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
              />
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="space-y-6">
            {/* Categories */}
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-3 flex items-center">
                <Filter className="w-4 h-4 mr-2" />
                Categories
              </h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory("")}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    selectedCategory === ""
                      ? "bg-green-400 text-black"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  All Categories
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      selectedCategory === category
                        ? "bg-green-400 text-black"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Status */}
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-3">Status</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedStatus("")}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    selectedStatus === ""
                      ? "bg-green-400 text-black"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  All Status
                </button>
                {statuses.map((status) => (
                  <button
                    key={status}
                    onClick={() => setSelectedStatus(status)}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      selectedStatus === status
                        ? "bg-green-400 text-black"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    {getStatusText(status)}
                  </button>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-3">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedTech("")}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    selectedTech === ""
                      ? "bg-green-400 text-black"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  All Technologies
                </button>
                {allTechnologies.slice(0, 10).map((tech) => (
                  <button
                    key={tech}
                    onClick={() => setSelectedTech(tech)}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      selectedTech === tech
                        ? "bg-green-400 text-black"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 lg:px-20 pb-20">
        <div className="max-w-7xl mx-auto">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-gray-400 mb-4">
                No projects found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">
                  {filteredProjects.length} Project
                  {filteredProjects.length !== 1 ? "s" : ""} Found
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    getStatusColor={getStatusColor}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

function ProjectCard({
  project,
  getStatusColor,
}: {
  project: Project;
  getStatusColor: (status: string) => string;
}) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/projects/${project.id}`);
  };

  return (
    <article
      className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-all duration-300 cursor-pointer group hover:scale-105"
      onClick={handleClick}
    >
      <div className="aspect-video overflow-hidden relative">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={600}
          height={400}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {project.featured && (
          <div className="absolute top-4 left-4 bg-green-400 text-black px-3 py-1 rounded-full text-xs font-bold">
            Featured
          </div>
        )}
        <div className="absolute top-4 right-4 flex space-x-2">
          <div
            className={`w-3 h-3 ${getStatusColor(project.status)} rounded-full`}
          ></div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
          <span className="bg-gray-700 px-2 py-1 rounded text-xs">
            {project.category}
          </span>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{project.year}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-3">{project.subtitle}</p>
        <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-gray-700 text-gray-400 text-xs rounded-full">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.liveUrl, "_blank");
              }}
              className="text-gray-400 hover:text-green-400 p-0"
            >
              <ExternalLink className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.githubUrl, "_blank");
              }}
              className="text-gray-400 hover:text-green-400 p-0"
            >
              <Github className="w-4 h-4" />
            </Button>
          </div>
          <span className="text-xs text-gray-500 capitalize">
            {project.status.replace("-", " ")}
          </span>
        </div>
      </div>
    </article>
  );
}
