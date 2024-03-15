```typescript
app.enableVersioning({
  type: VersioningType.URI,
  defaultVersion: '1',
  prefix: 'api/v',
});
```

```typescript
import { Controller, Get, Post, Version } from '@nestjs/common';

@Controller({ path: 'auth', version: '2' })
export class AuthController {
  @Get('signup')
  signup() {
    return { ok: 'signup' };
  }

  @Version('2')
  @Post('login')
  login() {
    console.log('LOGIN');
    return { ok: 'login' };
  }
}
```
