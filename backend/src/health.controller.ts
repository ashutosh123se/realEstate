import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get()
  check() {
    return { status: 'ok', service: 'LUXE REALTY API', timestamp: new Date().toISOString() };
  }
}
