"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Heart, MapPin, Bed, Maximize } from "lucide-react";
import type { Property } from "@/types";
import { cn, formatPrice, formatArea } from "@/lib/utils";

interface PropertyCardProps {
  property: Property;
  className?: string;
  variant?: "grid" | "carousel";
}

function getBadges(property: Property): { label: string; className: string }[] {
  const badges: { label: string; className: string; priority: number }[] = [];

  if (property.status === "UNDER_OFFER") {
    badges.push({ label: "Under Offer", className: "tag-under-offer", priority: 1 });
  } else if (property.status === "SOLD") {
    badges.push({ label: "Sold", className: "tag-sold", priority: 1 });
  } else if (property.status === "NEW_LAUNCH") {
    badges.push({ label: "New", className: "tag-new", priority: 1 });
  } else if (property.isFeatured) {
    badges.push({ label: "Featured", className: "tag-featured", priority: 2 });
  }

  if (property.isExclusive) {
    badges.push({ label: "Exclusive", className: "tag-exclusive", priority: 3 });
  }
  if (property.isVerified) {
    badges.push({ label: "Verified", className: "tag-verified", priority: 4 });
  }

  return badges
    .sort((a, b) => a.priority - b.priority)
    .slice(0, 2)
    .map(({ label, className }) => ({ label, className }));
}

export function PropertyCard({ property, className, variant = "grid" }: PropertyCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [imgError, setImgError] = useState(false);

  const badges = getBadges(property);
  const fallbackImage = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80&auto=format&fit=crop";
  const primaryImage = imgError ? fallbackImage : property.images[0];

  return (
    <article
      className={cn(
        "group relative flex flex-col w-full h-full",
        "bg-graphite rounded-lg overflow-hidden border border-iron",
        "transition-all duration-300 hover:border-gold-true/40 hover:shadow-gold hover:-translate-y-1",
        variant === "carousel" ? "min-h-[520px]" : "min-h-[500px]",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/property/${property.slug}`} className="flex flex-col h-full">
        {/* Image — fixed height */}
        <div className="relative h-[260px] shrink-0 bg-slate overflow-hidden">
          <Image
            src={primaryImage}
            alt={property.title}
            fill
            className={cn(
              "object-cover transition-opacity duration-500",
              isHovered && property.images[1] && !imgError ? "opacity-0" : "opacity-100"
            )}
            sizes="(max-width: 768px) 100vw, 380px"
            onError={() => setImgError(true)}
          />
          {property.images[1] && !imgError && (
            <Image
              src={property.images[1]}
              alt=""
              fill
              className={cn(
                "object-cover transition-opacity duration-500",
                isHovered ? "opacity-100" : "opacity-0"
              )}
              sizes="(max-width: 768px) 100vw, 380px"
            />
          )}
          <div className="absolute inset-0 gradient-card-overlay pointer-events-none" />

          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 max-w-[70%]">
            {badges.map((badge) => (
              <span key={badge.label} className={badge.className}>
                {badge.label}
              </span>
            ))}
          </div>

          <button
            type="button"
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-void/70 backdrop-blur-sm flex items-center justify-center text-pearl hover:text-error transition-colors z-10"
            onClick={(e) => {
              e.preventDefault();
              setIsFavorite(!isFavorite);
            }}
            aria-label="Save property"
          >
            <Heart className={cn("w-4 h-4", isFavorite && "fill-error text-error")} />
          </button>
        </div>

        {/* Body — flex fill */}
        <div className="flex flex-col flex-1 p-5">
          <h3 className="font-display text-lg text-white leading-snug line-clamp-2 min-h-[2.75rem]">
            {property.title}
          </h3>

          <p className="font-mono text-base text-gold-warm mt-2 mb-3">
            {formatPrice(property.price)}
          </p>

          <div className="flex items-center gap-1.5 text-ash text-sm mb-3">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">
              {property.location.locality}, {property.location.city}
            </span>
          </div>

          <div className="flex items-center gap-4 text-sm text-mist mb-4">
            {property.bedrooms ? (
              <span className="flex items-center gap-1 shrink-0">
                <Bed className="w-3.5 h-3.5" /> {property.bedrooms} BHK
              </span>
            ) : null}
            <span className="flex items-center gap-1 shrink-0">
              <Maximize className="w-3.5 h-3.5" /> {formatArea(property.areaSqft)}
            </span>
          </div>

          {/* Stats — always visible, fixed layout */}
          <div className="mt-auto pt-4 border-t border-iron grid grid-cols-3 gap-2 text-center">
            <div>
              <p className="font-mono text-xs text-gold-warm truncate">
                {property.pricePerSqft ? formatPrice(property.pricePerSqft) : "—"}
              </p>
              <p className="text-[10px] text-smoke uppercase tracking-wider mt-0.5">Per sqft</p>
            </div>
            <div>
              <p className="font-mono text-xs text-success truncate">
                {property.yieldPercent ? `${property.yieldPercent}%` : "—"}
              </p>
              <p className="text-[10px] text-smoke uppercase tracking-wider mt-0.5">Yield</p>
            </div>
            <div>
              <p className="font-mono text-xs text-pearl truncate">
                {property.lastViewed ?? "—"}
              </p>
              <p className="text-[10px] text-smoke uppercase tracking-wider mt-0.5">Viewed</p>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
