"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80)`,
        }}
      />
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-void/30" />

      <div className="absolute top-28 md:top-32 left-6 md:left-12 font-mono text-xs text-ash">
        <span className="text-gold-warm">MUMBAI</span> · 28°C · 14:32 IST
      </div>

      <div className="relative z-10 max-w-container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 1, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="section-label mb-6"
        >
          Properties · 40+ Countries
        </motion.p>

        <motion.h1
          initial={{ opacity: 1, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-display text-5xl md:text-6xl lg:text-[7rem] italic text-white leading-none mb-6"
        >
          Find Where
          <br />
          You Belong.
        </motion.h1>

        <motion.p
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-mist text-lg md:text-xl max-w-xl mx-auto mb-10"
        >
          Curated luxury real estate for the world&apos;s most discerning buyers.
        </motion.p>

        <motion.div
          initial={{ opacity: 1, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/properties" className="btn-primary">
            Explore Properties
          </Link>
          <Link href="/contact?subject=tour" className="btn-secondary">
            Book Private Tour
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 py-4 border-t border-iron/30 bg-void/40 backdrop-blur-sm overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-12 text-sm text-ash font-mono">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="inline-flex gap-12">
              <span>847 Active Listings</span>
              <span className="text-gold-warm">·</span>
              <span>₹2.3Cr Avg. Price</span>
              <span className="text-gold-warm">·</span>
              <span>94% Client Satisfaction</span>
              <span className="text-gold-warm">·</span>
              <span>40+ Countries</span>
              <span className="text-gold-warm">·</span>
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-24 right-8 hidden md:flex flex-col items-center gap-2 text-ash">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-gold-true to-transparent animate-pulse" />
        <span className="text-[10px] uppercase tracking-ultra rotate-90 origin-center mt-8">Scroll</span>
      </div>
    </section>
  );
}
