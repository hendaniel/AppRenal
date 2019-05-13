import { Component, OnInit } from "@angular/core";
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
    if(productService.getListNameProducts() == null){
      this.productService.getNamesProducts().subscribe(resp => {
        this.products = resp;
        this.productService.setListNameProducts(resp);
      });
    }
    else{
      this.products = productService.getListNameProducts();
    }
  }

  searchProduct(event) {
    const text = event.target.value;
    this.textSearch = text;
  }

  viewProduct(product: Resultado) {
    this.router.navigate(["/product", product], {skipLocationChange: false,  replaceUrl: true});
  }

  ngOnInit() {}
}
