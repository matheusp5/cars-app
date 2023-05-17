import { Injectable } from '@nestjs/common';
import Car from './models/car.model';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: 1,
      name: 'Lamborghini',
      model: 'Gallardo',
      plate: 'AAA-1234',
      year: 2020,
      imageUrl: "https://img.olx.com.br/images/71/712338396754210.jpg"
    },
    {
      id: 2,
      name: 'Nissan',
      model: 'GTR',
      plate: 'BBB-1234',
      year: 2021,
      imageUrl: "https://quatrorodas.abril.com.br/wp-content/uploads/2021/09/GTR-TRACK-EDITION-e1666376776180.jpg"
    },
    {
      id: 3,
      name: 'Nissan',
      model: 'Skyline R34',
      plate: 'CCC-1234',
      year: 2015,
      imageUrl: "https://quatrorodas.abril.com.br/wp-content/uploads/2023/03/SKYLINE-1-e1680016960625.jpg?quality=70&strip=info&w=1280&h=720&crop=1"
    },
    {
      id: 4,
      name: 'Lamborghini',
      model: 'Aventador',
      plate: 'DDD-1234',
      year: 2019,
      imageUrl: "https://cdn.motor1.com/images/mgl/4JyZA/s1/lamborghini-aventador-lp-780-4-ultimae.jpg"
    },
    {
      id: 5,
      name: 'McLaren',
      model: 'P1',
      plate: 'EEE-1234',
      year: 2018,
      imageUrl: "https://quatrorodas.abril.com.br/wp-content/uploads/2016/11/120926_mc_01.jpeg"
    },
  ];
  GetAll() {
    return this.cars;
  }

  GetOne(id: number) {
    return this.cars.filter((car) => car.id == id);
  }

  Create(car: Car) {
    return this.cars.push(car);
  }

  Delete(id: number) {
    return this.cars.filter((car) => car.id != id);
  }
}
