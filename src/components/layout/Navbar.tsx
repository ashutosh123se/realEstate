"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";

const navLinks = [
  { href: "/properties", label: "Properties" },
  { href: "/new-projects", label: "New Projects" },
  { href: "/agents", label: "Agents" },
  { href: "/commercial", label: "Commercial" },
  { href: "/blog", label: "Insights" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-4 md:top-5 left-0 right-0 z-nav h-[72px] px-4 md:px-6 lg:px-8 transition-all duration-300",
        scrolled
          ? "md:top-4"
          : ""
      )}
    >
      <nav
        aria-label="Main navigation"
        className={cn(
          "h-full transition-all duration-300",
          scrolled
            ? "rounded-lg border border-iron/80 bg-void/95 backdrop-blur-[24px] shadow-xl"
            : "rounded-lg bg-transparent"
        )}
      >
        <Container className="h-full !px-6 lg:!px-8">
          <div className="grid h-full grid-cols-[auto_1fr_auto] items-center gap-4 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-8">
            <Link href="/" className="flex items-center gap-3 group shrink-0 lg:justify-self-start">
              <div className="w-8 h-8 relative shrink-0">
                <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
                  <path d="M16 2L30 16L16 30L2 16L16 2Z" stroke="#C49A28" strokeWidth="1.5" fill="rgba(196,154,40,0.1)" />
                  <path d="M16 8L24 16L16 24L8 16L16 8Z" fill="#C49A28" />
                </svg>
              </div>
              <span className="font-display text-lg font-semibold tracking-wide text-white group-hover:text-gold-warm transition-colors">
                LUXE REALTY
              </span>
            </Link>

            <div className="hidden lg:flex items-center justify-center gap-x-8 xl:gap-x-10">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="nav-link">
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center justify-end gap-2 lg:gap-3 lg:justify-self-end">
              <div className="hidden lg:flex items-center gap-1 xl:gap-2">
                <button type="button" className="nav-utility">
                  <Globe className="w-4 h-4 shrink-0" />
                  EN
                  <ChevronDown className="w-3.5 h-3.5 shrink-0 opacity-70" />
                </button>
                <span className="hidden xl:block h-5 w-px bg-iron/80" aria-hidden />
                <button type="button" className="nav-utility">
                  ₹ INR
                </button>
                <Link
                  href="/dashboard"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-iron bg-graphite text-ash transition-all hover:border-gold-true hover:text-gold-warm"
                  aria-label="Account dashboard"
                >
                  <span className="text-xs font-medium">U</span>
                </Link>
                <Link href="/sell" className="btn-primary nav-cta">
                  List Property
                </Link>
              </div>

              <button
                type="button"
                className="lg:hidden text-pearl p-2 -mr-2"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </Container>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden absolute top-[calc(100%+0.5rem)] left-4 right-4 md:left-6 md:right-6 lg:left-8 lg:right-8 rounded-lg bg-obsidian/98 backdrop-blur-xl border border-iron py-6 px-6 shadow-xl">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-pearl text-base font-medium py-3 border-b border-iron/40 last:border-0"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-5 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <button type="button" className="nav-utility flex-1 justify-center">
                  <Globe className="w-4 h-4" />
                  EN
                </button>
                <button type="button" className="nav-utility flex-1 justify-center">
                  ₹ INR
                </button>
              </div>
              <Link href="/sell" className="btn-primary text-center" onClick={() => setMobileOpen(false)}>
                List Property
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
