import { Injectable, forwardRef } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Product } from "../models/product";
import { delay } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Resultado, Comparado } from '../models/resultado';
import { Observable } from 'rxjs';
import { Propiedad } from '../models/propiedad';

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private listNameProducts: Array<Resultado>;
  private names: Array<Propiedad>;
  constructor(private http: HttpClient) {
    this.names = new Array();
    console.log("CREATION");
    
  
    this.getPropiedades().subscribe(result => {
        console.log(result);
        let i = 0;
        result.forEach(e =>{
          e.unidad = e.unidad.replace("%B5", "µ");
          e.id = i++;
        });
        this.names = result;
      });
    
  }

  getNamesPropiedades(): Propiedad[]{
    return this.names;
  }
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

  getPropiedades() : Observable<Propiedad[]>{
    return this.http.get<Propiedad[]>(environment.urlGetPropiedades);
  }
}
