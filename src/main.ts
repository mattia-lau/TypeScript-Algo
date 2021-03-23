import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { shuffle } from './leetcode';
import { reverse } from './leetcode/easy/reverse-int';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  console.log(shuffle([2, 5, 1, 3, 4, 7], 3));

  await app.close();
}
bootstrap();
