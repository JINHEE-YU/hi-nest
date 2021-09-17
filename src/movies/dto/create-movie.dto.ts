import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";
// 유효성검사에 필요한 패키지 설치 명령어
// npm i class-validator class-transformer

export class CreateMovieDto{
    
    @ApiProperty({
        description: '영화 제목',
        type:String,
        example:'테스트 제목'
    })
    @IsString()
    readonly title: string;

    @ApiProperty({
        description: '개봉년도',
        type:Number,
        example:2021
        
    })
    @IsNumber()
    readonly year: number;

    @ApiProperty({
        description: '장르',
        type:Array(String),
        example:["action", "romance"]
    })
    @IsOptional()
    @IsString({each:true})
    readonly genres: string[];
}