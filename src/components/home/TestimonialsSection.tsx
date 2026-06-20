"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data/mock-data";

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <Section bg="void" className="!pt-0">
      <Container size="narrow">
        <SectionHeading
          label="Client Stories"
          title="Trusted by Discerning Clients"
          align="center"
          className="mb-10 md:mb-12"
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={t.id}
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <div className="relative w-20 h-20 mx-auto mb-8">
              <Image
                src={t.avatar}
                alt={t.name}
                fill
                className="rounded-full object-cover border-2 border-gold-true"
                sizes="80px"
              />
            </div>
            <blockquote className="font-accent text-xl md:text-2xl lg:text-3xl italic text-pearl leading-relaxed mb-6 max-w-3xl mx-auto">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <p className="font-display text-lg text-white">{t.name}</p>
            <p className="text-sm text-gold-warm mt-2">{t.deal}</p>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-2 mt-10 pb-14 md:pb-20">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${i === current ? "bg-gold-true w-6" : "bg-iron w-2"}`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
