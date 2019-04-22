import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/models/product";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../../Services/product.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.page.html",
  styleUrls: ["./product.page.scss"]
})
export class ProductPage implements OnInit {
  public product: Product;

  constructor(
    private prodService: ProductService,
    private route: ActivatedRoute
  ) {
    this.prodService
      .getAliment(this.route.snapshot.paramMap.get("id"))
      .subscribe(prod => {
        this.product = prod;
      });
  }

  ngOnInit() {
    this.product = new Product();
    this.product.nombre = "";
  }
}
