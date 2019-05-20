import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { user } from '../models/user';
import { environment } from "src/environments/environment";
import { Historia } from '../models/historia';
import { Observable } from 'rxjs';
import { Dieta } from '../models/dieta';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usuario: user;
 // private historias: Array<Historia>;
  private logged: boolean;
  private logToken = ">.<";

  constructor(private http: HttpClient) {
  }

   setUser(usuario: user){
    this.usuario = usuario;
    this.usuario.propiedades = new Array<number>();
    //this.setHistorias();
    this.usuario.historias.forEach(e => {
      e.time = new Date(e.time);
      this.comer(e);
    });
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
     this.usuario = null;
     //this.historias = null;
     this.logged = false;
   }

   restoreUser(){
     this.usuario = JSON.parse(localStorage.getItem(this.logToken));
    
     this.getUserById(this.usuario.id).subscribe(result => {
       this.usuario = result;
       this.usuario.propiedades = new Array<number>();
       this.usuario.dietas.forEach(e =>{
         let s: string = JSON.stringify(e.propiedad);
         e.propiedad = JSON.parse(JSON.parse(s));
       })
       console.log(this.usuario);
       
       //this.setHistorias();
       this.usuario.historias.forEach(e => {
        e.time = new Date(e.time);
        this.comer(e);
      });
     });
   }

   getUserById(id: number):Observable<user>{
    const body = new HttpParams().set('id', id +"");
    return this.http.post<user>(environment.urlGetUserById, body);
   }
   getHistorias(): Historia[]{
     return this.usuario.historias;
   }
/*
   setHistorias(){
    this.getHistoriasService().subscribe(result => {
      result.forEach(e => {
        e.time = new Date(e.time);
        this.comer(e);
      });
      this.historias = result;
      console.log(this.historias);
      
    });
   }
   */

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


   addHistoria(idAlimento: number, cantidad: number): Observable<Historia>{

    const body = new HttpParams()
    .set('idUsuario',this.usuario.id + "")
    .set('idAlimento',idAlimento + "")
    .set('cantidad',cantidad + "");
    console.log(body);
    
    return this.http.post<Historia>(environment.urlAddHistoria, body);
   }

   pushHistoria(historia: Historia){
    historia.time = new Date(historia.time);
    this.usuario.historias.unshift(historia);
    this.comer(historia);
    //console.log(this.historias);
    
   }

   comer(historia: Historia){
    var i = 0;
    
    historia.alimento.propiedades.forEach(e =>{
      if(this.usuario.propiedades.length == i)
        this.usuario.propiedades.push(0.0);
      this.usuario.propiedades[i++] += historia.cantidad * e / 100.0;
    });
   }

   getHistoriasService():Observable<Historia[]>{
    const body = new HttpParams()
    .set('idUsuario',this.usuario.id + "");
    return this.http.post<Historia[]>(environment.urlGetHistorias, body);
   }

   pushDieta(dieta: Dieta){
    this.usuario.dietas.push(dieta);
   }
   addDietaService(dieta: Dieta): Observable<Dieta>{
    const body = new HttpParams()
    .set('idUsuario',this.usuario.id + "")
    .set("propiedad", JSON.stringify(dieta.propiedad) + "")
    .set("meta", dieta.meta + "");
    return this.http.post<Dieta>(environment.urlAddDieta, body);
   }
}
