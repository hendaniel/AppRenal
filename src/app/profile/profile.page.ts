import { Component, OnInit } from "@angular/core";
import { user } from "../models/user";
import { UserService } from "../Services/user.service";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"]
})
export class ProfilePage implements OnInit {

  ejemplos : any[];

  show: boolean;
  usuario: user;
  constructor(private userServices: UserService, private nav: NavController) {
    this.usuario = this.userServices.getUser();
    this.show = false;
    this.ejemplos = [{nombre:'Sodio', valor :15},{nombre:'Calorias', valor :30},{nombre:'Proteinas', valor :25}];
  }

  ngOnInit() {}

  ionViewWillEnter() {
    setTimeout(() => {
      this.show = true;
    }, 2000);
  }

  logout() {
    console.log("logout Clicked");
    this.userServices.logout();
    this.nav.navigateRoot("/login");
  }
}
