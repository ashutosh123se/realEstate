import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AgentsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.agent.findMany({
      include: { user: true },
      orderBy: { rating: 'desc' },
    });
  }

  async findOne(id: string) {
    const agent = await this.prisma.agent.findFirst({
      where: { OR: [{ id }, { user: { email: id } }] },
      include: { user: true, reviews: true },
    });
    if (!agent) throw new NotFoundException('Agent not found');
    return agent;
  }

  findProperties(id: string) {
    return this.prisma.property.findMany({
      where: { agentId: id, status: 'ACTIVE' },
      include: { images: true, location: true },
    });
  }
}
