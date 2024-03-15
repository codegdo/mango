import { Module } from '@nestjs/common';
import { ConfigModule } from '@app/common';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule, AuthModule],
  controllers: [],
  providers: [],
})
export class ApiModule {}
