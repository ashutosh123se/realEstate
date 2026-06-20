"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CollectionCardItem {
  id: string;
  title: string;
  propertyCount: number;
  image: string;
  slug: string;
}

interface CollectionCardProps {
  collection: CollectionCardItem;
  className?: string;
}

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80";

export function CollectionCard({ collection, className }: CollectionCardProps) {
  const [imgError, setImgError] = useState(false);
  const imageSrc = imgError ? FALLBACK_IMAGE : collection.image;

  return (
    <Link
      href={`/properties?collection=${collection.slug}`}
      className={cn(
        "group relative block w-full h-full min-h-[320px] sm:min-h-[360px] lg:min-h-[420px] overflow-hidden rounded-lg border border-iron bg-slate",
        "transition-all duration-300 hover:border-gold-true/40 hover:shadow-gold",
        className
      )}
    >
      <Image
        src={imageSrc}
        alt={collection.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        onError={() => setImgError(true)}
      />
      <div className="absolute inset-0 gradient-card-overlay" />
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <p className="text-[11px] font-medium text-gold-warm uppercase tracking-widest mb-2">
          {collection.propertyCount} Properties
        </p>
        <h3 className="font-display text-xl md:text-2xl text-white mb-3 leading-snug line-clamp-2">
          {collection.title}
        </h3>
        <span className="inline-flex items-center gap-1 text-sm text-pearl group-hover:text-gold-warm transition-colors w-fit">
          Explore <ArrowUpRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}
