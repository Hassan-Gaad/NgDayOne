import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, NgModule, OnInit } from '@angular/core';
import { faEdit, faEye, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { Product } from 'src/app/_models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;

  faeye=faEye;
  faEdit=faEdit;
  faTrash=faTrashAlt;

  constructor() {
    // this.product={
    //   name:"camera",
    //   price:100,
    //   imgUrl:'assets/img/layout-styles.png',
    //   discount:30
    // }
   }

   getPrice(){
     return this.product.discount? this.product.price-this.product.discount:this.product.price;
   }

  ngOnInit(): void {
  }

}
