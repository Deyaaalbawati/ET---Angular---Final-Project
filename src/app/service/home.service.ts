import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor( private http:HttpClient){   }

  getCategory()
  {
    return this.http.get('https://localhost:44363/api/category/getCategory');
  }


  getCourse(){
    return this.http.get('https://localhost:44363/api/course/getCourse');

  }

}
