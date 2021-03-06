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
exports.ModuController = void 0;
var common_1 = require("@nestjs/common");
var platform_express_1 = require("@nestjs/platform-express");
var swagger_1 = require("@nestjs/swagger");
var ModuController = /** @class */ (function () {
    function ModuController() {
    }
    ModuController.prototype.uploadFile = function (file) {
        console.log(file);
    };
    ModuController.prototype.uploadFilse = function (files) {
        console.log(files);
    };
    __decorate([
        (0, common_1.Post)('/upload'),
        (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
        __param(0, (0, common_1.UploadedFile)())
    ], ModuController.prototype, "uploadFile");
    __decorate([
        (0, common_1.Post)('/uploads'),
        (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files')),
        __param(0, (0, common_1.UploadedFiles)())
    ], ModuController.prototype, "uploadFilse");
    ModuController = __decorate([
        (0, swagger_1.ApiTags)('Modu'),
        (0, common_1.Controller)('modu')
    ], ModuController);
    return ModuController;
}());
exports.ModuController = ModuController;
