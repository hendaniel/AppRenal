import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Product } from "../models/product";
import { delay } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Resultado } from "../models/resultado";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getNamesProducts() {
    return this.http
      .get<Resultado[]>(environment.urlGetAllProducts)
      .pipe(delay(1000));
  }

  getAliment(id : string) {
    const body = new HttpParams().set("idAlimento", id);
    return this.http.post<Product>(environment.urlGetProductoByID, body);
  }
}
