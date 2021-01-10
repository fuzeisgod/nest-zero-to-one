import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  //  Nest 的工厂函数创建了 AppModule
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle("NestJs")
    .setDescription("nestjs 学习项目")
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  // 全局路由前缀
  // app.setGlobalPrefix('nest-prefix')

  await app.listen(3000);
}
bootstrap();
