import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http: HttpClient) { }

  getAliments() {
    return this.http.get<Product[]>('http://localhost:8080/getAllAlimentos') 
    .pipe(
      delay(1000)
      );
  }
}
