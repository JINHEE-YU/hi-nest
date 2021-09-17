import { ApiProperty } from "@nestjs/swagger";

export class Movie {
    @ApiProperty({
        description: '영화 ID',
        type:Number,
        example:1
      })
    id: number;
    @ApiProperty({
        description: '영화 제목',
        type:String,
        example: '테스트 제목'
      })
    title: string;
    @ApiProperty({
        description: '영화 년도',
        type:Number,
        example:2021
      })
    year: number;
    @ApiProperty({
        description: '영화 장르',
        type:[String],
        example:["action", "romance"]
      })
    genres: string[];

}