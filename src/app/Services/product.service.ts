import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { delay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http: HttpClient) { }

  getAliments() {
    return this.http.get<Product[]>(environment.urlGetAllProducts) 
    .pipe(
      delay(1000)
      );
  }
}
