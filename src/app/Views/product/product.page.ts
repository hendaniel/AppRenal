import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/models/product";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../../Services/product.service";
import { Resultado } from "src/app/models/resultado";
import { Propiedad } from 'src/app/models/propiedad';

@Component({
  selector: "app-product",
  templateUrl: "./product.page.html",
  styleUrls: ["./product.page.scss"]
})
export class ProductPage implements OnInit {
  public product: Product;
  public comp: Resultado;
  public propiedades: Array<Propiedad> ;
  constructor(
    private prodService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.comp = new Resultado();
    this.prodService
      .getAliment(this.route.snapshot.paramMap.get("id"))
      .subscribe(prod => {
        this.product = prod;
      });
  }

  comparar(product : Resultado) {
    this.comp.id = product.id;
    this.comp.nombre = product.nombre;
    this.comp.tipo = product.tipo;
    this.comp.categoria = product.categoria;
    
    console.log(this.comp);
    return this.router.navigate(['/list-compare', this.comp]);
  }

  comer(product:Resultado){
    this.comp.id = product.id;
    this.comp.nombre = product.nombre;
    this.comp.tipo = product.tipo;
    this.comp.categoria = product.categoria;
    this.router.navigate(['/eat', this.comp]);
  }

  ngOnInit() {
    this.product = new Product();
    this.product.nombre = "";
    this.propiedades = new Array();
    this.propiedades = this.prodService.getNamesPropiedades();
    console.log("AQUi");
    console.log(this.propiedades);
    
    
  }
}
