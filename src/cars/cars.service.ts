import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interfaces';
import { v4 as uudi } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uudi(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uudi(),
      brand: 'Toyota',
      model: 'Camry',
    },
    {
      id: uudi(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uudi(),
      brand: 'Honda',
      model: 'Accord',
    },
    {
      id: uudi(),
      brand: 'Jeep',
      model: 'Wrangler',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);
    return car;
  }

  create(createCarDto: CreateCarDto) {
    const newCar = {
      id: uudi(),
      ...createCarDto,
    };

    this.cars.push(newCar);

    return newCar;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.findOneById(id);

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = {
          ...carDB,
          ...updateCarDto,
          id,
        };
        return carDB;
      }
      return car;
    });

    return carDB;
  }

  delete(id: string) {
    this.findOneById(id);

    this.cars = this.cars.filter((car) => car.id !== id);

    return;
  }
}
