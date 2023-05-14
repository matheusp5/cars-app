import { Injectable } from '@nestjs/common';
import Car from "./models/car.model";

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: 1,
      name: "Lamborghini",
      model: "Gallardo",
      plate: "AAA-1234",
      year: 2020
    },
    {
      id: 2,
      name: "Nissan",
      model: "GTR",
      plate: "BBB-1234",
      year: 2021
    },
    {
      id: 3,
      name: "Nissan",
      model: "Skyline R34",
      plate: "CCC-1234",
      year: 2015
    },
    {
      id: 4,
      name: "Lamborghini",
      model: "Aventador",
      plate: "DDD-1234",
      year: 2019
    },
    {
      id: 5,
      name: "McLaren",
      model: "P1",
      plate: "EEE-1234",
      year: 2018
    }
  ]
  GetAll() {return this.cars}

  GetOne(id: number) {
    return this.cars.filter(car => car.id == id)
  }

  Create(car: Car) {return this.cars.push(car)}

  Delete(id: number) {return this.cars.filter(car => car.id != id)}
}
