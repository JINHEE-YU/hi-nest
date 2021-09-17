import { Module } from '@nestjs/common';
import { ModuController } from './modu.controller';
import { ModuService } from './modu.service';

@Module({
  controllers: [ModuController],
  providers: [ModuService]
})
export class ModuModule {}
