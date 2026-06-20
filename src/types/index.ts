export type PropertyType =
  | "Villa"
  | "Apartment"
  | "Penthouse"
  | "Townhouse"
  | "Plot"
  | "Commercial"
  | "Studio"
  | "Duplex"
  | "Farmhouse";

export type ListingType = "SALE" | "RENT";
export type PropertyStatus = "ACTIVE" | "SOLD" | "UNDER_OFFER" | "NEW_LAUNCH";

export interface Property {
  id: string;
  slug: string;
  title: string;
  description: string;
  propertyType: PropertyType;
  listingType: ListingType;
  status: PropertyStatus;
  price: number;
  pricePerSqft?: number;
  bedrooms?: number;
  bathrooms?: number;
  areaSqft: number;
  floor?: number;
  totalFloors?: number;
  yearBuilt?: number;
  furnishing?: string;
  facing?: string;
  reraNumber?: string;
  isReraRegistered: boolean;
  isVerified: boolean;
  isFeatured: boolean;
  isExclusive: boolean;
  viewCount: number;
  images: string[];
  location: {
    city: string;
    locality: string;
    state: string;
    country: string;
    lat?: number;
    lng?: number;
  };
  agentId: string;
  amenities: string[];
  yieldPercent?: number;
  lastViewed?: number;
}

export interface Agent {
  id: string;
  slug: string;
  firstName: string;
  lastName: string;
  title: string;
  bio: string;
  avatar: string;
  experience: number;
  specializations: string[];
  languages: string[];
  rating: number;
  reviewCount: number;
  dealsClosed: number;
  totalValue: number;
  isVerified: boolean;
  isFeatured: boolean;
  city: string;
  areas: string[];
  phone?: string;
  email?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorAvatar: string;
  readTime: number;
  date: string;
  image: string;
  views: number;
}

export interface City {
  id: string;
  name: string;
  country: string;
  propertyCount: number;
  avgPrice: number;
  image: string;
  lat: number;
  lng: number;
}

export interface Collection {
  id: string;
  title: string;
  propertyCount: number;
  image: string;
  slug: string;
  tall?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  deal: string;
  avatar: string;
}

export interface NewProject {
  id: string;
  slug: string;
  name: string;
  developer: string;
  developerLogo: string;
  location: string;
  city: string;
  configurations: string[];
  priceFrom: number;
  possessionDate: string;
  reraApproved: boolean;
  progress: number;
  status: "PRE_LAUNCH" | "UNDER_CONSTRUCTION" | "READY_TO_MOVE" | "COMPLETED";
  image: string;
}
