const groups = [
  {
    label: "Interface",
    items: ["TypeScript", "React", "Next.js", "Vue.js", "Tailwind CSS", "Redux"],
  },
  {
    label: "Services",
    items: ["Go", "Node.js", "Python", "Laravel", "gRPC", "GraphQL"],
  },
  {
    label: "Data & Cloud",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Elasticsearch",
      "AWS",
      "GCP",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    label: "Chain & AI",
    items: [
      "Solidity",
      "EVM",
      "Wagmi / Viem",
      "The Graph",
      "LLM APIs",
      "RAG",
      "Vector DBs",
    ],
  },
];

export default function TechStack() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {groups.map((group) => (
        <div
          key={group.label}
          className="rounded-lg border border-border bg-surface p-6 transition-colors duration-300 hover:border-white/12"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-h4 font-medium text-foreground">
              {group.label}
            </h3>
            <span className="text-caption-sm tabular-nums text-muted-foreground">
              {String(group.items.length).padStart(2, "0")}
            </span>
          </div>

          <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5">
            {group.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-caption text-muted-foreground"
              >
                <span
                  className="h-1 w-1 shrink-0 rounded-full bg-brand/60"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}