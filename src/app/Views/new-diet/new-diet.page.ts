import { Component, OnInit } from "@angular/core";
import { UserService } from "../../Services/user.service";
import { Router } from "@angular/router";
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
    private userService: UserService,
    private router: Router,
    private toast: ToastController,
    private productService: ProductService
  ) {
    this.usuario = this.userService.getUser();
    this.dieta = new Dieta();
    this.removeUsed();
    this.listaPropiedades.sort((x, y) => {
      return x.nombre.localeCompare(y.nombre + "");
    });
  }

  async crearDieta() {
    if (
      this.dieta.meta != null &&
      this.dieta.meta != 0 &&
      this.dieta.propiedad != null
    ) {
      await this.userService.addDietaService(this.dieta).subscribe(res => {
        this.userService.pushDieta(res);
        this.mensaje("Dieta agregada con exito!");
        this.router.navigate(["/diets"]);
      });
    } else {
      this.mensaje("La meta debe ser mayor que cero.");
    }
  }

  cancelar() {
    this.dieta = new Dieta();
    this.router.navigate(["/diets"]);
  }

  async mensaje(mensaje: string) {
    const toast = await this.toast.create({
      message: mensaje,
      duration: 1000,
      position: "top",
      animated: true
    });
    toast.present();
  }

  removeUsed() {
    let list: Propiedad[] = this.productService.getNamesPropiedades();
    let comp: number[] = new Array();
    this.usuario.dietas.forEach(e => comp.push(e.propiedad.id));
    comp = comp.sort((x, y) => {
      return x - y;
    });

    this.listaPropiedades = new Array();

    let i = 0,
      n = comp.length;
    list.forEach(e => {
      if (i < n)
        if (e.id != comp[i]) this.listaPropiedades.push(e);
        else i++;
      else this.listaPropiedades.push(e);
    });
  }

  //-------LiveCycles de IONIC--------------------xd
  ionViewWillEnter() {
    this.usuario = this.userService.getUser();
    this.dieta = new Dieta();
    this.removeUsed();
    this.listaPropiedades.sort((x, y) => {
      return x.nombre.localeCompare(y.nombre + "");
    });
    console.log("1) New-dieta: Entrando...");
  }

  ionViewDidEnter() {
    console.log(
      "2) New-dieta: Pagina cargada por completo. \n Tamaño listaPropiedades = " +
        this.listaPropiedades.length
    );
    console.log(<user> this.usuario);
  }

  ionViewWillLeave() {
    this.dieta = new Dieta();
    this.listaPropiedades = new Array();
    console.log("3) New-dieta: Saliendo de la pagina...");
  }

  ionViewDidLeave() {
    this.dieta = new Dieta();
    this.listaPropiedades = new Array();
    console.log(
      "4) New-dieta: Ya fuera de la pagina. \n Tamaño listaPropiedades = " + this.listaPropiedades.length
    );
  }

  //-------LiveCycles de IONIC--FIN--------------xd

  ngOnInit() {}
}
