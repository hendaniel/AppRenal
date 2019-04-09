import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/models/product";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product",
  templateUrl: "./product.page.html",
  styleUrls: ["./product.page.scss"]
})
export class ProductPage implements OnInit {
  public product: Product;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(data => {
      this.product = <Product> data;
    });
  }

  ngOnInit() {}
}
