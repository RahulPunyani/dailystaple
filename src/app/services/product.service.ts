import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { tap, map, filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "http://localhost:63914/";

  constructor(public http:HttpClient, private firestore: AngularFirestore) { }

  getProducts()
  {
    return this.http.get(this.apiUrl + 'api/Products').pipe(map(data => JSON.parse(data.toString())));    
  }
  GetCityList()
  {
    return this.http.get(this.apiUrl + 'api/Products/GetCityList').pipe(map(data => JSON.parse(data.toString())));
  }
}
