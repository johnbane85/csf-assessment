import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from '../models';

@Component({
  selector: 'app-restaurant-cuisine',
  templateUrl: './restaurant-cuisine.component.html',
  styleUrls: ['./restaurant-cuisine.component.css'],
})
export class RestaurantCuisineComponent implements OnInit {
  // TODO Task 3
  // For View 2

  cuisine!: string;
  restaurants: Restaurant[] = [];

  constructor(
    private restaurantSvc: RestaurantService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cuisine = this.activeRoute.snapshot.params['cuisine'];
    this.restaurantSvc
      .getRestaurantsByCuisine(this.cuisine)
      .then((result) => {
        this.restaurants = result;
      })
      .catch((error) => {
        console.error('>>> error', error);
      });
  }
}
