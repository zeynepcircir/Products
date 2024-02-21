import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductModel } from 'src/app/models/ProductModel';
import { ProductService } from 'src/app/components/services/product.service'; // ProductService'yi içeri aktarıyoruz.
import { log } from 'console';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categoryList: string[] = [];
  @Output() productsBySelectedCategory: EventEmitter<ProductModel[]> =
    new EventEmitter<ProductModel[]>();

  constructor(
    private _http: HttpClient,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    console.log(this.categoryList);
    this.getCategories();
  }

  handleClick(event: string | null) {
    console.log(event);
    if (event) {
      //@ts-ignore
      this.productService.getCategoryProducts(event).subscribe((response) => {
        this.productsBySelectedCategory.emit(response);
      });
    } else {
      this.productService.getProducts().subscribe((response) => {
        this.productsBySelectedCategory.emit(response);
      });
    }
  }

  getCategories() {
    this.productService.getCategories().subscribe((response) => {
      this.categoryList = response;
    });
  }
}
