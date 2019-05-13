import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Product } from "../models/product";
import { delay } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Resultado, Comparado } from '../models/resultado';

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private listNameProducts: Array<Resultado>;
  constructor(private http: HttpClient) {}

  getListNameProducts(){
    return this.listNameProducts;
  }

  setListNameProducts(list: Resultado[]){
    this.listNameProducts = list;
  }


  getNamesProducts() {
    return this.http
      .get<Resultado[]>(environment.urlGetAllProducts)
      .pipe(delay(150));
  }

  getAliment(id : string) {
    const body = new HttpParams().set("idAlimento", id);
    return this.http.post<Product>(environment.urlGetProductoByID, body);
  }

  compareAliments(id1 , id2){
    const body = new HttpParams().set('idAlimento1', id1).set('idAlimento2', id2);
    return this.http.post<Comparado[]>(environment.urlCompareAliment, body);
  }
}
