import { Controller, Get, Post, Session } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get('signup')
  signup(@Session() session: Record<string, any>) {
    console.log('SIGNUP', session.id, session.visits);
    return { ok: 'signup' };
  }

  @Post('login')
  login(@Session() session: Record<string, any>) {
    console.log('LOGIN');
    session.visits = session.visits ? session.visits + 1 : 1;
    return { ok: 'login' };
  }
}
