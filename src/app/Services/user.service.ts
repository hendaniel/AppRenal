import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { user } from '../models/user';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usuario: user;
  private logged: boolean;
  private logToken = ">.<";

  constructor(private http: HttpClient) {
    
  }

   setUser(usuario: user){
    this.usuario = usuario;
    this.usuario.contraseña = "NO SEA SAPO";
    this.logged = true;
    localStorage.setItem(this.logToken, JSON.stringify(this.usuario));
  }

   isLogin():boolean{
     if(!this.logged && localStorage.getItem(this.logToken) != null){
       this.restoreUser();
       this.logged = true;
     }
     return this.logged;
   }

   logout(){
     localStorage.removeItem(this.logToken);
     this.logged = false;
   }

   restoreUser(){
     this.usuario = JSON.parse(localStorage.getItem(this.logToken));
   }

   getUser(): user {
     return this.usuario;
   }


   login(correo: string, password: string){
    const body = new HttpParams().set('correo',correo).set('contrasena',password);
    return this.http.post<user>(environment.urlLogin, body);
   }

   registro(nombre: string, correo: string, fecha:string, password: string) {
    const body = new HttpParams().set('nombre',nombre).set('correo',correo).set('fecha',fecha).set('contrasena',password);
    return this.http.post<string>(environment.urlRegistro, body);
   }
}
