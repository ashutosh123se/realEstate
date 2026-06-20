import { NextResponse } from "next/server";
import { getPropertyBySlug, properties } from "@/lib/data/mock-data";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(_request: Request, { params }: RouteParams) {
  const { id } = await params;
  const property = getPropertyBySlug(id) ?? properties.find((p) => p.id === id);

  if (!property) {
    return NextResponse.json({ error: "Property not found" }, { status: 404 });
  }

  return NextResponse.json({ data: property });
}
