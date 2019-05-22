import { Component, OnInit, OnDestroy, DoCheck, OnChanges, SimpleChanges, AfterViewInit, AfterViewChecked, AfterContentInit } from "@angular/core";
import { user } from "../models/user";
import { UserService } from "../Services/user.service";
import { NavController } from "@ionic/angular";
import { ProductService } from '../Services/product.service';
import { Historia } from '../models/historia';
import { Propiedad } from '../models/propiedad';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"]
})
export class ProfilePage implements OnInit{

  show: boolean;
  usuario: user;
  historias: Historia[];
  propiedades: Propiedad[];
  constructor(private userServices: UserService,
     private nav: NavController,
     private productServices: ProductService) {
       this.usuario = new user();
       this.usuario.propiedades = new Array();
       this.historias = new Array();

    this.show = false;
    console.log(this.usuario);
  }

  ngOnInit() {
    setTimeout(() => {
      this.show = true;
    }, 2000);

    console.log("INICIA");
  }
  
  ionViewWillEnter(){
    this.usuario = this.userServices.getUser();
    this.historias = this.userServices.getHistorias();
    this.propiedades = this.productServices.getNamesPropiedades();
    console.log(this.usuario.indexPerfil);
  }

  masInfo(){
    this.nav.navigateForward(['/more-info-profile']);
  }

  ngOnDestroy(){
    console.log("Finaliza");
  }



  logout() {
    console.log("logout Clicked");
    this.usuario = new user();
    this.usuario.dietas = new Array();
    this.usuario.propiedades = new Array();
    this.historias = new Array();
    this.userServices.logout();
    this.nav.navigateRoot("/login");
  }

  mostrar(){
    return this.usuario.propiedades.length > 0;
  }
}
