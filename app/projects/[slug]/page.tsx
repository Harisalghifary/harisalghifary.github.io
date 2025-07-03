"use client";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projectData: Record<string, any> = {
  haluka: {
    title: "Haluka",
    subtitle: "Modern Boarding School Call Platform",
    description:
      "A comprehensive e-commerce solution built for MTI Electronics, featuring advanced product management, seamless checkout process, and responsive design optimized for all devices.",
    longDescription:
      "This project represents a complete overhaul of MTI Electronics' online presence. Built with Next.js for optimal performance and SEO, integrated with Payload CMS for easy content management, and styled with Tailwind CSS for a modern, responsive design. The platform includes features like advanced product filtering, wishlist functionality, secure payment integration, and an admin dashboard for inventory management.",
    technologies: [
      "Next.js",
      "Payload CMS",
      "Tailwind CSS",
      "TypeScript",
      "Stripe API",
    ],
    features: [
      "Responsive e-commerce platform",
      "Advanced product filtering and search",
      "Secure payment processing with Stripe",
      "Admin dashboard for inventory management",
      "SEO optimized with Next.js",
      "Content management with Payload CMS",
    ],
    challenges: [
      "Implementing complex product filtering system",
      "Optimizing performance for large product catalogs",
      "Creating seamless admin experience",
      "Ensuring mobile-first responsive design",
    ],
    results: [
      "40% increase in conversion rate",
      "60% improvement in page load speed",
      "25% reduction in bounce rate",
      "Streamlined admin workflow",
    ],
    liveUrl: "https://mti-electronics.com",
    githubUrl: "https://github.com/tajmirul/mti-electronics",
    year: "2024",
  },
  epikcart: {
    title: "Epikcart",
    subtitle: "Multi-language Shopping Platform",
    description:
      "A sophisticated shopping cart application with multi-language support, built using React and Redux for state management, featuring internationalization and seamless user experience.",
    longDescription:
      "Epikcart is a modern shopping platform designed to serve global audiences. The application leverages React for component-based architecture, Redux for predictable state management, and React i18n for comprehensive internationalization support. The platform supports multiple currencies, languages, and payment methods.",
    technologies: ["React", "Redux", "React i18n", "JavaScript", "CSS3"],
    features: [
      "Multi-language support (5+ languages)",
      "Redux state management",
      "Responsive shopping cart",
      "Currency conversion",
      "User authentication",
      "Order tracking system",
    ],
    challenges: [
      "Implementing robust internationalization",
      "Managing complex state with Redux",
      "Handling multiple currencies",
      "Creating intuitive UX across cultures",
    ],
    results: [
      "Expanded to 5 international markets",
      "30% increase in user engagement",
      "Reduced cart abandonment by 20%",
      "Improved user satisfaction scores",
    ],
    liveUrl: "https://epikcart.com",
    githubUrl: "https://github.com/tajmirul/epikcart",
    year: "2023",
  },
  "resume-roaster": {
    title: "Resume Roaster",
    subtitle: "AI-Powered Resume Analysis",
    description:
      "An innovative AI-powered tool that analyzes resumes using GPT-4, providing detailed feedback and improvement suggestions to help job seekers optimize their applications.",
    longDescription:
      "Resume Roaster revolutionizes the job application process by leveraging cutting-edge AI technology. Built with Next.js and integrated with GPT-4, the platform analyzes resumes comprehensively, providing actionable insights on content, formatting, keywords, and industry-specific recommendations. The PostgreSQL database stores user data and analysis history.",
    technologies: [
      "GPT-4",
      "Next.js",
      "PostgreSQL",
      "TypeScript",
      "Tailwind CSS",
    ],
    features: [
      "AI-powered resume analysis with GPT-4",
      "Detailed feedback and suggestions",
      "Industry-specific recommendations",
      "ATS compatibility checking",
      "Resume scoring system",
      "Export optimized resume versions",
    ],
    challenges: [
      "Integrating GPT-4 API effectively",
      "Creating accurate scoring algorithms",
      "Handling various resume formats",
      "Ensuring data privacy and security",
    ],
    results: [
      "85% of users improved their resume scores",
      "50% increase in interview callbacks",
      "10,000+ resumes analyzed",
      "4.8/5 user satisfaction rating",
    ],
    liveUrl: "https://resume-roaster.com",
    githubUrl: "https://github.com/tajmirul/resume-roaster",
    year: "2024",
  },
  "real-estate": {
    title: "Real Estate Platform",
    subtitle: "Property Management System",
    description:
      "A comprehensive real estate platform featuring property listings, advanced search functionality, and responsive design for seamless property browsing and management.",
    longDescription:
      "This real estate platform provides a complete solution for property management and discovery. Built with React.js and Redux for efficient state management, the platform offers advanced search filters, interactive maps, virtual tours, and comprehensive property details. The responsive design ensures optimal experience across all devices.",
    technologies: [
      "React.js",
      "Redux",
      "Tailwind CSS",
      "JavaScript",
      "Google Maps API",
    ],
    features: [
      "Advanced property search and filtering",
      "Interactive map integration",
      "Virtual property tours",
      "Responsive design for all devices",
      "Property comparison tool",
      "Agent contact system",
    ],
    challenges: [
      "Implementing complex search algorithms",
      "Integrating multiple map services",
      "Optimizing image loading for property galleries",
      "Creating intuitive filtering system",
    ],
    results: [
      "200% increase in property inquiries",
      "45% improvement in user engagement",
      "Reduced search time by 60%",
      "Enhanced mobile user experience",
    ],
    liveUrl: "https://realestate-platform.com",
    githubUrl: "https://github.com/tajmirul/real-estate",
    year: "2023",
  },
  "consulting-finance": {
    title: "Consulting Finance",
    subtitle: "Financial Consulting Website",
    description:
      "A professional consulting website with modern design and interactive financial calculators, built with HTML, CSS & SCSS, and JavaScript for optimal performance.",
    longDescription:
      "A sophisticated financial consulting website designed to establish credibility and provide value to potential clients. The site features interactive financial calculators, detailed service descriptions, client testimonials, and a modern, professional design. Built with vanilla technologies for maximum performance and compatibility.",
    technologies: ["HTML5", "CSS3 & SCSS", "JavaScript", "jQuery", "Bootstrap"],
    features: [
      "Interactive financial calculators",
      "Professional service showcase",
      "Client testimonials section",
      "Contact form with validation",
      "Responsive design",
      "SEO optimized structure",
    ],
    challenges: [
      "Creating complex financial calculators",
      "Ensuring cross-browser compatibility",
      "Optimizing for search engines",
      "Maintaining professional aesthetics",
    ],
    results: [
      "300% increase in consultation requests",
      "Improved search engine rankings",
      "90% reduction in bounce rate",
      "Enhanced professional credibility",
    ],
    liveUrl: "https://consulting-finance.com",
    githubUrl: "https://github.com/tajmirul/consulting-finance",
    year: "2022",
  },
};

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const project = projectData[slug];

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button
            onClick={() => {
              router.push("/#projects");
              setTimeout(() => {
                const projectsSection =
                  document.getElementById("projects-section");
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: "smooth" });
                }
              }, 100);
            }}
            className="bg-green-400 hover:bg-green-500 text-black"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm p-6">
        <div className="flex justify-between items-center">
          <Button
            variant="ghost"
            onClick={() => {
              {
                router.push("/#projects");
                // Alternative approach for smooth scrolling
                setTimeout(() => {
                  const projectsSection =
                    document.getElementById("projects-section");
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: "smooth" });
                  }
                }, 100);
              }
            }}
            className="text-white hover:text-green-400"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
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
            <Button className="bg-green-400 hover:bg-green-500 text-black">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Live Site
            </Button>
            <Button
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-800 bg-transparent"
            >
              <Github className="w-4 h-4 mr-2" />
              View Code
            </Button>
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
