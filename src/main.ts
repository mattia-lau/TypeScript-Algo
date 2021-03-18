import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DFS } from './DFS';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const g = new DFS(4);
  g.addEdge(0, 1);
  g.addEdge(0, 2);
  g.addEdge(1, 2);
  g.addEdge(2, 0);
  g.addEdge(2, 3);
  g.addEdge(3, 3);

  console.log(g.traverse(2))

  await app.close();
}
bootstrap();
