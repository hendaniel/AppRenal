import { Component, OnInit } from "@angular/core";
import { UserService } from "../../Services/user.service";
import { NavController, ToastController } from "@ionic/angular";
import { user } from "src/app/models/user";
import { Propiedad } from "../../models/propiedad";
import { ProductService } from "../../Services/product.service";

@Component({
  selector: "app-preferences",
  templateUrl: "./preferences.page.html",
  styleUrls: ["./preferences.page.scss"]
})
export class PreferencesPage implements OnInit {
  indexPerfil: number[];
  indexAlimento: number[];
  propiedades: Propiedad[];
  usuario: user;
  constructor(
    private uService: UserService,
    private pService: ProductService,
    private nav: NavController,
    private toast: ToastController
  ) {
    this.usuario = this.uService.getUser();
    this.propiedades = this.pService.getNamesPropiedades();

    this.indexPerfil = new Array();
    this.indexAlimento = new Array();

    console.log(this.propiedades);
    console.log(this.indexAlimento);
    console.log(this.indexPerfil);
  }

  addNewIndexPerfil() {
    this.uService.setIndexPerfil(this.indexPerfil).subscribe(() => {
      this.mensaje("Preferencias actualizadas", "middle");
      this.usuario.indexPerfil = this.indexPerfil;
    });
  }

  addNewIndexAlimento() {
    this.uService.setIndexAlimentos(this.indexAlimento).subscribe(() => {
      this.mensaje("Preferencias actualizadas", "top");
      this.usuario.indexAlimento = this.indexAlimento;
    });
  }

  actualizar() {
    console.log(this.indexAlimento);
    console.log(this.indexPerfil);
    this.addNewIndexAlimento();
    this.addNewIndexPerfil();
    this.mensaje("Preferencias actualizadas", "bottom");
  }

  ionViewWillLeave() {
    this.indexAlimento = new Array();
    this.indexPerfil = new Array();
    this.usuario = new user();
  }

  ionViewDidLeave() {
    this.usuario = this.uService.getUser();
  }

  async mensaje(mensaje, pos) {
    const toast = await this.toast.create({
      message: mensaje,
      duration: 1000,
      position: pos
    });
    toast.present();
  }

  back() {
    return this.nav.back();
  }

  ngOnInit() {}
}
