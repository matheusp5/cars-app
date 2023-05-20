import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller()
export default class CarsController {
  constructor(public _cars: CarsService) {}
  @Get('cars')
  public async Cars() {
    try {
      return {
        status: 200,
        content: await this._cars.GetAll(),
      };
    } catch (e) {
      return {
        status: 500,
        content: [],
      };
    }
  }

  @Get('car/:id')
  public async Car(@Param('id') id: number) {
    try {
      return {
        status: 200,
        content: await this._cars.GetOne(id),
      };
    } catch (e) {
      return {
        status: 500,
        content: [],
      };
    }
  }
}
