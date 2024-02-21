import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductModel } from 'src/app/models/ProductModel';
import { ProductService } from 'src/app/components/services/product.service'; // ProductService'yi içeri aktarıyoruz.

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  @Input() categoryList!: string[];
  @Output() productsBySelectedCategory: EventEmitter<ProductModel[]> =
    new EventEmitter<ProductModel[]>();

  constructor(
    private _http: HttpClient,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    console.log(this.categoryList);
  }

  public handleClick(event: string) {
    console.log(event);
    //@ts-ignore
    this.productService.getCategoryProducts(event).subscribe((response) => {
      this.productsBySelectedCategory.emit(response);
    });
  }
}
