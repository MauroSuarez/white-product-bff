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

@ApiTags('auth')
@Controller('auth')
export class SignUpController {
  // constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @HttpCode(HttpStatus.OK)
  async signin(@Body() loginRequest): Promise<any> {
    // return new LoginResponse(await this.authService.login(loginRequest));
    return { status: 'signup' };
  }
}
