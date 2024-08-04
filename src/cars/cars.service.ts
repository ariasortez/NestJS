import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: 2,
      brand: 'Toyota',
      model: 'Camry',
    },
    {
      id: 3,
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: 4,
      brand: 'Honda',
      model: 'Accord',
    },
    {
      id: 5,
      brand: 'Jeep',
      model: 'Wrangler',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);
    return car;
  }
}
