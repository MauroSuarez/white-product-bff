import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import config from '@/config/main/config';
import { controllers } from './application/controllers/controllers';
import { useCases } from './application/use-cases/useCases';
import { JwtStrategy } from './infraestructure/jwt/jwt.strategy';
import { SignInService } from './infraestructure/adapters/SignIn.Service';
import { INJECT_AUTH_ADAPTER } from './domain/constants/Auth.Constants';
import { PrismaService } from '@/modules/shared/infraestructure/database/postgress/prisma.orm';
import { INJECT_USER_ADAPTER } from '../user/domain/constants/User.Constants';
import { UserRepository } from '../user/infraestructure/adapters/User.Repository';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: config.jwt.secretOrKey,
      signOptions: {
        expiresIn: config.jwt.expiresIn,
      },
    }),
  ],
  providers: [
    ...useCases,
    JwtStrategy,
    PrismaService,
    {
      provide: INJECT_AUTH_ADAPTER,
      useClass: SignInService,
    },
    {
      provide: INJECT_USER_ADAPTER,
      useClass: UserRepository,
    },
  ],
  controllers: [...controllers],
})
export class AuthModule {}
