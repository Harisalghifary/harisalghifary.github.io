"use client";

import { ExternalLink, Github, Cpu, Rocket, BarChart3, Layers } from "lucide-react";
import { userData } from "@/lib/data";

interface ProjectDetailsProps {
  id: string;
}

export default function ProjectDetails({ id }: ProjectDetailsProps) {
  const project = userData.projects.find((p) => p.id === id);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 text-primary mb-4">
          <Rocket size={24} />
          <span className="text-sm font-bold tracking-widest uppercase">{project.category}</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
          {project.name}
        </h2>
        <p className="mt-6 text-xl text-white/60 font-light leading-relaxed max-w-3xl">
          {project.longDescription}
        </p>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Architecture */}
        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
          <div className="flex items-center gap-3 text-white/40 mb-4">
            <Layers size={20} />
            <h3 className="text-sm font-bold uppercase tracking-widest">Architecture</h3>
          </div>
          <p className="text-white/70 leading-relaxed">
            {project.architecture}
          </p>
        </div>

        {/* Impact */}
        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
          <div className="flex items-center gap-3 text-primary mb-4">
            <BarChart3 size={20} />
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary/80">Business Impact</h3>
          </div>
          <p className="text-white/70 leading-relaxed font-medium">
            {project.impact}
          </p>
        </div>
      </div>

      {/* Stack & Links */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-white/5">
        <div className="flex flex-wrap gap-2">
          {project.tech_stack.map((tech) => (
            <span key={tech} className="px-4 py-2 text-xs font-bold tracking-widest uppercase rounded-full bg-white/5 border border-white/10 text-white/40">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-4 w-full md:w-auto">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-full glass-panel hover:text-primary transition-colors text-sm font-bold uppercase tracking-wider"
            >
              <Github size={18} /> Source Code
            </a>
          )}
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-black hover:scale-105 transition-transform text-sm font-bold uppercase tracking-wider"
            >
              <ExternalLink size={18} /> Launch Demo
            </a>
          )}
          {!project.demoUrl && project.id === 'ai-recon' && (
             <a 
             href={`mailto:${userData.personal_info.email}`}
             className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-black hover:scale-105 transition-transform text-sm font-bold uppercase tracking-wider"
           >
             Request Demo
           </a>
          )}
        </div>
      </div>
    </div>
  );
}
