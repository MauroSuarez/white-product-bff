import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { JwtPayload } from './jwt-payload';
import config from '@/config/main/config';
import { IJwtPayload } from '../../domain/entities/jwt';
// import { AuthUser } from './auth-user';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  //constructor(private readonly authService: any) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.jwt.secretOrKey,
    });
  }

  async validate(payload: IJwtPayload): Promise<any> {
    // const user = await this.authService.validateUser(payload);
    // if (!user) {
    //   throw new UnauthorizedException();
    // }
    // return user;
  }
}
