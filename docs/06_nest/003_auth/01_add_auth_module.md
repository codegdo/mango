```typscript
nest generate module auth -p api
nest generate controller auth --no-spec -p api
nest generate service auth -p api
```

edit "auth.controller.ts", add two endpoints "signup" and "login"

```typscript
import { Controller, Get, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get('signup')
  signup() {
    return 'signup';
  }

  @Post('login')
  login() {
    console.log('LOGIN');
    return 'login';
  }
}
```
