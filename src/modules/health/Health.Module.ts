import { Module } from '@nestjs/common';
import { HealthController } from './controllers/Health.Controller';

@Module({
  controllers: [HealthController],
})
export class HealthModule {}
