import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  constructor() {
    // this.product={
    //   name:"camera",
    //   price:100,
    //   imgUrl:'./assets/img/layout-styles.png',
    //   discount:30
    // }
   }

   getPrice(){
     return this.product.discount? this.product.price-this.product.discount:this.product.price;
   }

  ngOnInit(): void {
  }

}
