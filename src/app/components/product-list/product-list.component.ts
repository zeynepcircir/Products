import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/ProductModel';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { HomeEditButtonComponent } from '../home-edit-button/home-edit-button.component';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/components/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [DialogService, MessageService],
})
export class ProductListComponent implements OnInit {
  products: any;

  productList: ProductModel[] = [];

  categoryList: string[] = [];
  selectedCategory: string = '';
  onClose: any;
  isTableSelected: boolean = false;
  today: Date = new Date();

  constructor(
    private dialogService: DialogService,
    private primengConfig: PrimeNGConfig,
    private _productService: ProductService
  ) {}

  show(product: ProductModel) {
    console.log(product);
    this.dialogService
      .open(HomeEditButtonComponent, {
        header: 'Choose a Product',
        width: '70%',
        contentStyle: { 'max-height': '500px', overflow: 'auto' },
        baseZIndex: 10000,
        data: product,
      })
      .onClose.subscribe((response: ProductModel) => {
        let index = this.productList.findIndex((pr) => pr.id === response.id);

        if (index !== -1) {
          this.productList[index] = response;
        }
      });
  }

  ngOnInit(): void {
    //lifecycle'da component ilk çalıştırıldığında devreye giren kısımdır
    this.primengConfig.ripple = true;

    this._productService.getProducts().subscribe((response) => {
      this.productList = response;

      this.productList?.forEach((pr) => {
        if (!this.categoryList.includes(pr?.category + '')) {
          this.categoryList.push(pr?.category + '');
        }
      });
    });
  }

  // const observable = new Observable((subscriber) => {   //observable için örnek rxjs
  //   //rxjs'te kullanılıyor
  //   subscriber.next(1);
  //   console.log('subscriber1', subscriber);

  //   subscriber.next(2);
  //   console.log('subscriber2', subscriber);
  //   subscriber.next(3);
  //   console.log('subscriber3', subscriber);
  //   setTimeout(() => {
  //     subscriber.next(4);
  //     console.log('subscriber4', subscriber);

  //     subscriber.complete();
  //   }, 1000);
  //   });

  //   observable.subscribe();
  //   console.log(observable);

  getProductsBySelectedCategory(event: ProductModel[]) {
    this.productList = event;
  }

  deleteProduct(product: ProductModel) {
    this.productList = this.productList.filter((pr: ProductModel) => {
      return pr.id !== product.id;
    });
  }
}
