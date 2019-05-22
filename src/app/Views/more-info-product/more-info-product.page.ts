import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../Services/product.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "../../models/product";
import { Propiedad } from '../../models/propiedad';

@Component({
  selector: "app-more-info-product",
  templateUrl: "./more-info-product.page.html",
  styleUrls: ["./more-info-product.page.scss"]
})
export class MoreInfoProductPage implements OnInit {
  producto: Product;
  propiedades : Propiedad[];
  constructor(
    private pService: ProductService,
    private activated: ActivatedRoute,
    private router: Router
  ) {
    this.producto = new Product();
    this.pService
      .getAliment(this.activated.snapshot.paramMap.get("id"))
      .subscribe(prod => {
        this.producto = prod;
        console.log(this.producto);
      });
  }

  backProduct() {
    this.router.navigate(["/product", {id: this.producto.id}]);
  }

  ngOnInit() {
    this.producto = new Product();
    this.producto.nombre = "";
    this.producto.propiedades = new Array();
    this.propiedades = new Array();
    this.propiedades = this.pService.getNamesPropiedades();
    
  }
}
