import { Controller, Get, Param, Query } from '@nestjs/common';
import { PropertiesService } from './properties.service';

@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Get()
  findAll(
    @Query('featured') featured?: string,
    @Query('city') city?: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    return this.propertiesService.findAll({
      featured: featured === 'true',
      city,
      page: page ? parseInt(page, 10) : 1,
      limit: limit ? parseInt(limit, 10) : 24,
    });
  }

  @Get('featured')
  findFeatured() {
    return this.propertiesService.findFeatured();
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.propertiesService.findOne(slug);
  }
}
