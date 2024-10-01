import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IJwtPayload } from '@/modules/auth/domain/entities/Jwt.Entity';
import { PrismaService } from '@/modules/shared/infraestructure/database/postgress/prisma.orm';
import type { Users } from '@prisma/client';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findUserByIdentifier(
    identifier: string,
  ): Promise<Partial<Users> | null> {
    const user = await this.prisma.users.findFirst({
      where: {
        OR: [
          {
            username: identifier,
          },
          {
            email: identifier,
          },
        ],
      },
      select: {
        id: true,
        password: true,
        email: true,
        username: true,
      },
    });

    return user;
  }
}
