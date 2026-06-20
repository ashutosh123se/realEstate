import { NextResponse } from "next/server";
import { properties, getFeaturedProperties } from "@/lib/data/mock-data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const featured = searchParams.get("featured");
  const city = searchParams.get("city");
  const limit = searchParams.get("limit");

  let results = featured === "true" ? getFeaturedProperties() : [...properties];

  if (city) {
    results = results.filter(
      (p) => p.location.city.toLowerCase() === city.toLowerCase()
    );
  }

  if (limit) {
    results = results.slice(0, parseInt(limit, 10));
  }

  return NextResponse.json({
    data: results,
    total: results.length,
    page: 1,
    pageSize: results.length,
  });
}
