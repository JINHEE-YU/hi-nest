// import { PartialType } from "@nestjs/mapped-types"; //swagger를 사용할경우는 이거말고 swagger의 PartialType을 사용할 것
import { PartialType } from "@nestjs/swagger";
import { CreateMovieDto } from "./create-movie.dto";
// PartialType 사용을 위해 설치하는 패키지
// npm i @nestjs/mapped-types
// 타입을 변환시키고 사용할 수 있게 해주는 역할

export class UpdateMovieDto extends PartialType(CreateMovieDto) {
    
}



// 이것과 같은 내용
// {
//     @IsString()
//     readonly title?: string;
//     @IsNumber()
//     readonly year?: number;
//     @IsString({each:true})
//     readonly genres?: string[];
//}