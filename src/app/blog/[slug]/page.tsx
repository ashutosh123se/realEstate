import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { blogPosts } from "@/lib/data/mock-data";
import { NAV_OFFSET, PAGE_BOTTOM } from "@/lib/layout/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  return { title: post?.title ?? "Article" };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article style={{ paddingTop: NAV_OFFSET }}>
      <div className="relative h-64 md:h-80 lg:h-96">
        <Image src={post.image} alt={post.title} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-void/60" />
      </div>
      <Container size="narrow" className={`py-12 md:py-16 ${PAGE_BOTTOM}`}>
        <span className="tag-featured">{post.category}</span>
        <h1 className="font-display text-4xl md:text-5xl text-white mt-4 mb-6 leading-tight">{post.title}</h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ash mb-12 pb-8 border-b border-iron">
          <Image src={post.authorAvatar} alt={post.author} width={40} height={40} className="rounded-full" />
          <span>{post.author}</span>
          <span>·</span>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime} min read</span>
        </div>
        <div className="text-mist leading-relaxed space-y-6 text-base md:text-lg">
          <p className="font-accent text-xl md:text-2xl italic text-pearl">{post.excerpt}</p>
          <p>The luxury real estate landscape continues to evolve at an unprecedented pace. High-net-worth individuals are increasingly seeking properties that offer not just space and location, but a complete lifestyle ecosystem.</p>
          <p>Market data from the past quarter reveals strong demand in gateway cities, with Mumbai, Dubai, and Singapore leading transaction volumes. Premium segments above ₹5 Cr in India have seen 18% year-over-year growth.</p>
          <p>For buyers navigating this market, the key is partnering with advisors who combine local expertise with global perspective — understanding not just square footage and price per sqft, but the intangible value of neighborhood, architecture, and future appreciation potential.</p>
        </div>
        <div className="mt-16 glass-panel rounded-xl p-8 md:p-10 text-center border border-iron">
          <h2 className="font-display text-2xl md:text-3xl text-white mb-3">Ready to explore luxury properties?</h2>
          <p className="text-ash text-sm md:text-base mb-6">Browse our curated collection of exceptional homes worldwide.</p>
          <Link href="/properties" className="btn-primary">Browse Properties</Link>
        </div>
      </Container>
    </article>
  );
}
