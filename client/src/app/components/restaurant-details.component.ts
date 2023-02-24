import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Route } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css'],
})
export class RestaurantDetailsComponent implements OnInit {
  // TODO Task 4 and Task 5
  // For View 3

  restaurant_name!: string;
  cuisine!: string;
  address!: string;
  imgUrl!: string;

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private restaurantSvc: RestaurantService
  ) {}

  ngOnInit(): void {
    this.form = this.createForm();
  }

  postRating() {}

  onBack() {}

  createForm(): FormGroup {
    return this.fb.group({
      name: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      rating: this.fb.control(1, [Validators.required]),
      comment: this.fb.control('Type Here', [Validators.required]),
    });
  }
}
