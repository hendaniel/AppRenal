import { Component, OnInit } from "@angular/core";
import { user } from "src/app/models/user";
import { NavController, ToastController } from "@ionic/angular";
import { SearchPage } from "src/app/search/search.page";
import { UserService } from "src/app/Services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  usuario: user;
  correo: string;
  password: string;
  constructor(
    public navCtrl: NavController,
    public servicios: UserService,
    private toastController: ToastController
  ) {
    if (servicios.isLogin()) this.navCtrl.navigateForward("/home");
  }

  login() {
    this.servicios.login(this.correo, this.password).subscribe(result => {
      if (result != null) {
        this.servicios.setUser(result);
        this.navCtrl.navigateForward("/search");
      } else {
        this.error();
      }
    });
  }
  register() {
    this.navCtrl.navigateForward("/register");
  }
  ngOnInit() {}

  // POR HACER
  async error() {
    if (this.correo == null || this.password == null) {
      const toast = await this.toastController.create({
        message: "Completa todos los campos",
        duration: 2000
      });
      toast.present();
    } else if (this.correo.trim() == "" || this.password.trim() == "") {
      const toast = await this.toastController.create({
        message: "Completa todos los campos",
        duration: 2000
      });
      toast.present();
    }else {
      const toast = await this.toastController.create({
        message: "Verifica el correo o la contraseña",
        duration: 2000,
        color : "primary"
      });
      toast.present();
    }
  }
}
