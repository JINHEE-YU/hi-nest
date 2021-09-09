import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ignoreElements } from 'rxjs';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService; //NestJS의 장점으로 바로 접근이 가능.

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });


  describe("getAll", () =>{
    it("should return an array", ()=>{
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    })
  })

  describe("getOne", ()=>{

    it("should return a movie",()=>{
      service.create({
        title:"Test Movie",
        genres:['Test'],
        year:2021
      });
      const movie = service.getOne(1);
      expect(movie).toBeDefined();
      //expect(movie.id).toEqual(1);
    });

    it("should thow 404 error",()=>{
      try{
        service.getOne(999);
      }catch(e){
        expect(e).toBeInstanceOf(NotFoundException);
        //expect(e.message).toEqual('Movie with ID 999 not found.');
      }
    });
  });

  describe("deleteOne", ()=>{
    it("deletes a movie",()=>{
      service.create({
        title:"Test Movie",
        genres:['Test'],
        year:2020
      });
      const beforeDelete = service.getAll().length;
      service.deleteOne(1)
      const afterDelete = service.getAll().length;
      expect(afterDelete).toBeLessThan(beforeDelete);

    });

    it("should to return a 404", ()=>{
      try{
        service.deleteOne(999)
      }catch(e){
        expect(e).toBeInstanceOf(NotFoundException);
      }
    })
  });

  describe("create", ()=>{
    it("should create a movie", ()=>{
      const beforeCreate = service.getAll().length;
      service.create({
        title:"Test Movie",
        genres:['Test'],
        year:2020
      });
      const afterCreate = service.getAll().length;
      expect(afterCreate).toBeGreaterThan(beforeCreate);
      console.log(`afterCreate, beforeCreate : ${afterCreate}, ${beforeCreate}`)
    })
  });

  describe("update", ()=>{
    it("should update a movie", ()=>{
      service.create({
        title:"Test Movie",
        genres:['Test'],
        year:2020
      });

      service.update(1, {title:"Updated Test"});
      const movie = service.getOne(1);
      expect(movie.title).toEqual("Updated Test");
    })

    it("should throw a NotFoundException", ()=>{
      try{
        service.update(999, {})
      }catch(e){
        expect(e).toBeInstanceOf(NotFoundException);
      }
    })
  })
});
