"use client";

import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { blogPosts } from "@/lib/data/mock-data";

export function BlogSection() {
  return (
    <Section className="!pt-0">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-12">
          <SectionHeading label="Latest Insights" title="From the Blog" className="mb-0" />
          <Link href="/blog" className="btn-ghost shrink-0">View All →</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 pb-14 md:pb-20">
          {blogPosts.map((post, i) => (
            <Reveal key={post.id} delay={i * 0.1}>
              <article>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="400px"
                    />
                  </div>
                  <span className="tag-new !text-[9px]">{post.category}</span>
                  <h3 className="font-display text-xl text-white mt-3 mb-2 group-hover:text-gold-warm transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-ash line-clamp-2 mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-smoke">
                    <span>{post.author}</span>
                    <span>·</span>
                    <span>{post.readTime} min read</span>
                  </div>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
