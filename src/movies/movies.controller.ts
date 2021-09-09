import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/Movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies') // Entry Point를 매개변수로 받는다.
export class MoviesController {

    //NestJS에서 import할때 기본적인 방법은 이것!
    constructor(private readonly moviesService: MoviesService){}

    @Get()
    getAll(): Movie[]{
        return this.moviesService.getAll();
    }

    // 이 함수가 getOne 함수보다 밑에있으면 시스템은 search를 id값으로 인지한다
    // 따라서 getOne 보다 윗 부분에 위치시켜야 한다.(Nest뿐만 아니라 express 에서도 마찬가지)
    @Get('/search')
    search(@Query('year') searchingYear:string){
        return `We are searching for a movie made after ${searchingYear}`
    }


    @Get("/:id")
    getOne(@Param('id') movieId:number): Movie{
        //param으로 받는값은 무조건 string으로 받아야하지만
        //main.ts에서 transform: true, 속성을 줬기때문에 number로 변경하여 받아도 됨.
        return this.moviesService.getOne(movieId);
    }


    @Post()
    create(@Body() movieData: CreateMovieDto) {
        //@Body : 리퀘스트의 body내용을 가져오기위한 데코레이터
        console.log(movieData);
        return this.moviesService.create(movieData);
    }

    @Delete("/:id")
    delete(@Param('id') movieId:number){
        return this.moviesService.deleteOne(movieId);
    }

    //update 
    // - put : 모든 속성을 수정한다.
    // - patch : 일부 속성을 수정한다.
    @Patch('/:id')
    patch(@Param('id') movieId:number, @Body() updateData:UpdateMovieDto){
    
        return this.moviesService.update(movieId, updateData);
    }
    
}
