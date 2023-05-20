import { Controller, Get, Param, Query, Request } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller()
export default class CarsController {
  constructor(public _cars: CarsService) {}
  @Get('cars')
  public async Cars() {
    
    
    
    return {
      status: 200,
      content: await this._cars.GetAll(),
    };
  }

  @Get('car/:id')
  public async Car(@Param('id') id: number) {
    return {
      status: 200,
      content: await this._cars.GetOne(id),
    };
  }
}
