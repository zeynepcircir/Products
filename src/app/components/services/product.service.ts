import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../../models/ProductModel';
import { Observable, of, tap } from 'rxjs';
import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productList: ProductModel[] = [];
  categoryList: string[] = [];

  constructor(private _http: HttpClient) {}

  getProducts(): Observable<ProductModel[]> {
    return this._http.get<ProductModel[]>('https://fakestoreapi.com/products');
  }

  getCategoryProducts(
    selectedCategory: StringMapWithRename
  ): Observable<ProductModel[]> {
    return this._http.get<ProductModel[]>(
      `https://fakestoreapi.com/products/category/` + selectedCategory
    );
  }
}
