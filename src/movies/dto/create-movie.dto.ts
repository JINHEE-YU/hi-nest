import { IsNumber, IsOptional, IsString } from "class-validator";
// 유효성검사에 필요한 패키지 설치 명령어
// npm i class-validator class-transformer

export class CreateMovieDto{
    @IsString()
    readonly title: string;
    @IsNumber()
    readonly year: number;
    @IsOptional()
    @IsString({each:true})
    readonly genres: string[];
}