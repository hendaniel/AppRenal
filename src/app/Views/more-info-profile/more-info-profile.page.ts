import { Component, OnInit } from "@angular/core";
import { Propiedad, Informacion } from "../../models/propiedad";
import { user } from "../../models/user";
import { ProductService } from "../../Services/product.service";
import { UserService } from "../../Services/user.service";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-more-info-profile",
  templateUrl: "./more-info-profile.page.html",
  styleUrls: ["./more-info-profile.page.scss"]
})
export class MoreInfoProfilePage implements OnInit {
  propiedades: Propiedad[];
  usuario: user;
  info: Informacion[];
  constructor(
    private pService: ProductService,
    private uService: UserService,
    private nav: NavController
  ) {
    this.propiedades = this.pService.getNamesPropiedades();
    this.usuario = this.uService.getUser();
    this.info = new Array<Informacion>();
    for (let i = 0; i < this.propiedades.length; i++) {
      this.info[i] = new Informacion();
      this.info[i].id = this.propiedades[i].id;
      this.info[i].nombre = this.propiedades[i].nombre;
      this.info[i].valor = this.usuario.propiedades[i];
      this.info[i].unidad = this.propiedades[i].unidad;
    }

    this.info.sort((x, y) => {
      return x.nombre.localeCompare(y.nombre + "");
    });
  }

  //-------LiveCycles de IONIC--------------------xd
  ionViewWillEnter() {
    this.usuario = this.uService.getUser();
    this.info = new Array<Informacion>();
  }

  ionViewDidEnter() {
    for (let i = 0; i < this.propiedades.length; i++) {
      this.info[i] = new Informacion();
      this.info[i].id = this.propiedades[i].id;
      this.info[i].nombre = this.propiedades[i].nombre;
      this.info[i].valor = this.usuario.propiedades[i];
      this.info[i].unidad = this.propiedades[i].unidad;
    }
    this.info.sort((x, y) => {
      return x.nombre.localeCompare(y.nombre + "");
    });
  }

  ionViewWillLeave() {
    this.usuario = new user();
    this.info = new Array();
  }

  ionViewDidLeave() {
    console.log("Salio completamente de mas info perfil.");
  }

  //-------LiveCycles de IONIC--FIN--------------xd

  back() {
    this.nav.navigateBack(["/profile"]);
  }
  ngOnInit() {
  }
}
