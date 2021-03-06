# Nest Framwork
## 필요 요소
 * Node.js
 * Typescript
 * Nest
## 세팅
 * Nest 설치
  > npm i -g @nestjs/cli 
 * Nest를 사용하여 프로젝트 생성
  > nest new <u>**project-name**</u>
 * 유효성 검사를 위한 패키지
  > npm i class-validator class-transformer
 * DTO 변환을 도와주는 패키지 _[공홈](https://docs.nestjs.com/openapi/mapped-types)
  > npm i @nestjs/mapped-types
 * Swagger 패키지______________ 구현예정
  > npm i @nestjs/swagger
* 프로젝트 실행
 > npm run start:dev
 * 모듈/컨트롤러/서비스 생성
  > npm g mo/co/s

********

## 테스팅
 * Jest : javascript를 쉽게 테스팅하는 npm패키지 (기본적으로 세팅 되어있음)
   - *.spec.ts : 테스트를 포함한 파일을 기준으로 테스팅 수행
   - test:cov : 코드가 얼마나 테스팅 됐는지 안됐는지를 알려주는 명령어
   - test:watch : 모든 테스트파일을 찾아서 무슨 일이 일어나는지 관찰
### 참고
 |구분|설명|명령어<br>(npm run ______) |
 |----|----|------|
 |유닛|모든 function을 따로 테스트.<br>서비스에서 분리된 유닛을 테스트하는 것<br> __* 기능단위테스트__|test:cov <br> test:watch|
 |end-to-end(e2e)|모든 시스템을 테스팅<br>__* 사용자스토리관점테스트__| test:e2e |


****************
## git
* 주소  
 https://github.com/JINHEE-YU/hi-nest/tree/0909
* 브랜치 생성
 > git branch -M 브랜치명
* checkout
 > git checkout 브랜치명
* commit
 > git commit -m "커밋메시지"
* push
 > git push -u origin 브랜치명
