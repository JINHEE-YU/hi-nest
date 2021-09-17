import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/Movie.entity';
import { MoviesService } from './movies.service';
import { ErrorMsg } from './swagger/exception.json';

@ApiTags('movies')
@Controller('movies') // Entry Point를 매개변수로 받는다.
export class MoviesController {

    //NestJS에서 import할때 기본적인 방법은 이것!
    constructor(private readonly moviesService: MoviesService){}

    @Get()
    @ApiOperation({summary:'영화목록 조회', description:'영화 목록을 조회합니다.'})
    @ApiOkResponse({type:[Movie],description:'영화목록 조회 성공'})
    getAll(): Movie[]{
        return this.moviesService.getAll();
    }

    // 이 함수가 getOne 함수보다 밑에있으면 시스템은 search를 id값으로 인지한다
    // 따라서 getOne 보다 윗 부분에 위치시켜야 한다.(Nest뿐만 아니라 express 에서도 마찬가지)
    @Get('/search')
    @ApiOperation({summary:'영화 상세 조회', description:'개봉연도를 키워드로 영화 목록을 조회합니다.'})
    @ApiQuery({name:'year', type:Number})
    search(@Query('year') searchingYear:number){
        return `We are searching for a movie made after ${searchingYear}`
    }


    @Get("/:id")
    @ApiOperation({summary:'영화 상세 조회', description:'영화 ID를 키워드로 영화 목록을 조회합니다.'})
    @ApiParam({name:'id', example:'1', description:'영화 ID'})
    @ApiOkResponse({type:Movie,description:'영화목록 조회 성공'})
    @ApiNotFoundResponse(ErrorMsg.HttpError400Exam)
    getOne(@Param('id') movieId:number): Movie{
        //param으로 받는값은 무조건 string으로 받아야하지만
        //main.ts에서 transform: true, 속성을 줬기때문에 number로 변경하여 받아도 됨.
        return this.moviesService.getOne(movieId);
    }


    @Post()
    @ApiOperation({summary:'영화 정보 등록', description:'영화 정보를 등록합니다.'})
    @ApiCreatedResponse({description:'영화 정보 등록 성공'})
    @ApiBadRequestResponse(ErrorMsg.HttpError400Exam)
    create(@Body() movieData: CreateMovieDto) {
        //@Body : 리퀘스트의 body내용을 가져오기위한 데코레이터
        console.log(movieData);
        return this.moviesService.create(movieData);
    }

    @Delete("/:id")
    @ApiOperation({summary:'영화 정보 삭제', description:'영화 정보를 삭제합니다.'})
    @ApiParam({name:'id', example:'1', description:'영화 ID'})
    @ApiOkResponse({description:'영화를 삭제하였습니다.'})
    @ApiNotFoundResponse(ErrorMsg.HttpError404Exam)
    delete(@Param('id') movieId:number){
        return this.moviesService.deleteOne(movieId);
    }

    //update 
    // - put : 모든 속성을 수정한다.
    // - patch : 일부 속성을 수정한다.
    @Patch('/:id')
    @ApiOperation({summary:'영화 정보 수정', description:'영화 정보를 수정합니다.'})
    @ApiParam({name:'id', example:'1', description:'영화 ID'})
    @ApiOkResponse({description:'영화를 수정하였습니다.'})
    patch(@Param('id') movieId:number, @Body() updateData:UpdateMovieDto){
    
        return this.moviesService.update(movieId, updateData);
    }
    
}
