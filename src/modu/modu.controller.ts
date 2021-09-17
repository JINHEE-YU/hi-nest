import { Controller, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Modu')
@Controller('modu')
export class ModuController {
    
    @Post('/upload')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file: Express.Multer.File) { //Array<Express.Multer.File>)
    console.log(file);
    }
    
    @Post('/uploads')
    @UseInterceptors(FilesInterceptor('files'))
    uploadFilse(@UploadedFiles() files: Array<Express.Multer.File>) {
      console.log(files);
    }



}
