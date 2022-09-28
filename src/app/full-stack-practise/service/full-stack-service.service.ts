import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FullStackServiceService {
  get immutableFoods() {
    return this.allFoods;
  }

  constructor(private http: HttpClient) {}

  data = [];
  private allFoods: any;

  allFoodItems$ = new Subject<any>();

  getFoodData(): Observable<any> {
    let url = 'http://127.0.0.1:8000/food';
    return this.http.get(url);
  }

  addFoodItem(foodData: any) {
    let url = 'http://127.0.0.1:8000/food/create';
    return this.http.post(url, foodData);
  }

  // updateFoodItem(foodData: any) {
  //   console.log(foodData.id, 'id');
  //   let id = 1;
  //   let url = `http://127.0.0.1:8000/food/${id}`;
  //   return this.http.put(url, foodData);
  // }

  deleteItem(id: number): Observable<any> {
    let url = `http://127.0.0.1:8000/food/${id}`;
    return this.http.delete(url);
  }

  sortByName(): Observable<any> {
    let url = 'http://127.0.0.1:8000/food/sort';
    return this.http.get(url);
  }

  setFoodItems(items: any) {
    this.allFoods = items;
    this.allFoodItems$.next();
  }
}

// getAll() {
//   let url = 'http://localhost:8888/full-stack-practise/backend/api/read.php';

//   this.http.get(url).subscribe((data) => {
//     console.log('data from MAMP', data);
//     return (this.data = data as any);
//   });

//returns an observable.

// return this.http.get(url).pipe(
//   map((data: any) => {
//     return data['data'];
//   })
// );
//}
