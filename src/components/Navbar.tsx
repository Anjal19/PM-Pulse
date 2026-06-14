"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/articles", label: "Articles" },
  { href: "/resources", label: "Resources" },
  { href: "/competitions", label: "Competitions" },
  { href: "/interview-prep", label: "Interview Prep" },
  { href: "/sessions", label: "Sessions" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-google-gray-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-google-blue flex items-center justify-center">
              <span className="text-white font-bold text-sm">PM</span>
            </div>
            <span className="text-google-dark font-semibold text-lg tracking-tight">
              PM<span className="text-google-blue">Pulse</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-google-blue-light text-google-blue"
                    : "text-google-gray hover:bg-google-gray-light hover:text-google-dark"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/sessions"
              className="px-5 py-2 rounded-full bg-google-blue text-white text-sm font-medium hover:bg-google-blue-dark transition-colors"
            >
              Book a Session
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-google-gray-light text-google-gray"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="md:hidden border-t border-google-gray-border bg-white">
          <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium ${
                  pathname === link.href
                    ? "bg-google-blue-light text-google-blue"
                    : "text-google-gray hover:bg-google-gray-light"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/sessions"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-4 py-3 rounded-lg bg-google-blue text-white text-sm font-medium text-center"
            >
              Book a Session
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
