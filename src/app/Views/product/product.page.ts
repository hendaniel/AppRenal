import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/models/product";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../../Services/product.service";
import { Resultado } from "src/app/models/resultado";
import { Propiedad } from 'src/app/models/propiedad';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: "app-product",
  templateUrl: "./product.page.html",
  styleUrls: ["./product.page.scss"]
})
export class ProductPage implements OnInit {
  public product: Product;
  public comp: Resultado;
  public propiedades: Array<Propiedad> ;
  public selection: Array<Number>;
  constructor(
    private prodService: ProductService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.selection = this.userService.getUser().indexAlimento;
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
    
    return this.router.navigate(['/list-compare', this.comp]);
  }

  masInfo(){
    this.router.navigate(['/more-info-product']);
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
    this.product.propiedades = new Array();
    this.propiedades = new Array();
    this.propiedades = this.prodService.getNamesPropiedades();
    
  }
}
