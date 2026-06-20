# LUXE REALTY

**Where Architecture Meets Desire** — A full-stack luxury real estate platform built to international standards.

## Stack

### Frontend (`luxe-realty/`)
- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** with complete "Architectural Noir" design system
- **Framer Motion** for animations
- **React Query / Zustand** ready for server/client state
- 20 fully routed pages with mock data

### Backend (`backend/`)
- **NestJS** + TypeScript
- **Prisma ORM** + PostgreSQL schema
- REST API endpoints matching the master spec

## Pages

| # | Route | Page |
|---|-------|------|
| 01 | `/` | Homepage |
| 02 | `/properties` | Property Listings |
| 03 | `/property/[slug]` | Property Detail |
| 04 | `/search` | Advanced Search |
| 05 | `/agents/[slug]` | Agent Profile |
| 06 | `/agents` | Agents Directory |
| 07 | `/new-projects` | New Projects |
| 08 | `/map-search` | Map Search |
| 09 | `/dashboard` | User Dashboard |
| 10 | `/sell` | Sell Property |
| 11 | `/valuation` | Property Valuation |
| 12 | `/home-loans` | Home Loans & Finance |
| 13 | `/area/[slug]` | Area Guides |
| 14 | `/blog` | Blog Hub |
| 15 | `/nri-services` | NRI Services |
| 16 | `/commercial` | Commercial RE |
| 17 | `/virtual-tours` | Virtual Tour Hub |
| 18 | `/compare` | Property Comparison |
| 19 | `/contact` | Contact Us |
| 20 | `/about` | About Us |

## Getting Started

### Frontend

```bash
cd luxe-realty
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Backend

```bash
cd backend
npm install
cp .env.example .env
npx prisma generate
npm run start:dev
```

## Design System

The complete CSS custom property system is defined in `src/app/globals.css`:
- Obsidian dark palette with champagne gold accents
- Cormorant Garamond (display) + Inter (body) + DM Serif Display (accent)
- Signature floating property cards with 3D tilt + image crossfade
- Glass morphism panels, gold gradient CTAs, editorial typography

## Environment Variables

```env
# Frontend (.env.local)
NEXT_PUBLIC_MAPBOX_TOKEN=
NEXT_PUBLIC_API_URL=http://localhost:3001

# Backend (.env)
DATABASE_URL=postgresql://user:pass@localhost:5432/luxe_realty
JWT_SECRET=
```

## License

Proprietary — LUXE REALTY © 2026
