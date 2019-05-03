import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../Services/product.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Resultado, DosAlimentos } from "../../models/resultado";
import { ToastController } from '@ionic/angular';

@Component({
  selector: "app-list-compare",
  templateUrl: "./list-compare.page.html",
  styleUrls: ["./list-compare.page.scss"]
})
export class ListComparePage implements OnInit {
  products: Resultado[] = [];
  textSearch = "";
  ids: DosAlimentos;

  constructor(
    private productService: ProductService,
    private router: Router,
    private ativateroute: ActivatedRoute,
    private toastController: ToastController
  ) {
    this.productService
      .getNamesProducts()
      .subscribe(resp => (this.products = resp));

    this.ids = new DosAlimentos();
    this.ids.id_uno = Number.parseInt(
      this.ativateroute.snapshot.paramMap.get("id")
    );
    this.ids.nombre_uno = this.ativateroute.snapshot.paramMap.get("nombre");
    this.ids.tipo_uno = this.ativateroute.snapshot.paramMap.get("tipo");
    this.ids.categoria_uno = this.ativateroute.snapshot.paramMap.get(
      "categoria"
    );
  }

  searchProduct(event) {
    const text = event.target.value;
    this.textSearch = text;
  }

  async compare(product: Resultado) {
    this.ids.id_dos = product.id;
    this.ids.nombre_dos = product.nombre;
    this.ids.tipo_dos = product.tipo;
    this.ids.categoria_dos = product.categoria;

    console.log(this.ids);
    if (this.ids.id_uno != this.ids.id_dos) {
      return this.router.navigate(["/comparation", this.ids]);
    } else {
      console.log("Los productos a comparar deben ser diferentes.");
      const toast = await this.toastController.create({
        message: 'Los productos a comparar deben ser diferentes.',
        duration: 2000
      });
      toast.present();
    }
  }

  ngOnInit() {}
}