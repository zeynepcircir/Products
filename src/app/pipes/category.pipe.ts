import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category',
  
})
export class CategoryPipe implements PipeTransform {
  transform(value: string): string {
    if (value === "men's clothing") {
      return 'ERKEK KIYAFET';
    } else if (value === 'jewelery') {
      return 'MÜCEVHER';
    } else if (value === 'electronics') {
      return 'ELEKTRONİK';
    } else if (value === "women's clothing") {
      return 'KADIN KIYAFET';
    }
    return '';
  }



}


  
