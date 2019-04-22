import { Component, OnInit } from "@angular/core";
import { Product } from "../models/product";
import { ProductService } from "../Services/product.service";
import { Router } from "@angular/router";
import { Resultado } from '../models/resultado';

@Component({
  selector: "app-search",
  templateUrl: "./search.page.html",
  styleUrls: ["./search.page.scss"]
})
export class SearchPage implements OnInit {
  products: Resultado[] = [];
  textSearch = "";

  constructor(private productService: ProductService, private router: Router) {
    this.productService.getNamesProducts().subscribe(resp => (this.products = resp));
  }

  searchProduct(event) {
    const text = event.target.value;
    this.textSearch = text;
  }

  viewProduct(product: Resultado) {
    this.router.navigate(["/product", product], {skipLocationChange: true,  replaceUrl: true});
  }

  ngOnInit() {}
}
