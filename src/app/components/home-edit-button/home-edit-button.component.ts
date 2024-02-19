import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/ProductModel';
import { ProductListComponent } from '../product-list/product-list.component';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home-edit-button',
  templateUrl: './home-edit-button.component.html',
  styleUrls: ['./home-edit-button.component.scss'],
})
export class HomeEditButtonComponent implements OnInit {
  product: ProductModel | null = null;
  value1: string = '';

  profileForm = new FormGroup({
    category: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl(''),
    price: new FormControl(''),
    title: new FormControl(''),
    id: new FormControl('')
  });

  constructor(
    private dynamicDialogRef: DynamicDialogRef,
    dynamicDialogConfig: DynamicDialogConfig
  ) {
    console.log(dynamicDialogConfig.data);
    this.product = dynamicDialogConfig.data;

    this.profileForm.patchValue(dynamicDialogConfig.data);
  }

  ngOnInit(): void {}

  selectProduct({ product }: { product: ProductListComponent }) {}

  cancel() {
    this.dynamicDialogRef.close();
  }

  save() {
    this.dynamicDialogRef.close(this.profileForm.getRawValue());
  }
}
