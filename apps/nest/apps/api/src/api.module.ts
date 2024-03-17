import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, SessionModule } from '@app/common';
import { AuthModule } from './auth/auth.module';
import { SessionMiddleware } from './common/middlewares/session.middleware';

@Module({
  imports: [ConfigModule, SessionModule, AuthModule],
  controllers: [],
  providers: [],
})
export class ApiModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(SessionMiddleware) // Apply the session middleware
      .forRoutes('*'); // Apply the middleware to all routes
  }
}
