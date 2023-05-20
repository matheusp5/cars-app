import { Injectable } from '@nestjs/common';
import Car from './models/car.model';
import _ctxMongo from "../database/MongooseContext";

@Injectable()
export class CarsService {
  async GetAll() {
    return await _ctxMongo.CarSchema.find();
  }
  async GetOne(id: number) {
    return await _ctxMongo.CarSchema.findOne({id});
  }
}
