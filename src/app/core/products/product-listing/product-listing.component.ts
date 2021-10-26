import { Component,EventEmitter , OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_models/product.model';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  productListArray: Product[];
  @Output() newProductAdded = new EventEmitter<Product>();
  constructor() {
    this.productListArray = [
      {id:1, name: "Camera1", price: 100, imgUrl: "assets/img/layout-styles.png", discount: 20 },
      {id:2, name: "Camera2", price: 100, imgUrl: "assets/img/layout-styles.png", discount: 40 },
      {id:3, name: "Camera3", price: 200, imgUrl: "assets/img/layout-styles.png" },
      {id:4, name: "Camera4", price: 300, imgUrl: "assets/img/layout-styles.png", discount: 60 },
      {id:5, name: "Camera5", price: 400, imgUrl: "assets/img/layout-styles.png", discount: 20 },
      {id:6, name: "Camera6", price: 500, imgUrl: "assets/img/layout-styles.png", discount: 10 },
      {id:7, name: "Camera7", price: 600, imgUrl: "assets/img/layout-styles.png" },
      {id:8, name: "Camera8", price: 700, imgUrl: "assets/img/layout-styles.png", discount: 30 },
      {id:9, name: "Camera9", price: 800, imgUrl: "assets/img/layout-styles.png", discount: 30 },
    ]
  }

  ngOnInit(): void {
  }

  newProductAddedToCart(product: Product) {
    //recieving the product came from the event of the prodictItemComponent
    console.log(`new product added ${product.name}`);
    this.newProductAdded.emit(product);

  }

}
