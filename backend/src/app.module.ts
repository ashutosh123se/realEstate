import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PropertiesModule } from './properties/properties.module';
import { AgentsModule } from './agents/agents.module';
import { PrismaModule } from './prisma/prisma.module';
import { HealthController } from './health.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    PropertiesModule,
    AgentsModule,
  ],
  controllers: [HealthController],
})
export class AppModule {}
