import { Inject, Injectable } from "@nestjs/common";
import { ISignInDataSource } from '@/modules/auth/domain/interfaces/data-source/signin'
import { INJECT_AUTH_DATA_SOURCE } from '@/modules/auth/domain/constants/data-source/signin';

@Injectable()
export class SignInUseCase {
  constructor(
    @Inject(INJECT_AUTH_DATA_SOURCE)
    private readonly signInDataSource: ISignInDataSource
  ) {}

  async execute() {
    const restSignIn = await this.signInDataSource.signIn({});
    return restSignIn;
  }
}