import { useState } from "react";
import { useRouter } from "next/navigation";
import { Github, ExternalLink } from "lucide-react"; // adjust based on your icon import path

interface Project {
  id: string;
  name: string;
  stack: string[];
}

interface ProjectItemProps {
  number: string;
  name: string;
  techs: string[];
  projectId: string;
}

const projects: Project[] = [
  {
    id: "01",
    name: "Haluka",
    stack: ["Next.js", "Payload CMS", "Tailwind CSS"],
  },
  {
    id: "02",
    name: "Personal Grammarly",
    stack: ["React", "GPT-4", "Node.js"],
  },
  {
    id: "03",
    name: "Finance Tracker",
    stack: ["Next.js", "OpenAI API", "Supabase"],
  },
  {
    id: "04",
    name: "BeaconDEX",
    stack: ["Solidity", "Next.js", "Wagmi", "RainbowKit"],
  },
  {
    id: "05",
    name: "Consulting HRIS",
    stack: ["Laravel", "Blade", "Tailwind CSS"],
  },
  {
    id: "06",
    name: "Portofolio DEV",
    stack: ["Next.js", "TypeScript", "Framer Motion"],
  },
];

function getProjectDescription(name: string): string {
  switch (name) {
    case "Haluka":
      return "A boarding school management system for booth coordination and structured call scheduling.";
    case "Personal Grammarly":
      return "An AI-powered sentence corrector that personalizes grammar and tone suggestions, with support for Bahasa Indonesia.";
    case "Finance Tracker":
      return "A personal finance dashboard with AI insights for smarter budgeting and spending tracking.";
    case "BeaconDEX":
      return "A decentralized exchange prototype built for a hackathon, featuring permit-based meta transactions.";
    case "Consulting HRIS":
      return "A lightweight human resources system tailored for small businesses and consulting workflows.";
    case "Portofolio DEV":
      return "A personal developer portfolio showcasing projects, blogs, and open-source contributions in a clean interface.";
    default:
      return "Detailed project description here.";
  }
}

function ProjectItem({ number, name, techs, projectId }: ProjectItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  return (
    <div
      className="relative group w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => router.push(`/projects/${projectId}`)}
    >
      {/* <div className="inline-flex flex-col items-stretch w-fit space-y-5 transition-transform duration-300 group-hover:-translate-y-1"> */}
      <div className="cursor-pointer w-full group pb-2">
        <div className="flex items-start gap-2">
          <div className="text-gray-400 font-bold text-lg w-10">.{number}</div>
          {/* <p className="text-gray-500 font-bold text-lg w-10">.{number}</p> */}
          <div>
            <h3 className="text-white text-3xl font-extrabold transition-colors duration-300 group-hover:text-green-400">
              {name}
            </h3>
            <div className="flex gap-4 flex-wrap text-gray-400 mt-2 text-sm">
              {techs.map((tech, i) => (
                <span key={i} className="flex items-center gap-1">
                  {i !== 0 && (
                    <span className="w-1 h-1 bg-gray-400 rounded-full" />
                  )}
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Popup on hover */}
      <div
        className={`absolute left-full ml-4 top-1 -translate-y-1/2 
        w-[420px] p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-xl
        transition-all duration-300 transform z-10
        ${
          isHovered
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 translate-y-4 invisible"
        }`}
      >
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-white text-lg font-semibold">{name}</h4>
          <div className="flex space-x-2">
            <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg">
              <Github className="w-4 h-4 text-white" />
            </button>
            <button className="p-2 bg-green-400 hover:bg-green-500 rounded-lg">
              <ExternalLink className="w-4 h-4 text-black" />
            </button>
          </div>
        </div>
        <p className="text-gray-300 text-sm mb-3">
          {getProjectDescription(name)}
        </p>
        <div className="flex flex-wrap gap-2">
          {techs.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="mt-3 text-green-400 text-xs flex items-center">
          Click to view details <ExternalLink className="w-3 h-3 ml-1" />
        </p>
      </div>
    </div>
  );
}

export default function SelectedProjects() {
  return (
    <section id="projects" className="flex items-center px-6 lg:px-20 py-10">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-8 h-8 flex items-center justify-center">
            <img src="/clover-svgrepo-com.svg" alt="icon" className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold">SELECTED PROJECTS</h2>
        </div>

        <div className="inline-flex flex-col items-stretch w-fit space-y-1">
          {projects.map((project) => (
            <ProjectItem
              key={project.id}
              number={project.id}
              name={project.name}
              techs={project.stack}
              projectId={project.name.toLowerCase().replace(/\s+/g, "-")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
