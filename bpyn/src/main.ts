import { NestFactory } from '@nestjs/core';
import { Application } from './Application';

async function bootstrap() {
  const app = await NestFactory.create(Application);
  app.enableCors();
  await app.listen(3000);
}

bootstrap();
