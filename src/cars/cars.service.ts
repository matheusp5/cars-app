import { Injectable } from '@nestjs/common';
import Car from '@models/car.model';
import MysqlContext from '@database//MysqlContext';
import { Repository } from 'typeorm';

@Injectable()
export class CarsService {
  private readonly _repo: Repository<Car>;
  constructor() {
    this._repo = MysqlContext.getRepository(Car);
  }
  async GetAll() {
    return await this._repo.find();
  }
  async GetOne(id: number) {
    return await this._repo.findOne({ where: { id } });
  }
}
