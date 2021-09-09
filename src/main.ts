import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 
  // 유효성 검사 수행
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 아무 decorator도 없는 property의 object를 거른다.
      forbidNonWhitelisted: true, // 지정되지 않은 property는 리퀘스트 자체를 막는다.
      // transform: true, // 사용자가 보낸 param값을 원하는 값으로 변환하여 받아온다.
      transform: true, // mapping class로 변환을 허용한다.
      transformOptions: {
          enableImplicitConversion: true, // 암묵적으로 타입을 변환 시켜준다.
      }
    })
  )
  await app.listen(3000);
}
bootstrap();
