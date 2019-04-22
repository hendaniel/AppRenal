import { Pipe, PipeTransform } from '@angular/core';
import { Resultado } from '../../models/resultado';

@Pipe({
  name: 'filterComp'
})
export class FilterCompPipe implements PipeTransform {

  transform(productos: Resultado[], textSearch: string): Resultado[] {
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
