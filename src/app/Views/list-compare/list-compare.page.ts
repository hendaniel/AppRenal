import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { Router } from '@angular/router';
import { Resultado } from '../../models/resultado';

@Component({
  selector: 'app-list-compare',
  templateUrl: './list-compare.page.html',
  styleUrls: ['./list-compare.page.scss'],
})
export class ListComparePage implements OnInit {

  products: Resultado[] = [];
  textSearch = "";

  constructor(private productService: ProductService, private router: Router) {
    this.productService.getNamesProducts().subscribe(resp => (this.products = resp));
  }

  searchProduct(event) {
    const text = event.target.value;
    this.textSearch = text;
  }

  ngOnInit() {}

}
