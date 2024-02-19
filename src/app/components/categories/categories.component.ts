import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductModel } from 'src/app/models/ProductModel';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  @Input() categoryList!: string[]
  @Output() productsBySelectedCategory: EventEmitter<ProductModel[]>= new EventEmitter<ProductModel[]>();

  

  constructor(private _http: HttpClient) { }

 

  ngOnInit(): void {
    console.log(this.categoryList);
    
  }


  public handleClick(event: string) {
    console.log(event);
    this._http.get('https://fakestoreapi.com/products/category/'+ event).subscribe(response =>{
   
      //@ts-ignore
      this.productsBySelectedCategory.emit(response)
        
      })
}





}
