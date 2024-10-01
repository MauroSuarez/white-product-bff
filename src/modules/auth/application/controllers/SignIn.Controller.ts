import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
// import { AuthGuard } from '@nestjs/passport';
import { SignInUseCase } from '../use-cases/SignIn.useCase';
// import { AuthGuard } from '@nestjs/passport';
import { FindUserByIdentifierUseCase } from '@/modules/user/application/use-cases/FindUserByIdentifier.useCase';

@ApiTags('auth')
@Controller('auth')
export class SignInController {
  constructor(
    private readonly signInUseCase: SignInUseCase,
    private readonly findUserByIdentifierUseCase: FindUserByIdentifierUseCase,
  ) {}

  @Post('/signin')
  @HttpCode(HttpStatus.OK)
  async signin(@Body() signInRequest: any): Promise<any> {
    try {
      const user = await this.findUserByIdentifierUseCase.execute(
        'mauritosuarez',
      );
      return this.signInUseCase.execute(signInRequest, user);
    } catch (err) {}
  }
}
