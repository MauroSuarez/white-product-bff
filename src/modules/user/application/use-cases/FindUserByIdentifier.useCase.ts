import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '@/modules/user/infraestructure/adapters/User.Repository';
import { INJECT_USER_ADAPTER } from '@/modules/user/domain/constants/User.Constants';

@Injectable()
export class FindUserByIdentifierUseCase {
  constructor(
    @Inject(INJECT_USER_ADAPTER)
    private readonly userRepository: UserRepository,
  ) {}

  async execute(identifier: string) {
    const user = await this.userRepository.findUserByIdentifier(identifier);
    return user;
  }
}
