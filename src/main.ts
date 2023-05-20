import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import CarsModule from './cars/cars.module';
import MysqlContext from './database/MysqlContext';

import {config} from "dotenv"
config()

async function bootstrap() {
  try {
    await MysqlContext.initialize();
    console.log('Database updated!');
    const app = await NestFactory.create(CarsModule);
    await app.listen(3000);
  } catch (e) {
    console.log('ERR: ' + e);
  }
}
bootstrap();
