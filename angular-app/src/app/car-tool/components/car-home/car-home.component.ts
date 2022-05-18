import { Component, OnInit } from '@angular/core';

import { Car } from '../../models/cars';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  cars: Car[] = [
    { id: 1, make: 'a', model: 'c', year: 1900, color:'b', price: 0}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
