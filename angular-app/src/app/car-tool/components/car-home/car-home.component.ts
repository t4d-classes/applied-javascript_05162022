import { Component, OnInit } from '@angular/core';

import { Car, NewCar } from '../../models/cars';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  cars: Car[] = [
    {
      id: 1, make: 'Tesla', model: 'S',
      year: 2022, color:'red', price: 120000,
    },
    {
      id: 1, make: 'Ford', model: 'Fusion Hybrid',
      year: 2021, color:'blue', price: 45000,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addCar(car: NewCar) {
    this.cars = [
      ...this.cars,
      {
        ...car,
        id: Math.max(...this.cars.map(c => c.id), 0) + 1,
      }
    ];
  }

  deleteCar(carId: number) {
    this.cars = this.cars.filter(c => c.id !== carId);
  }

}
