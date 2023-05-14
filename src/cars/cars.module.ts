import { Module } from '@nestjs/common';
import CarsController from './cars.controller';
import { CarsService } from './cars.service';
@Module({
  exports: [],
  controllers: [CarsController],
  providers: [CarsService],
})
export default class CarsModule {}
