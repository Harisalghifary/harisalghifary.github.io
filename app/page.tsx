"use client";
import { ExternalLink, Github, Menu, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SelectedProjects from "@/components/selected-project";
import Footer from "@/components/footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Background particles/dots effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Play className="w-6 h-6 text-white" />
          </div>
          <Button variant="ghost" size="icon" className="text-white">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 lg:px-20 pt-10">
        <div className="max-w-6xl mx-auto flex w-full items-start justify-between gap-10">
          {/* Left Content */}
          <div className="flex-1">
            <h1 className="text-6xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              <span className="text-green-500 block">FULLSTACK</span>
              <span className="text-white block pl-4">DEVELOPER</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-lg">
              Hi! I'm <span className="text-white font-semibold">Haris</span>, a
              Fullstack Developer with 4+ years of experience building
              high-performance, scalable, and responsive web solutions. I thrive
              on solving complex problems and turning ideas into functional,
              impactful products.
            </p>
            <Button
              onClick={() => {
                const footer = document.getElementById("footer");
                if (footer) {
                  footer.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-green-400 hover:bg-white text-black font-bold px-8 py-3 text-lg"
            >
              CONTACT ME
            </Button>
          </div>

          {/* Stats */}
          <div className="hidden lg:flex flex-col space-y-12 text-right">
            <div>
              <div className="text-4xl font-bold text-green-400">4+</div>
              <div className="text-gray-400">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400">10+</div>
              <div className="text-gray-400">Completed Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400">10K+</div>
              <div className="text-gray-400">Hours Worked</div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="flex items-center px-6 pt-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-thin leading-tight mb-16">
            I blend user-centered design with scalable backend systems to build
            intuitive, high-performance web solutions.
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gray-400 mb-8">This is me.</p>
              <h3 className="text-4xl lg:text-5xl font-bold mb-8">
                Hi, I'm Haris.
              </h3>
            </div>
            <div className="space-y-6 text-gray-300">
              <p>
                I'm a full-stack web developer who builds thoughtful,
                high-performance web experiences. I focus on crafting scalable,
                user-friendly solutions that align with both product goals and
                user needs—balancing clean design, performance, and technical
                precision to create real impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="flex items-center px-6 pt-10 lg:px-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex items-center space-x-4 mb-16">
            <div className="w-8 h-8 flex items-center justify-center">
              <img
                src="/clover-svgrepo-com.svg"
                alt="icon"
                className="w-6 h-6"
              />
            </div>
            <h2 className="text-2xl font-bold">MY STACK</h2>
          </div>

          <div className="space-y-16">
            {/* Left side - Categories */}
            <div className="flex gap-10 items-start">
              <div className="w-1/3">
                <h3 className="text-4xl lg:text-4xl font-bold text-gray-400 mb-8">
                  FRONTEND
                </h3>
              </div>
              <div className="w-2/3 grid grid-cols-3 gap-6 text-lg">
                <div className="flex items-center gap-3">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    className="w-6 h-6"
                  />
                  <span>JavaScript</span>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                    className="w-6 h-6"
                  />
                  <span>TypeScript</span>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    className="w-6 h-6"
                  />
                  <span>React</span>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg"
                    className="w-6 h-6 invert"
                  />
                  <span>Next.js</span>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                    className="w-6 h-6"
                  />
                  <span>Redux</span>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
                    className="w-6 h-6"
                  />
                  <span>Vue.js</span>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                    className="w-6 h-6"
                  />
                  <span>Tailwind CSS</span>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
                    className="w-6 h-6"
                  />
                  <span>Bootstrap</span>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                    className="w-6 h-6"
                  />
                  <span>SASS</span>
                </div>
              </div>
            </div>

            <section className="flex gap-10 items-start">
              <div className="w-1/3">
                <h3 className="text-4xl lg:text-4xl font-bold text-gray-400 mb-8">
                  BACKEND
                </h3>
              </div>
              <div className="w-2/3 grid grid-cols-3 gap-6 text-lg">
                {[
                  {
                    name: "Golang",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
                  },
                  {
                    name: "Python",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
                  },
                  {
                    name: "Node.js",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                  },
                  {
                    name: "Laravel",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
                  },
                  {
                    name: "Solidity",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg",
                  },
                  {
                    name: "Cosmos SDK",
                    icon: "https://cryptologos.cc/logos/cosmos-atom-logo.png?v=026",
                  },
                  {
                    name: "GraphQL",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
                  },
                  {
                    name: "GRPC",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grpc/grpc-original.svg",
                  },
                ].map((tech) => (
                  <div key={tech.name} className="flex items-center gap-3">
                    <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </section>
            <section className="flex gap-10 items-start">
              <div className="w-1/3">
                <h3 className="text-4xl lg:text-4xl font-bold text-gray-400 mb-8">
                  DATABASE
                </h3>
              </div>
              <div className="w-2/3 grid grid-cols-3 gap-6 text-lg">
                {[
                  {
                    name: "SQL",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
                  },
                  {
                    name: "PostgreSQL",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
                  },
                  {
                    name: "MongoDB",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                  },
                  {
                    name: "Firebase",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
                  },
                  {
                    name: "Elastic Search",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elasticsearch/elasticsearch-original.svg",
                  },
                ].map((db) => (
                  <div key={db.name} className="flex items-center gap-3">
                    <img src={db.icon} alt={db.name} className="w-6 h-6" />
                    <span>{db.name}</span>
                  </div>
                ))}
              </div>
            </section>
            <section className="flex gap-10 items-start">
              <div className="w-1/3">
                <h3 className="text-4xl lg:text-4xl font-bold text-gray-400 mb-8">
                  TOOLS
                </h3>
              </div>
              <div className="w-2/3 grid grid-cols-3 gap-6 text-lg">
                {[
                  {
                    name: "Git",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
                  },
                  {
                    name: "Docker",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
                  },
                  {
                    name: "AWS",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
                  },
                  {
                    name: "GCP",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
                  },
                  {
                    name: "Netlify",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
                  },
                  {
                    name: "Postman",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
                  },
                  {
                    name: "Ansible",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg",
                  },
                  {
                    name: "Figma",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
                  },
                  {
                    name: "Grafana",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg",
                  },
                  {
                    name: "Notion",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg",
                  },
                ].map((tool) => (
                  <div key={tool.name} className="flex items-center gap-3">
                    <img src={tool.icon} alt={tool.name} className="w-6 h-6" />
                    <span>{tool.name}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="flex items-center px-6 lg:px-20 pt-10">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-8 h-8 flex items-center justify-center">
              <img
                src="/clover-svgrepo-com.svg"
                alt="icon"
                className="w-6 h-6"
              />
            </div>
            <h2 className="text-2xl font-bold">MY EXPERIENCE</h2>
          </div>

          <div className="space-y-8">
            <ExperienceItem
              company="Bytedance"
              role="L4 Software Engineer"
              period="Jun 2023 - Present"
            />
            <ExperienceItem
              company="Belajarplus"
              role="Software Engineer"
              period="Aug 2021 - Jun 2023"
            />
            <ExperienceItem
              company="Resolv.id"
              role="Product Engineer"
              period="Dec 2020 - Dec 2021"
            />
            <ExperienceItem
              company="Bandung Institute of Technology"
              role="System Administrator"
              period="Dec 2019 - Oct 2021"
            />
          </div>
        </div>
      </section>

      <SelectedProjects />
      <Footer />
      <section className="flex items-center py-1 mb-2">
        <div className="flex items-center justify-center mx-auto w-fit text-gray-300">
          <p> Created With Passion by Haris Salman</p>
        </div>
      </section>
    </div>
  );
}

function ExperienceItem({
  company,
  role,
  period,
}: {
  company: string;
  role: string;
  period: string;
}) {
  return (
    <div>
      <p className="text-gray-400 text-xl mb-2">{company}</p>
      <h3 className="text-3xl lg:text-4xl font-bold mb-2">{role}</h3>
      <p className="text-gray-400 text-xl ">{period}</p>
    </div>
  );
}

function ProjectItem({
  number,
  name,
  techs,
  highlight = false,
  projectId,
}: {
  number: string;
  name: string;
  techs: string[];
  highlight?: boolean;
  projectId: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    router.push(`/projects/${projectId}`);
  };

  return (
    <div
      className="relative flex cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className="transition-transform duration-300 group-hover:-translate-y-2">
        <p className="text-gray-500 mb-2">{number}</p>
        <h3
          className={`text-3xl lg:text-4xl font-bold transition-colors duration-300 ${
            highlight
              ? "text-green-400"
              : "text-gray-400 group-hover:text-white"
          }`}
        >
          {name}
        </h3>
        <div className="flex flex-wrap gap-2">
          {techs.map((tech, index) => (
            <span
              key={index}
              className="text-gray-500 text-sm group-hover:text-gray-300 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Animated popup from below */}
      <div
        className={`absolute left-full ml-3 top-1/2 -translate-y-1/2 
              w-[420px] p-8 
              bg-gray-800 rounded-lg shadow-2xl border border-gray-700 
              transition-all duration-300 transform ${
                isHovered
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 translate-y-4 invisible"
              }`}
      >
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-xl font-bold text-white">{name}</h4>
          <div className="flex space-x-2">
            <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
              <Github className="w-4 h-4 text-white" />
            </button>
            <button className="p-2 bg-green-400 hover:bg-green-500 rounded-lg transition-colors">
              <ExternalLink className="w-4 h-4 text-black" />
            </button>
          </div>
        </div>
        <p className="text-gray-300 text-sm mb-4">
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
        <div className="mt-4 text-green-400 text-sm font-medium flex items-center">
          Click to view details
          <ExternalLink className="w-3 h-3 ml-1" />
        </div>
      </div>
    </div>
  );
}

function getProjectDescription(name: string): string {
  const descriptions: Record<string, string> = {
    "MTI Electronics":
      "A modern e-commerce platform for electronics with advanced product management and seamless user experience.",
    Epikcart:
      "Multi-language shopping cart application with Redux state management and internationalization support.",
    "Resume Roaster":
      "AI-powered resume analysis tool using GPT-4 to provide detailed feedback and improvement suggestions.",
    "Real Estate":
      "Comprehensive real estate platform with property listings, search functionality, and responsive design.",
    "Consulting Finance":
      "Professional consulting website with modern design and interactive financial calculators.",
  };
  return (
    descriptions[name] ||
    "Innovative web application built with modern technologies and best practices."
  );
}
