import { Controller, Get, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get('signup')
  signup() {
    return { ok: 'signup' };
  }

  @Post('login')
  login() {
    console.log('LOGIN');
    return { ok: 'login' };
  }
}
