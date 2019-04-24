import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../Services/product.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Resultado, Ids } from "../../models/resultado";

@Component({
  selector: "app-list-compare",
  templateUrl: "./list-compare.page.html",
  styleUrls: ["./list-compare.page.scss"]
})
export class ListComparePage implements OnInit {
  products: Resultado[] = [];
  textSearch = "";

  constructor(
    private productService: ProductService,
    private router: Router,
    private ativateroute: ActivatedRoute
  ) {
    this.productService
      .getNamesProducts()
      .subscribe(resp => (this.products = resp));
  }

  searchProduct(event) {
    const text = event.target.value;
    this.textSearch = text;
  }

  compare(product: Resultado) {
    var ids: Ids = new Ids();
    var id1 = this.ativateroute.snapshot.paramMap.get("id");
    ids.id_uno = id1;
    ids.id_dos = product.id;
    console.log(id1 + " " + product.id);
    if (ids.id_uno != ids.id_dos) {
      return this.router.navigate(["/comparation", ids]);
    } else {
      console.log("Los productos a comparar deben ser diferentes.");
    }
  }

  ngOnInit() {}
}
