import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { corsConfig } from './config/cors.config';
import { PORT } from './constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.use(cookieParser());
  app.enableCors(corsConfig);

  await app.listen(PORT);
}
bootstrap();
