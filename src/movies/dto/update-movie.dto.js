"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.UpdateMovieDto = void 0;
var mapped_types_1 = require("@nestjs/mapped-types");
var create_movie_dto_1 = require("./create-movie.dto");
// PartialType 사용을 위해 설치하는 패키지
// npm i @nestjs/mapped-types
// 타입을 변환시키고 사용할 수 있게 해주는 역할
var UpdateMovieDto = /** @class */ (function (_super) {
    __extends(UpdateMovieDto, _super);
    function UpdateMovieDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UpdateMovieDto;
}((0, mapped_types_1.PartialType)(create_movie_dto_1.CreateMovieDto)));
exports.UpdateMovieDto = UpdateMovieDto;
// 이것과 같은 내용
// {
//     @IsString()
//     readonly title?: string;
//     @IsNumber()
//     readonly year?: number;
//     @IsString({each:true})
//     readonly genres?: string[];
//}
