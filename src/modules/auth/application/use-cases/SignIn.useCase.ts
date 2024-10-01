import { Inject, Injectable } from '@nestjs/common';
import { SignInInBound } from '@/modules/auth/domain/ports/inbound/SignIn.InBound';
import { INJECT_AUTH_ADAPTER } from '@/modules/auth/domain/constants/Auth.Constants';

@Injectable()
export class SignInUseCase {
  constructor(
    @Inject(INJECT_AUTH_ADAPTER)
    private readonly signInService: SignInInBound,
  ) {}

  async execute(signInRequest: any, user: any) {
    const restSignIn = await this.signInService.signIn(signInRequest, user);

    return restSignIn;
  }
}
