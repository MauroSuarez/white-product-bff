import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from '@/modules/auth/Auth.Module';
import { HealthModule } from '@/modules/health/Health.Module';
import { SharedModule } from '@/modules/shared/Shared.Module';
import { ThrottlerBehindProxyGuard } from '@/modules/shared/infraestructure/guards/throttler.guard';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 50,
    }),
    HealthModule,
    // UserModule,
    AuthModule,
    SharedModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerBehindProxyGuard,
    },
  ],
})
export class MainModule {}
