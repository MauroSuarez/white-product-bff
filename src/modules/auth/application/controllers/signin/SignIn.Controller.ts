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
import { SignInUseCase } from '../../use-cases/signin/SignIn.useCase';
// import { AuthGuard } from '@nestjs/passport';

@ApiTags('auth')
@Controller('auth')
export class SignInController {
  constructor(private readonly signInUseCase: SignInUseCase) {}

  @Post('/signin')
  @HttpCode(HttpStatus.OK)
  async signin(): Promise<any> {
    // return new LoginResponse(await this.authService.login(loginRequest));
    try {
      return this.signInUseCase.execute();
    } catch (err) {

    }
  }
}