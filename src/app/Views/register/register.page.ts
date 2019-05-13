import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/Services/user.service";
import { ToastController, NavController } from "@ionic/angular";
import { DatePipe } from '@angular/common';

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"]
})
export class RegisterPage implements OnInit {
  nombre: string;
  correo: string;
  fecha: Date;
  contrasena: string;
  contrasenaDos: string;
  hide : boolean;

  constructor(
    public services: UserService,
    private toastController: ToastController,
    private nav: NavController,
    public datepipe: DatePipe
  ) {
    this.hide = true;
    this.nombre = "";
    this.correo = "";
    this.fecha = new Date();
    this.contrasena = "";
    this.contrasenaDos = "";
  }

  ngOnInit() {}

  register() {
    // console.log(this.fecha);
    //falta hacer validaciones de los campos
    let f = this.datepipe.transform(this.fecha, "d/MM/yyyy").toString();
    
    
    if (this.contrasena === this.contrasenaDos) {
      this.services
        .registro(this.nombre, this.correo, f, this.contrasena)
        .subscribe(result => {
          console.log(result);
          var message = JSON.parse(JSON.stringify(result));
          if (message.status == "ok") {
            this.registrado();
            console.log("REGISTRADO");
            this.nav.navigateBack(["/login"]);
          } else {
            this.errorRegistro();
            console.error("ERROR AL REGISTRAR");
          }
        });
    } else {
      this.errorContrasena();
      console.error("ERROR CONTRASEÑA");
    }
  }

  async registrado() {
    const toast = await this.toastController.create({
      message: "Registrado con exito!",
      duration: 2000
    });
    toast.present();
  }

  async errorRegistro() {
    const toast = await this.toastController.create({
      message: "No se ha podido registrar, intente de nuevo.",
      duration: 2000
    });
    toast.present();
  }

  async errorContrasena() {
    const toast = await this.toastController.create({
      message: "Las contraseñas no coinciden.",
      duration: 2000
    });
    toast.present();
  }
}
