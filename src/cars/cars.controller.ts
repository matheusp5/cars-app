import { Controller, Get, Param, Query, Request } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller()
export default class CarsController {
  constructor(public _cars: CarsService) {}
  @Get('cars')
  public Cars() {
    return {
      status: 200,
      content: this._cars.GetAll(),
    };
  }

  @Get('car/:id')
  public Car(@Param('id') id: number) {
    return {
      status: 200,
      content: this._cars.GetOne(id),
    };
  }
}
