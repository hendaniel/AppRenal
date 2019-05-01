import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { user } from '../models/user';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

   }

   login(correo: string, password: string){
    const body = new HttpParams().set('correo',correo).set('contrasena',password);
    return this.http.post<user>(environment.urlLogin, body);
   }

   registro(nombre: string, correo: string, fecha:string, password: string){
    const body = new HttpParams().set('nombre',nombre).set('correo',correo).set('fecha',fecha).set('contrasena',password);
    return this.http.post<user>(environment.urlRegistro, body);
   }
}
