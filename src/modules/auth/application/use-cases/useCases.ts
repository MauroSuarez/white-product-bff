import { SignInUseCase } from './SignIn.useCase';
import { FindUserByIdentifierUseCase } from '@/modules/user/application/use-cases/FindUserByIdentifier.useCase';

export const useCases = [SignInUseCase, FindUserByIdentifierUseCase];
