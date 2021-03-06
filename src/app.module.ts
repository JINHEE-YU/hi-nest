import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';
import { ModuModule } from './modu/modu.module';

/*
//데코레이터
 클래스에 함수 기능을 추가하는 기능 => 어노테이션같은 기능!
*/
@Module({
  imports: [MoviesModule, ModuModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
