## Install Dependencies `@nestjs/config`

- Run `npm install @nestjs/config`

## Create Config Module

1. Generate a config module for configuration settings:

- Run `nest generate module modules/config -p common`

2. After generating the module, you'll find default common module files. You can remove these if not needed for your specific project.

3. cd to "modules" folder and create an "index.ts" and export "ConfigModule"

4. cd back to "common" folder and export the "ConfigModule" from `src/common/modules/index.ts`:

-In `src/common/index.ts`, ensure that ConfigModule is correctly exported for use in your application:

```ts
export * from './modules';
```

4. In src/common/config/config.module.ts, implement the ConfigModule as follows:

```ts
import { Global, Module } from '@nestjs/common';
import {
  ConfigModule as NestConfigModule,
  ConfigService,
} from '@nestjs/config';

@Global()
@Module({
  imports: [NestConfigModule.forRoot()],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
```
