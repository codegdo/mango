import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api.module';
import { Logger, VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);
  const port = process.env.API_PORT || 5000;

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
    prefix: 'api/v',
  });

  app.enableCors({
    origin: process.env.CLIENT_URL,
    credentials: true,
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'Expiry',
      'X-Refresh-Token',
    ],
  });

  await app.listen(port);

  Logger.log(`Api is running on port: ${port}`);
}
bootstrap();
