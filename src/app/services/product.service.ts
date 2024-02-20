import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../models/ProductModel';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productList: ProductModel[] = [];
  categoryList: string[] = [];

  constructor(private _http: HttpClient) {}

  getProducts(): Observable<ProductModel[]> {
    return this._http.get('https://fakestoreapi.com/products').pipe(
      tap((response: any) => {
        this.productList = response;
      })
    );
  }
}
