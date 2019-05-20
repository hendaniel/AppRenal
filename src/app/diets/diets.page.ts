import { Component, OnInit } from "@angular/core";
import { UserService } from "../Services/user.service";
import { Dieta } from "../models/dieta";
import { user } from "../models/user";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-diets",
  templateUrl: "./diets.page.html",
  styleUrls: ["./diets.page.scss"]
})
export class DietsPage implements OnInit {
  dietas: Dieta[];
  usuario: user;
  constructor(private service: UserService, private nav: NavController) {
    this.usuario = new user();
    this.dietas = new Array();
    this.usuario = this.service.getUser();
    this.dietas = this.usuario.dietas;
  }

  dietasExist(): boolean {
    return this.dietas.length > 0;
  }

  ionViewWillEnter(){
    this.usuario = this.service.getUser();
    this.dietas = this.usuario.dietas;
    console.log("Dietas cargadas");
  }
  

  nuevaDieta() {
    return this.nav.navigateForward(["/new-diet"]);
  }

  ngOnInit() {}
}
