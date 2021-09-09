import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/Movie.entity';

@Injectable()
export class MoviesService {
    private movies: Movie[] = []

    getAll(): Movie[] {
        return this.movies;
    }

    getOne(id:number):Movie {

        // this.movies.find(movie => movie.id === parseInt(id));
        // const movie = this.movies.find(movie => movie.id === +id); //이렇게해도 타입이 바뀐다.(string->number)
        const movie = this.movies.find(movie => movie.id === id); // param 타입을 변경했기때문에 바로 비교가능
        if(!movie) {
            throw new NotFoundException(`Movie with ID ${id} not found.`);
        }
        return movie;
    }

    deleteOne(id:number){
        this.getOne(id);
        this.movies = this.movies.filter(movie => movie.id !== id);
    }

    create(movieData: CreateMovieDto){
        this.movies.push({
            id: this.movies.length + 1,
            ...movieData
        })
    }

    update(id:number, updateData: UpdateMovieDto){
        const movie = this.getOne(id);
        this.deleteOne(id);
        this.movies.push({...movie, ...updateData})
    }
}
