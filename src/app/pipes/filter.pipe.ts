import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "../models/product";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(productos: Product[], textSearch: string): Product[] {
    if (textSearch.length === 0) {
      return productos;
    }
    textSearch = textSearch.toLowerCase();
    return productos.filter(product => {
      return (
        product.nombre.toLowerCase().includes(textSearch) ||
        product.tipo.toLowerCase().includes(textSearch) ||
        product.categoria.toLowerCase().includes(textSearch)
      );
    });
  }
}
