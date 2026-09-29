import { Module } from '@nestjs/common';
import { BreedsService } from './breeds.service.js';
import { BreedsController } from './breeds.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Breed } from './entities/breed.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Breed])],
  controllers: [BreedsController],
  providers: [BreedsService],
  exports:[TypeOrmModule]
})
export class BreedsModule {}
