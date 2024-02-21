import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category',
  
})
export class CategoryPipe implements PipeTransform {
  transform(value: string): string {
    if (value === "men's clothing") {
      return "MEN'S CLOTHING";
    } else if (value === 'jewelery') {
      return 'JEWELERY';
    } else if (value === 'electronics') {
      return 'ELECTRONICS';
    } else if (value === "women's clothing") {
      return "WOMEN'S CLOTHING";
    }
    return '';
  }



}


  
