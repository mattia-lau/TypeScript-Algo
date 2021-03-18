import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { example } from './BST';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  example();

  await app.close();
}
bootstrap();
