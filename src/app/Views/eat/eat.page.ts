import { Component, OnInit } from "@angular/core";
import { Resultado, DosAlimentos } from "../../models/resultado";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastController } from "@ionic/angular";
import { UserService } from "src/app/Services/user.service";
import { Historia } from "src/app/models/historia";

@Component({
  selector: "app-eat",
  templateUrl: "./eat.page.html",
  styleUrls: ["./eat.page.scss"]
})
export class EatPage implements OnInit {
  valor: number;
  alimento: Resultado;
  constructor(
    private active: ActivatedRoute,
    private router: Router,
    private toast: ToastController,
    private service: UserService
  ) {
    this.active.params.subscribe(res => {
      this.alimento = <Resultado>res;
    });

    this.valor = 0;
  }

  comer() {
    if (this.valor != 0) {
      let historia: Historia;
      this.service
        .addHistoria(this.alimento.id, this.valor)
        .subscribe(result => {
          historia = result;
          this.service.pushHistoria(historia);
        });
      this.router.navigate(["/product", this.alimento]);
      this.hasComido();
    } else {
      this.errorCero();
    }
  }

  ionViewWillEnter() {
    this.valor = 0;
  }
  backProduct() {
    this.router.navigate(["/product", this.alimento]);
  }

  async errorCero() {
    const toast = await this.toast.create({
      message: "El valor debe ser mayor que cero.",
      duration: 1000,
      position: "top",
      animated: true
    });
    toast.present();
  }

  async hasComido() {
    const toast = await this.toast.create({
      message:
        "Has comido " +
        this.valor +
        " gramos de " +
        this.alimento.nombre +
        " con exito!",
      duration: 500
    });
    toast.present();
  }

  ngOnInit() {}
}
