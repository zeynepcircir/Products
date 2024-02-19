import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category',
  
})
export class CategoryPipe implements PipeTransform {
  transform(value: string): string {
    if (value === "men's clothing") {
      return 'Erkek Kıyafet';
    } else if (value === 'jewelery') {
      return 'Mücevher';
    } else if (value === 'electronics') {
      return 'Elektronik';
    } else if (value === "women's clothing") {
      return 'Kadın Kıyafet';
    }
    return '';
  }



}


  
