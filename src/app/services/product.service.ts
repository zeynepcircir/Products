import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../models/ProductModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  productList: ProductModel[] = []
  categoryList: string[] = []

  constructor(private _http: HttpClient) { }

  loadProducts() {
    this._http.get('https://fakestoreapi.com/products').subscribe(response => {
  
  //@ts-ignore
  this.productList = response

  console.log(this.productList);
  

  
    })

  
  }

}
