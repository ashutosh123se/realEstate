import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { PageContent } from "@/components/layout/PageContent";
import { blogPosts } from "@/lib/data/mock-data";

export const metadata: Metadata = {
  title: "Real Estate Insights",
  description: "Market trends, buying guides, investment strategies, and luxury living insights.",
};

const categories = ["All", "Market Trends", "Buying Guide", "Investment", "Legal", "NRI", "Design & Interiors", "Sustainability"];

export default function BlogPage() {
  const featured = blogPosts[0];

  return (
    <>
      <PageHeader label="Insights" title="Real Estate Insights" description="Authority content on luxury markets, investment, and the art of fine living." />
      <PageContent>
        <div className="content-stack pt-10 md:pt-12">
          <Link href={`/blog/${featured.slug}`} className="block relative h-72 md:h-96 rounded-xl overflow-hidden group">
            <Image src={featured.image} alt={featured.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="1200px" />
            <div className="absolute inset-0 gradient-card-overlay" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <span className="tag-featured">{featured.category}</span>
              <h2 className="font-display text-2xl md:text-4xl text-white mt-4 max-w-3xl">{featured.title}</h2>
              <p className="text-mist mt-2 max-w-xl text-sm md:text-base">{featured.excerpt}</p>
            </div>
          </Link>

          <div className="flex flex-wrap gap-2">
            {categories.map((c, i) => (
              <button key={c} type="button" className={`px-4 py-2 text-xs uppercase tracking-wider rounded-full border ${i === 0 ? "border-gold-true text-gold-warm bg-gold-alpha10" : "border-iron text-ash"}`}>
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
                <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="400px" />
                </div>
                <span className="tag-new !text-[9px]">{post.category}</span>
                <h3 className="font-display text-xl text-white mt-2 group-hover:text-gold-warm transition-colors line-clamp-2">{post.title}</h3>
                <p className="text-sm text-ash mt-2 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center gap-3 mt-4 text-xs text-smoke">
                  <Image src={post.authorAvatar} alt="" width={24} height={24} className="rounded-full" />
                  <span>{post.author}</span>
                  <span>·</span>
                  <span>{post.readTime} min</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </PageContent>
    </>
  );
}
