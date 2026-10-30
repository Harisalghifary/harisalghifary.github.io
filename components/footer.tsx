import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Harisalghifary",
    Icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/harisalghifary/",
    Icon: Linkedin,
  },
  {
    label: "X",
    href: "https://x.com/Harisalghifary",
    Icon: Twitter,
  },
];

const nav = [
  { href: "/projects", label: "Work" },
  { href: "/blog", label: "Writing" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2.5">
          <span
            className="h-1.5 w-1.5 rounded-full bg-brand"
            aria-hidden="true"
          />
          <span className="text-caption text-muted-foreground">
            © {new Date().getFullYear()} Haris Salman Al Ghifary
          </span>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-caption text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-200 hover:border-white/20 hover:text-foreground"
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}