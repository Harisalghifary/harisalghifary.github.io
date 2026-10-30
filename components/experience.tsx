const roles = [
  {
    company: "Confidential DeFi Protocol",
    role: "Web3 / Backend Engineer",
    period: "Aug 2025 — Aug 2026",
    note: "Built the off-chain side of a DeFi protocol: API, indexer, subgraph, Merkle server, and an SDK across 20+ protocols. Cut indexing time by 50%.",
  },
  {
    company: "ByteDance / GoTo Logistics",
    role: "Software Engineer",
    period: "Jun 2023 — Jun 2025",
    note: "Rebuilt reconciliation pipelines to process 1M+ records in under 3 hours (16× faster), and shipped a 3PL aggregator across 7+ partners.",
  },
  {
    company: "Belajarplus",
    role: "Software Engineer",
    period: "Aug 2021 — May 2023",
    note: "Multi-tenant backend for 100+ schools. Led two engineers, standardized conventions, and cut error rates by 55%.",
  },
  {
    company: "Resolv",
    role: "Software Engineer",
    period: "Dec 2020 — Aug 2021",
    note: "Split a legacy monolith into domain-driven services across 3 product lines, each with its own CI/CD pipeline.",
  },
];

export default function Experience() {
  return (
    <ol className="space-y-0">
      {roles.map((entry) => (
        <li
          key={`${entry.company}-${entry.period}`}
          className="grid gap-3 border-t border-border py-7 first:border-t-0 first:pt-0 sm:grid-cols-[1fr_auto] sm:gap-8"
        >
          <div>
            <div className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-full bg-brand"
                aria-hidden="true"
              />
              <p className="text-caption text-muted-foreground">
                {entry.company}
              </p>
            </div>
            <h3 className="mt-2 text-h4 font-medium text-foreground">
              {entry.role}
            </h3>
            <p className="mt-2 max-w-xl text-caption text-muted-foreground">
              {entry.note}
            </p>
          </div>
          <p className="text-caption text-muted-foreground sm:text-right">
            {entry.period}
          </p>
        </li>
      ))}
    </ol>
  );
}