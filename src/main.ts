import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SingleLinkedList } from './LinkedList';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const g = new SingleLinkedList<number>([1, 2, 3, 4]);

  const t = g.reverseList();
  g.print(t);

  await app.close();
}
bootstrap();
