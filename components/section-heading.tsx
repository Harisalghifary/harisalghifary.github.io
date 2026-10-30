import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  index: string;
  label: string;
  title?: string;
  description?: string;
  className?: string;
}

export default function SectionHeading({
  index,
  label,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 lg:mb-14", className)}>
      <div className="flex items-center gap-3 text-caption-sm uppercase tracking-[0.18em] text-muted-foreground">
        <span className="text-brand">{index}</span>
        <span className="h-px w-6 bg-border" aria-hidden="true" />
        <span>{label}</span>
      </div>

      {title ? (
        <h2 className="mt-5 max-w-3xl text-h1 font-medium text-foreground">
          {title}
        </h2>
      ) : null}

      {description ? (
        <p className="mt-4 max-w-xl text-body text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  );
}