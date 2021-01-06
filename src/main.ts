import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  //  Nest 的工厂函数创建了 AppModule
  const app = await NestFactory.create(AppModule);

  // 全局路由前缀
  // app.setGlobalPrefix('nest-prefix')

  await app.listen(3000);
}
bootstrap();
