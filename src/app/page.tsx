"use client";

import { motion } from "framer-motion";
import { userData } from "@/lib/data";
import { Github, Linkedin, Mail, ExternalLink, Briefcase, Cpu, GraduationCap } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-8 md:px-12 lg:px-24">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center pt-20 pb-12 md:pt-32 md:pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-3 py-1 md:px-4 md:py-1.5 text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase border rounded-full glass-panel border-white/10 text-primary mb-6 inline-block">
            {userData.personal_info.professional_title}
          </span>
          <h1 className="mt-4 text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-gradient leading-[1.1]">
            Orchestrating <br className="hidden sm:block" /> Intelligence.
          </h1>
          <p className="max-w-xl md:max-w-3xl mx-auto mt-6 md:mt-10 text-lg md:text-2xl text-white/50 leading-relaxed font-light">
            Building autonomous <span className="text-white/90 font-medium">AI Agent workflows</span> and 
            decentralized systems at the intersection of scale and innovation. 
            <span className="text-primary font-bold"> Ex-ByteDance</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 mt-12 md:mt-16 w-full">
            <a href={userData.personal_info.social_profiles.linkedin} target="_blank" className="w-full sm:w-auto px-8 py-4 bg-primary text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-2">
              <Linkedin size={20} /> Let's Connect
            </a>
            <div className="flex gap-4 items-center">
              <a href={userData.personal_info.social_profiles.github} target="_blank" className="p-4 transition-colors rounded-full glass-card hover:text-primary">
                <Github size={24} />
              </a>
              <a href={`mailto:${userData.personal_info.email}`} className="p-4 transition-colors rounded-full glass-card hover:text-primary">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Brands / Social Proof Bar */}
      <section className="py-12 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-[10px] uppercase tracking-[0.3em] text-white/20 mb-8">Trusted by Global Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {userData.brands.map((brand) => (
              <span key={brand} className="text-xl md:text-3xl font-black tracking-tighter text-white hover:text-primary cursor-default transition-colors">
                {brand.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {userData.impact_highlights.map((impact, index) => (
              <motion.div
                key={impact.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-10 rounded-[2.5rem] glass-card group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Cpu size={80} />
                </div>
                <p className="text-primary font-bold text-5xl mb-2 tracking-tighter">{impact.value}</p>
                <h3 className="text-lg font-bold text-white mb-2">{impact.label}</h3>
                <p className="text-xs uppercase tracking-widest text-white/30 mb-4">{impact.metric}</p>
                <p className="text-sm text-white/50 leading-relaxed">{impact.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Cpu className="text-primary" />
            <h2 className="text-3xl font-bold tracking-tight">Core Competencies</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(userData.core_skills).map(([category, skills], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl glass-card"
              >
                <h3 className="mb-4 text-sm font-semibold tracking-widest uppercase text-white/40">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill: string) => (
                    <span key={skill} className="px-2 py-1 text-xs font-medium rounded-md bg-white/5 border border-white/10">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Briefcase className="text-primary" />
            <h2 className="text-3xl font-bold tracking-tight">Professional Journey</h2>
          </div>
          
          <div className="space-y-8">
            {userData.work_experience.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 md:p-8 rounded-2xl glass-card flex flex-col md:flex-row gap-6 md:gap-8"
              >
                <div className="md:w-1/3">
                  <h3 className="text-xl font-bold">{exp.company}</h3>
                  <p className="text-primary font-medium">{exp.role}</p>
                  <p className="mt-2 text-sm text-white/40">{exp.duration}</p>
                  <p className="text-xs text-white/30">{exp.location}</p>
                </div>
                <div className="md:w-2/3">
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-white/70 leading-relaxed flex gap-3">
                        <span className="text-primary mt-1.5 h-1 w-1 rounded-full bg-primary flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 lg:pb-40">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <ExternalLink className="text-primary" />
              <h2 className="text-3xl font-bold tracking-tight">Featured Work</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userData.projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl glass-card group cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-medium text-primary px-2 py-0.5 rounded bg-primary/10">
                    {project.category || "Project"}
                  </span>
                  <ExternalLink size={16} className="text-white/20 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.name}</h3>
                <p className="text-sm text-white/50 mb-4">{project.description}</p>
                {"tech" in project && (
                  <div className="flex flex-wrap gap-2">
                    {(project.tech as string[]).map(t => (
                      <span key={t} className="text-[10px] uppercase tracking-wider text-white/30 px-2 py-0.5 border border-white/5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-white/20 text-sm">
        <p>© 2026 {userData.personal_info.full_name}. Built with Precision.</p>
      </footer>
    </main>
  );
}
