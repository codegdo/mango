import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api.module';
import { Logger, VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);
  const port = process.env.API_PORT || 5000;

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: process.env.API_VERSION,
    prefix: process.env.API_PREFIX,
  });

  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://localhost:3001',
      /^https?:\/\/[^.]+\.localhost:3000$/,
      /^https?:\/\/[^.]+\.localhost:3001$/,
    ],
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
