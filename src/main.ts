import { NestFactory } from '@nestjs/core';
import CarsModule from './cars/cars.module';
import * as dotenv from "dotenv"
import MongooseContext from "./database/MongooseContext";

dotenv.config()
async function bootstrap() {
  try {
    await MongooseContext.connect()
    console.log("Database updated!")
    const app = await NestFactory.create(CarsModule);
    await app.listen(3000); 
  } catch (e) {
    console.log("ERR: " + e)
  }
}
bootstrap();
