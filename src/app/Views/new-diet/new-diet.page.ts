import { Component, OnInit } from "@angular/core";
import { UserService } from "../../Services/user.service";
import { ActivatedRoute, Router } from "@angular/router";
import { user } from "src/app/models/user";
import { Dieta } from "../../models/dieta";
import { ToastController } from "@ionic/angular";
import { Propiedad } from "../../models/propiedad";
import { ProductService } from "../../Services/product.service";

@Component({
  selector: "app-new-diet",
  templateUrl: "./new-diet.page.html",
  styleUrls: ["./new-diet.page.scss"]
})
export class NewDietPage implements OnInit {
  usuario: user;
  dieta: Dieta;
  listaPropiedades: Propiedad[];

  constructor(
    private uService: UserService,
    private router: Router,
    private toast: ToastController,
    private pService: ProductService
  ) {
    this.usuario = this.uService.getUser();
    this.dieta = new Dieta();
    this.listaPropiedades = this.pService.getNamesPropiedades();
    this.listaPropiedades.sort((n1, n2) => {
      if (n1.nombre > n2.nombre) {
        return 1;
      }
      if (n1.nombre < n2.nombre) {
        return -1;
      }
      return 0;
    });
  }

 async crearDieta() {
    if (this.dieta.meta != 0 && this.dieta.propiedad != null) {
      await this.uService.addDietaService(this.dieta).subscribe(res => {
        this.uService.pushDieta(<Dieta>res);
        this.mensaje("Dieta agregada con exito!");
        this.router.navigate(["/diets"]);
      });
    } else {
      this.mensaje("Error, verifica los campos.");
    }
  }

  async mensaje(mensaje: string) {
    const toast = await this.toast.create({
      message: mensaje,
      duration: 500,
      position: "middle",
      animated: true,
      translucent: true
    });
    toast.present();
  }

  ngOnInit() {}
}
