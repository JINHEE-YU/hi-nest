import { PartialType } from "@nestjs/mapped-types";
import { IsNumber, IsString } from "class-validator";
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