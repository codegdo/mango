import { Module } from '@nestjs/common';
import { ConfigModule, SessionModule } from '@app/common';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule, SessionModule, AuthModule],
  controllers: [],
  providers: [],
})
export class ApiModule {}
