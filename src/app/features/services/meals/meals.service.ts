import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealsService {


  _httpClient = inject(HttpClient);
  
  constructor() { }
 
  getMeals(category:string):Observable<any>
  {
    return this._httpClient.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  }

  getAllMeals():Observable<any>
  {
    return this._httpClient.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
  }
  getCategories():Observable<any>
  {
    return this._httpClient.get(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`);
  }

  
}
