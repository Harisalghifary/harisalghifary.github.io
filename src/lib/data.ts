export const userData = {
  personal_info: {
    full_name: "Haris Salman Al Ghifary",
    professional_title: "Full-stack Engineer & Web3 Dev",
    email: "haris.solo68@gmail.com",
    phone: "+62 81227993475",
    location: "Indonesia",
    education: {
      institution: "Bandung Institute of Technology (ITB)",
      degree: "BS in Informatics Engineering",
      graduation_date: "October 2021"
    },
    social_profiles: {
      github: "https://github.com/harisalghifary",
      linkedin: "https://linkedin.com/in/harisalghifary"
    }
  },
  about_me: "Full-stack engineer specializing in AI Orchestration (LangGraph) and Web3 development. Ex-ByteDance, now operating as a freelance consultant focused on building autonomous agentic workflows and decentralized systems that scale.",
  core_skills: {
    languages: ["Go", "TypeScript", "Python", "PHP Laravel", "Solidity", "C#"],
    technologies: ["React", "Next.js", "Flutter", "Git", "Docker", "Ansible", "Viem"],
    infrastructure: ["AWS", "PostgreSQL", "MongoDB", "Redis", "Message Queue", "WebSocket", "GraphQL", "RPC"],
    specializations: ["System Architecture", "Performance Monitoring", "Microservices", "TDD", "Real-time Systems"]
  },
  work_experience: [
    {
      company: "Freelance / Independent",
      role: "Web3 Dev & AI Architect",
      duration: "Dec 2024 – Present",
      location: "Remote",
      achievements: [
        "Building AI orchestration layers using LangGraph and Agentic AI patterns.",
        "Developing Web3 protocols and DeFi yield optimization strategies.",
        "Providing technical consultancy for high-scale startups on system architecture."
      ]
    },
    {
      company: "Ex-ByteDance",
      role: "Software Engineer",
      duration: "June 2023 – Present",
      location: "South East Asia",
      achievements: [
        "Engineered an E2E sorting station reducing daily verification time from 4h to 2.5h (18% boost in on-time delivery).",
        "Increased COD conversion by 25% via a WhatsApp-integrated order confirmation flow.",
        "Optimized reconciliation pipelines with sleep-and-batching algorithms, processing 1M+ data points 16x faster.",
        "Streamlined workflows via RatesV2 and COD settlement APIs, reducing support tickets by 30%."
      ]
    },
    {
      company: "Belajarplus",
      role: "Software Engineer",
      duration: "August 2022 – May 2023",
      location: "Surakarta, Indonesia",
      achievements: [
        "Architected a multi-tenant backend platform for 100+ schools.",
        "Reduced backend error rates by 55% through automated testing and coding conventions.",
        "Improved on-time feature delivery by 30% through agile leadership.",
        "Mentored junior developers in TDD and system design."
      ]
    },
    {
      company: "Resolv",
      role: "Software Engineer",
      duration: "August 2021 – September 2022",
      location: "Remote",
      achievements: [
        "Developed a double-entry accounting-based tokenomics system in Node.js.",
        "Reduced question response latency by 80% using Redis and query optimization.",
        "Led migration from monolith to Docker-containerized microservices.",
        "Architected a low-latency WebSocket chat system for student-tutor sessions."
      ]
    },
    {
      company: "ITB",
      role: "Network Administrator",
      duration: "Oct 2019 – Oct 2021",
      location: "Bandung, Indonesia",
      achievements: [
        "Maintained 99.9% uptime for 100+ Linux desktops and 20+ KVM virtual machines.",
        "Automated provisioning with Ansible, cutting setup time by 70%.",
        "Improved I/O throughput by 25% through kernel parameter optimization."
      ]
    }
  ],
  impact_highlights: [
    { label: "AI Orchestration", value: "LangGraph", metric: "Agentic Flows", description: "Building complex autonomous workflows and agentic AI systems." },
    { label: "Web3/DeFi Dev", value: "Smart Contracts", metric: "Protocol Design", description: "Designing and optimizing decentralized finance protocols." },
    { label: "Systems Uptime", value: "99.9%", metric: "High Availability", description: "Maintaining critical infrastructure for ITB and startups." },
    { label: "On-time Delivery", value: "+18%", metric: "Efficiency Boost", description: "E2E sorting station engineering at ByteDance." }
  ],
  brands: ["ByteDance", "BelajarPlus", "Resolv", "ITB", "Haloka"],
  projects: [
    { 
      id: "auction-live",
      name: "Auction Live", 
      category: "Real-time Systems",
      tech_stack: ["WebSocket", "Node.js", "Redis", "Next.js"],
      description: "Real-time auction platform with low-latency bidding and live state sync.",
      longDescription: "Architected a high-concurrency auction engine using WebSockets and Redis for sub-100ms state propagation. Implemented anti-sniping logic and automated bid increments.",
      impact: "Handled 5,000+ concurrent bidders with zero latency spikes.",
      architecture: "Event-driven architecture with a distributed Redis pub/sub layer for real-time updates.",
      githubUrl: "https://github.com/harisalghifary",
      demoUrl: "https://auction-live-demo.com"
    },
    { 
      id: "dex",
      name: "DEX Protocol", 
      category: "Web3 / DeFi",
      tech_stack: ["Solidity", "Blockchain", "Hardhat", "Ethers.js"],
      description: "Decentralized exchange implementation with automated market maker (AMM) logic.",
      longDescription: "Developed and audited smart contracts for a custom AMM protocol. Focused on minimizing slippage and optimizing gas consumption for high-frequency swaps.",
      impact: "Secured $500k+ in testnet volume with optimized gas overhead.",
      architecture: "Non-custodial pool architecture with dynamic fee structures and flash-loan protection.",
      githubUrl: "https://github.com/harisalghifary"
    },
    { 
      id: "haloka",
      name: "Haloka", 
      category: "Enterprise",
      tech_stack: ["Golang", "PostgreSQL", "React"],
      description: "High-performance productivity system for team collaboration and task orchestration.",
      longDescription: "Built a multi-tenant backend in Golang to handle complex organizational hierarchies and real-time task sync. Implemented strict RBAC and granular audit logging.",
      impact: "Reduced task-creation latency by 40% globally.",
      architecture: "Microservices-based approach with a centralized gRPC orchestration layer.",
      demoUrl: "https://haloka.com"
    },
    { 
      id: "wedding",
      name: "Wedding Invitation", 
      category: "Web App",
      tech_stack: ["Next.js", "Framer Motion", "Tailwind"],
      description: "Aesthetic and interactive PWA wedding invitation with real-time RSVPs.",
      longDescription: "Created a premium digital experience with high-end animations and integrated RSVP management. Optimized for mobile-first interactions and PWA performance.",
      impact: "5,000+ active users with 99.9% conversion on RSVP flow.",
      architecture: "Serverless architecture using Next.js API routes and a real-time database listener.",
      demoUrl: "https://wedding-demo.com"
    }
  ]
};
