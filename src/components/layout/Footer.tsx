import Link from "next/link";
import { Globe, Link2, Mail, Share2, Rss } from "lucide-react";
import { Container } from "@/components/layout/Container";

const footerLinks = {
  Properties: [
    { label: "Buy", href: "/properties?type=buy" },
    { label: "Rent", href: "/properties?type=rent" },
    { label: "New Projects", href: "/new-projects" },
    { label: "Commercial", href: "/commercial" },
    { label: "Virtual Tours", href: "/virtual-tours" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Agents", href: "/agents" },
    { label: "Careers", href: "/contact?subject=careers" },
    { label: "Press", href: "/contact?subject=press" },
  ],
  Resources: [
    { label: "Blog", href: "/blog" },
    { label: "Area Guides", href: "/area/bandra-west-mumbai" },
    { label: "Home Loans", href: "/home-loans" },
    { label: "NRI Services", href: "/nri-services" },
    { label: "Valuation", href: "/valuation" },
  ],
  Contact: [
    { label: "Contact Us", href: "/contact" },
    { label: "Schedule Tour", href: "/contact?subject=tour" },
    { label: "Sell Property", href: "/sell" },
    { label: "Support", href: "/contact?subject=support" },
  ],
};

const socialLinks = [
  { icon: Globe, href: "#", label: "Instagram" },
  { icon: Link2, href: "#", label: "LinkedIn" },
  { icon: Rss, href: "#", label: "Twitter" },
  { icon: Share2, href: "#", label: "Facebook" },
  { icon: Mail, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-obsidian border-t border-iron pt-14 md:pt-20">
      <Container className="pb-16 md:pb-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          <div className="lg:col-span-4 xl:col-span-3">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 shrink-0">
                <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
                  <path d="M16 2L30 16L16 30L2 16L16 2Z" stroke="#C49A28" strokeWidth="1.5" fill="rgba(196,154,40,0.1)" />
                  <path d="M16 8L24 16L16 24L8 16L16 8Z" fill="#C49A28" />
                </svg>
              </div>
              <span className="font-display text-xl font-semibold text-white">LUXE REALTY</span>
            </Link>
            <p className="text-ash text-sm leading-relaxed mb-6 max-w-xs">
              Where Architecture Meets Desire. Curated luxury real estate for the world&apos;s most discerning buyers.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-iron flex items-center justify-center text-ash hover:text-gold-warm hover:border-gold-true transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-10 md:grid-cols-4 lg:col-span-8 xl:col-span-9 lg:gap-10 xl:gap-12">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="min-w-0">
                <h4 className="text-xs font-semibold uppercase tracking-widest text-pearl mb-4">
                  {title}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-ash hover:text-gold-warm transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 md:mt-16 pt-8 border-t border-iron flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-smoke text-center md:text-left">
            © {new Date().getFullYear()} LUXE REALTY. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-xs text-smoke">
            <Link href="#" className="hover:text-ash transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-ash transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-ash transition-colors">Cookie Policy</Link>
            <button type="button" className="hover:text-ash transition-colors flex items-center gap-1">
              🌐 English
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
