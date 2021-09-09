import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  //beforeEach : 이 경우 모든 테스트 단위에 대해 실행되기전 매번 실행 :  초기 데이터를 적재 시 유용하게 사용
  //beforeAll : 각각 함수의 전 후에 매번 호출되는 것이 아니라, 맨 처음과 맨 끝에 딱 한 번씩만 호출 : 테스트애플리케이션 생성-> 테스트가 끝날때까지 데이터 유지 됨
  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    // POINT : 테스팅 환경도 실서버 환경과 똑같이 맞춰야 한다.
    app = moduleFixture.createNestApplication();
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
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
        .get('/')
        .expect(200)
        .expect('Welcom to my Movie API');
  });

  describe("/movies",()=>{
    it("GET", () => {
      return request(app.getHttpServer())
          .get('/movies')
          .expect(200)
          .expect([]);
    })

    it('POST',()=>{
      return request(app.getHttpServer())
          .post('/movies')
          .send({
            title:"Test",
            year:2000,
            genres: ['test']

          })
          .expect(201)
    })

    it('DELETE',()=>{
      return request(app.getHttpServer())
              .delete('/movies')
              .expect(404)
    })
  
  }); //END TO  describe("/movies"

  describe("movies/:id", ()=>{
    it('GET',()=>{
      return request(app.getHttpServer())
              .get('/movies/1')
              .expect(200);
    });
    it.todo("PATCH")

    it('GET 404',()=>{
      return request(app.getHttpServer())
              .get('/movies/999')
              .expect(404);
    });
    it.todo("DELETE")
    it.todo("PATCH")
})


});
