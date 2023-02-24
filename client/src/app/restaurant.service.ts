import { Injectable } from '@angular/core';
import { Restaurant, Comment } from './models';
import { HttpClient, HttpParams } from '@angular/common/http';
import { firstValueFrom, lastValueFrom } from 'rxjs';

@Injectable()
export class RestaurantService {
  constructor(private http: HttpClient) {}

  // TODO Task 2
  // Use the following method to get a list of cuisines
  // You can add any parameters (if any) and the return type
  // DO NOT CHNAGE THE METHOD'S NAME
  public getCuisineList(): Promise<string[]> {
    // Implememntation in here
    return firstValueFrom(this.http.get<string[]>('/api/cuisines'));
  }

  // TODO Task 3
  // Use the following method to get a list of restaurants by cuisine
  // You can add any parameters (if any) and the return type
  // DO NOT CHNAGE THE METHOD'S NAME
  public getRestaurantsByCuisine(cuisine: string): Promise<Restaurant[]> {
    // Implememntation in here
    return firstValueFrom(
      this.http.get<Restaurant[]>(`/api/${cuisine}/restaurants`)
    );
  }

  // TODO Task 4
  // Use this method to find a specific restaurant
  // You can add any parameters (if any)
  // DO NOT CHNAGE THE METHOD'S NAME OR THE RETURN TYPE
  public getRestaurant(lat: number, lng: number): Promise<Restaurant> {
    // Implememntation in here
    const params = new HttpParams().set('lat', lat).set('lng', lng);

    return lastValueFrom(this.http.get<Restaurant>('/map', { params }));
  }

  // 	// TODO Task 5
  // 	// Use this method to submit a comment
  // 	// DO NOT CHANGE THE METHOD'S NAME OR SIGNATURE
  // 	public postComment(comment: Comment): Promise<any> {
  // 		// Implememntation in here

  // 	}
}
