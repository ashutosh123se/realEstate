import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PropertiesService {
  constructor(private prisma: PrismaService) {}

  async findAll(opts: { featured?: boolean; city?: string; page: number; limit: number }) {
    const where: Record<string, unknown> = { status: 'ACTIVE' };
    if (opts.featured) where.isFeatured = true;
    if (opts.city) where.location = { city: { equals: opts.city, mode: 'insensitive' } };

    const [data, total] = await Promise.all([
      this.prisma.property.findMany({
        where,
        include: { images: true, location: true, agent: true, amenities: true },
        skip: (opts.page - 1) * opts.limit,
        take: opts.limit,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.property.count({ where }),
    ]);

    return { data, total, page: opts.page, pageSize: opts.limit };
  }

  async findFeatured() {
    return this.prisma.property.findMany({
      where: { isFeatured: true, status: 'ACTIVE' },
      include: { images: true, location: true },
      take: 12,
    });
  }

  async findOne(slug: string) {
    const property = await this.prisma.property.findUnique({
      where: { slug },
      include: {
        images: true,
        location: true,
        agent: { include: { user: true } },
        amenities: true,
        priceHistory: { orderBy: { date: 'asc' } },
      },
    });
    if (!property) throw new NotFoundException('Property not found');
    await this.prisma.property.update({
      where: { slug },
      data: { viewCount: { increment: 1 } },
    });
    return property;
  }
}
