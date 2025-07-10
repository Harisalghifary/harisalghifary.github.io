"use client";
import { X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const socialLinks = [
  { label: "Github", href: "https://github.com/yourusername" },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
  { label: "Facebook", href: "https://facebook.com/yourusername" },
];

const menuItems = [
  { label: "Home", color: "bg-yellow-400", href: "/#home" },
  { label: "About Me", color: "bg-blue-500", href: "/#about" },
  { label: "Experience", color: "bg-teal-400", href: "/#experience" },
  { label: "Projects", color: "bg-purple-500", href: "/#projects" },
  { label: "Blogs", color: "bg-green-400", href: "/blogs" },
];

export default function BurgerMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const containerRef = useRef(null);

  useEffect(() => {
    setOpen(false); // Close menu when route changes
  }, [pathname]);

  return (
    <div className="relative z-50" ref={containerRef}>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="fixed top-6 right-6 z-50 p-2 rounded bg-white/10 hover:bg-white/20 transition"
        aria-label="Toggle menu"
      >
        {open ? (
          <X className="w-6 h-3.5 text-white" />
        ) : (
          <>
            <span className="block w-6 h-0.5 bg-white mb-1" />
            <span className="block w-6 h-0.5 bg-white mb-1" />
            <span className="block w-6 h-0.5 bg-white" />
          </>
        )}
      </button>

      {/* Dropdown Panel */}
      {open && (
        <div
          className="fixed top-16 right-6 w-[260px] bg-gray-900 text-white px-6 py-6 border border-gray-700 rounded-lg shadow-xl animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          {/* Content */}
          <div className="flex flex-col gap-8">
            {/* Social */}
            <div>
              <p className="text-sm text-gray-400 mb-2">SOCIAL</p>
              <ul className="space-y-2">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:text-green-400 transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Menu */}
            <div>
              <p className="text-sm text-gray-400 mb-2">MENU</p>
              <ul className="space-y-3">
                {menuItems.map((item) => (
                  <li key={item.label} className="flex items-center gap-2">
                    <span
                      className={`w-3 h-3 rounded-full ${item.color}`}
                      aria-hidden="true"
                    />
                    <Link
                      href={item.href}
                      className="hover:text-green-400 transition"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
