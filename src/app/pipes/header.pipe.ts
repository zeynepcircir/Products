import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'header'
})
export class HeaderPipe implements PipeTransform {

  transform(value:string): string {
    if (value === 'Id') {
      return 'Numara';
    }else if(value === 'Title'){
      return 'Başlık';
    }else if(value === 'Category'){
      return 'Kategori';
    }else if(value === 'Price'){
      return 'Fiyat';
    }else if(value === 'Description'){
      return 'Açıklama';
    }else if(value === 'Image'){
      return 'Görsel';
    }else if(value === 'Actions'){
      return 'Hareketler';
    }
   return ''
  }

}
