import { NestFactory } from '@nestjs/core';
import CarsModule from './cars/cars.module';

async function bootstrap() {
  const app = await NestFactory.create(CarsModule);
  await app.listen(3000);
}
bootstrap();
