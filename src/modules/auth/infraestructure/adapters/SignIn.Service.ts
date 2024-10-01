import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { IJwtPayload } from '@/modules/auth/domain/entities/Jwt.Entity';

@Injectable()
export class SignInService {
  constructor(private readonly jwtService: JwtService) {}

  async signIn(signInRequest: any, user: any): Promise<string> {
    if (
      user === null ||
      !bcrypt.compareSync(signInRequest.password, user.password)
    ) {
      throw new UnauthorizedException();
    }
    console.log(
      user,
      !bcrypt.compareSync(signInRequest.password, user.password),
      'TEST',
      'signInRequest',
    );

    console.log(user, 'A VER');
    const payload: IJwtPayload = {
      id: 1,
      email: 'masuarez@gmail.com',
      username: '',
    };

    return this.jwtService.signAsync(payload);
  }
}
