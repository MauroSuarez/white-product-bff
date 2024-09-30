import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import config from '@/config/main/config';
import { controllers } from './application/controllers/controllers';
import { useCases } from './application/use-cases/useCases';
import { JwtStrategy } from './infraestructure/jwt/jwt.strategy';
import { SignInDataSource } from './infraestructure/data-source/signin/SignIn.DataSource';
import { INJECT_AUTH_DATA_SOURCE } from './domain/constants/data-source/signin';
import { PrismaService } from '@/modules/shared/infraestructure/data-source/prisma/prisma.service';

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
      provide: INJECT_AUTH_DATA_SOURCE,
      useClass: SignInDataSource
    }
  ],
  controllers: [
    ...controllers
  ],
})
export class AuthModule {}