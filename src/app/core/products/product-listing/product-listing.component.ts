import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product.model';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {

  productListArray:Product[];
  constructor() {
    this.productListArray=[
      {name:"Camera1",price:100,imgUrl:"assets/img/layout-styles.png",discount:20},
      {name:"Camera2",price:100,imgUrl:"assets/img/layout-styles.png",discount:40},
      {name:"Camera3",price:200,imgUrl:"assets/img/layout-styles.png"},
      {name:"Camera4",price:300,imgUrl:"assets/img/layout-styles.png",discount:60},
      {name:"Camera5",price:400,imgUrl:"assets/img/layout-styles.png",discount:20},
      {name:"Camera6",price:500,imgUrl:"assets/img/layout-styles.png",discount:10},
      {name:"Camera7",price:600,imgUrl:"assets/img/layout-styles.png"},
      {name:"Camera8",price:700,imgUrl:"assets/img/layout-styles.png",discount:30},
      {name:"Camera9",price:800,imgUrl:"assets/img/layout-styles.png",discount:30},
    ]
   }

  ngOnInit(): void {
  }

}
