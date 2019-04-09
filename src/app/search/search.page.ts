import { Component, OnInit } from "@angular/core";
import { Product } from "../models/product";
import { ProductService } from "../Services/product.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-search",
  templateUrl: "./search.page.html",
  styleUrls: ["./search.page.scss"]
})
export class SearchPage implements OnInit {
  products: Product[] = [];
  textSearch = "";

  constructor(private productService: ProductService, private router: Router) {
    this.productService.getAliments().subscribe(resp => (this.products = resp));
  }

  searchProduct(event) {
    const text = event.target.value;
    this.textSearch = text;
  }

  viewProduct(product: Product) {
    this.router.navigate(["/product", product], {skipLocationChange: false,  replaceUrl: true});
  }

  ngOnInit() {}
}
