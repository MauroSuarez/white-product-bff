import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IJwtPayload } from '@/modules/auth/domain/entities/jwt';
import { PrismaService } from '@/modules/shared/infraestructure/data-source/prisma/prisma.service';

@Injectable()
export class SignInDataSource {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  async signIn(signInRequest: any): Promise<string> {
    // if (
    //   user === null ||
    //   !bcrypt.compareSync(loginRequest.password, user.passwordHash)
    // ) {
    //   throw new UnauthorizedException();
    // }

    // const payload: JwtPayload = {
    //   id: user.id,
    //   email: user.email,
    //   username: user.username,
    // };
    // const user = await this.prisma.user.findFirst({
    //   where: {
    //     OR: [
    //       {
    //         username: 'mauritosuarez10',
    //       },
    //       {
    //         email: 'masuarez@gmail.com',
    //       },
    //     ],
    //   },
    //   select: {
    //     id: true,
    //     passwordHash: true,
    //     email: true,
    //     username: true,
    //   },
    // });
    // console.log(user, 'A VER');
    const payload: IJwtPayload = {
      id: 1,
      email: 'masuarez@gmail.com',
      username: '',
    };

    return this.jwtService.signAsync(payload);
  }

}