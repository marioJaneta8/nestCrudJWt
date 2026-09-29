import { Module } from '@nestjs/common';
import { CatsService } from './cats.service.js';
import { CatsController } from './cats.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from './entities/cat.entity.js';

import { BreedsModule } from '../breeds/breeds.module.js';
import { BreedsService } from '../breeds/breeds.service.js';

@Module({
  imports: [TypeOrmModule.forFeature([Cat]),BreedsModule],
  controllers: [CatsController],
  providers: [CatsService,BreedsService],
})
export class CatsModule {}
