import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product",
  templateUrl: "./product.page.html",
  styleUrls: ["./product.page.scss"]
})
export class ProductPage implements OnInit {
  public numero: number;
  constructor() {
    this.numero = 15;
    this.color();
  }

  ngOnInit() {
    this.color();
  }

  color(): String {
    if (this.numero > 15) {
      return "primary";
    } else if (this.numero > 20) {
      return "secondary";
    } else {
      return "tertiary";
    }
  }
}
