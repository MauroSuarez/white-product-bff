import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { useCases } from './application/use-cases/useCases';
import { PrismaService } from '@/modules/shared/infraestructure/database/postgress/prisma.orm';
import { INJECT_USER_ADAPTER } from './domain/constants/User.Constants';
import { UserRepository } from './infraestructure/adapters/User.Repository';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
  providers: [
    ...useCases,
    PrismaService,
    {
      provide: INJECT_USER_ADAPTER,
      useClass: UserRepository,
    },
  ],
  exports: [],
  controllers: [],
})
export class UserModule {}
