import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../models';

@Component({
  selector: 'app-cuisine-list',
  templateUrl: './cuisine-list.component.html',
  styleUrls: ['./cuisine-list.component.css'],
})
export class CuisineListComponent implements OnInit {
  // TODO Task 2
  // For View 1

  cuisines: string[] = [];

  constructor(private restaurantSvc: RestaurantService) {}

  ngOnInit(): void {
    this.restaurantSvc
      .getCuisineList()
      .then((result) => {
        this.cuisines = result;
      })
      .catch((err) => {
        console.error('>>> error: ', err);
      });
  }
}
