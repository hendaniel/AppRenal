import { Component, OnInit } from "@angular/core";
import { Resultado } from "../../models/resultado";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastController } from "@ionic/angular";

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
    private toast: ToastController
  ) {
    this.active.params.subscribe(res => {
      this.alimento = <Resultado>res;
      console.log(this.alimento);
    });

    this.valor = 0;
  }

  comer() {
    if(this.valor != 0 ) this.hasComido();
  }

  backProduct() {
    this.router.navigate(["/product", this.alimento]);
  }

  async hasComido() {
    const toast = await this.toast.create({
      message: "Has comido " + this.valor + ' gramos de ' + this.alimento.nombre + " con exito!",
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {}
}
