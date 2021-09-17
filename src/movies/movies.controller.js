"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.MoviesController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var Movie_entity_1 = require("./entities/Movie.entity");
var MoviesController = /** @class */ (function () {
    //NestJS에서 import할때 기본적인 방법은 이것!
    function MoviesController(moviesService, swaggerError) {
        this.moviesService = moviesService;
        this.swaggerError = swaggerError;
    }
    MoviesController.prototype.getAll = function () {
        return this.moviesService.getAll();
    };
    // 이 함수가 getOne 함수보다 밑에있으면 시스템은 search를 id값으로 인지한다
    // 따라서 getOne 보다 윗 부분에 위치시켜야 한다.(Nest뿐만 아니라 express 에서도 마찬가지)
    MoviesController.prototype.search = function (searchingYear) {
        return "We are searching for a movie made after " + searchingYear;
    };
    MoviesController.prototype.getOne = function (movieId) {
        //param으로 받는값은 무조건 string으로 받아야하지만
        //main.ts에서 transform: true, 속성을 줬기때문에 number로 변경하여 받아도 됨.
        return this.moviesService.getOne(movieId);
    };
    MoviesController.prototype.create = function (movieData) {
        //@Body : 리퀘스트의 body내용을 가져오기위한 데코레이터
        console.log(movieData);
        return this.moviesService.create(movieData);
    };
    MoviesController.prototype["delete"] = function (movieId) {
        return this.moviesService.deleteOne(movieId);
    };
    //update 
    // - put : 모든 속성을 수정한다.
    // - patch : 일부 속성을 수정한다.
    MoviesController.prototype.patch = function (movieId, updateData) {
        return this.moviesService.update(movieId, updateData);
    };
    __decorate([
        (0, common_1.Get)(),
        (0, swagger_1.ApiOperation)({ summary: '영화목록 조회', description: '영화 목록을 조회합니다.' }),
        (0, swagger_1.ApiOkResponse)({ type: Movie_entity_1.Movie, description: '영화목록 조회 성공' })
    ], MoviesController.prototype, "getAll");
    __decorate([
        (0, common_1.Get)('/search'),
        (0, swagger_1.ApiOperation)({ summary: '영화 상세 조회', description: '개봉연도를 키워드로 영화 목록을 조회합니다.' }),
        (0, swagger_1.ApiQuery)({ name: 'year', type: Number }),
        __param(0, (0, common_1.Query)('year'))
    ], MoviesController.prototype, "search");
    __decorate([
        (0, common_1.Get)("/:id"),
        (0, swagger_1.ApiParam)({ name: 'id', example: '2020', description: '영화 ID' }),
        (0, swagger_1.ApiOkResponse)({ type: Movie_entity_1.Movie, description: '영화목록 조회 성공' }),
        (0, swagger_1.ApiNotFoundResponse)(),
        __param(0, (0, common_1.Param)('id'))
    ], MoviesController.prototype, "getOne");
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], MoviesController.prototype, "create");
    __decorate([
        (0, common_1.Delete)("/:id"),
        __param(0, (0, common_1.Param)('id'))
    ], MoviesController.prototype, "delete");
    __decorate([
        (0, common_1.Patch)('/:id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], MoviesController.prototype, "patch");
    MoviesController = __decorate([
        (0, swagger_1.ApiTags)('movies'),
        (0, common_1.Controller)('movies') // Entry Point를 매개변수로 받는다.
    ], MoviesController);
    return MoviesController;
}());
exports.MoviesController = MoviesController;
