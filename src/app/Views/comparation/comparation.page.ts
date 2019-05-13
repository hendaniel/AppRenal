import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Resultado, Comparado } from "src/app/models/resultado";
import { DosAlimentos } from "../../models/resultado";
import { ProductService } from "../../Services/product.service";

@Component({
  selector: "app-comparation",
  templateUrl: "./comparation.page.html",
  styleUrls: ["./comparation.page.scss"]
})
export class ComparationPage implements OnInit {
  public arreglo: Comparado[] = [];
  producto1: Resultado;
  producto2: Resultado;
  alimentos: DosAlimentos;

  constructor(
    private activateroute: ActivatedRoute,
    private productService: ProductService,
    private router : Router
  ) {
    this.producto1 = new Resultado();
    this.producto2 = new Resultado();

    this.alimentos = <DosAlimentos>this.activateroute.snapshot.params;

    var x = (this.producto1.id = this.alimentos.id_uno);
    this.producto1.nombre = this.alimentos.nombre_uno;
    this.producto1.tipo = this.alimentos.tipo_uno;
    this.producto1.categoria = this.alimentos.categoria_uno;

    var y = (this.producto2.id = this.alimentos.id_dos);
    this.producto2.nombre = this.alimentos.nombre_dos;
    this.producto2.tipo = this.alimentos.tipo_dos;
    this.producto2.categoria = this.alimentos.categoria_dos;

    this.productService.compareAliments(x, y).subscribe(resp => {
      this.arreglo = resp;
    });
  }

  backList() {
    return this.router.navigate(['/list-compare', this.producto1]);;
  }

  //[routerLink]="['/list-compare']"
  // routerLinkActive="router-link-active"

  ngOnInit() {}
}
