import { Component } from '@angular/core';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { Product } from './_models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NgDayOne';
  recievedProducts:Product[]=[];

  //pass the pruduct array from the parnt to the child app-listing-component as an input
  productListArray = [
    {id:1, name: "Camera1", price: 100, imgUrl: "assets/img/layout-styles.png", discount: 20 },
    {id:2, name: "Camera2", price: 100, imgUrl: "assets/img/layout-styles.png", discount: 40 },
    {id:3, name: "Camera3", price: 200, imgUrl: "assets/img/layout-styles.png" },
    {id:4, name: "Camera4", price: 300, imgUrl: "assets/img/layout-styles.png", discount: 60 },
    {id:5, name: "Camera5", price: 400, imgUrl: "assets/img/layout-styles.png", discount: 20 },
    {id:6, name: "Camera6", price: 500, imgUrl: "assets/img/layout-styles.png", discount: 10 },
    {id:7, name: "Camera7", price: 600, imgUrl: "assets/img/layout-styles.png" },
    {id:8, name: "Camera8", price: 700, imgUrl: "assets/img/layout-styles.png", discount: 30 },
    {id:9, name: "Camera9", price: 800, imgUrl: "assets/img/layout-styles.png", discount: 30 },
    {id:9, name: "Camera9", price: 800, imgUrl: "assets/img/layout-styles.png", discount: 30 },
    {id:9, name: "Camera9", price: 800, imgUrl: "assets/img/layout-styles.png", discount: 30 },
    {id:9, name: "Camera9", price: 800, imgUrl: "assets/img/layout-styles.png", discount: 30 },
    {id:9, name: "Camera9", price: 800, imgUrl: "assets/img/layout-styles.png", discount: 30 },
    {id:9, name: "Camera9", price: 800, imgUrl: "assets/img/layout-styles.png", discount: 30 },
    {id:9, name: "Camera9", price: 800, imgUrl: "assets/img/layout-styles.png", discount: 30 },
    {id:9, name: "Camera9", price: 800, imgUrl: "assets/img/layout-styles.png", discount: 30 },
    {id:9, name: "Camera9", price: 800, imgUrl: "assets/img/layout-styles.png", discount: 30 },
    {id:9, name: "Camera9", price: 800, imgUrl: "assets/img/layout-styles.png", discount: 30 },
    {id:9, name: "Camera9", price: 800, imgUrl: "assets/img/layout-styles.png", discount: 30 },
    {id:9, name: "Camera9", price: 800, imgUrl: "assets/img/layout-styles.png", discount: 30 },
    {id:9, name: "Camera9", price: 800, imgUrl: "assets/img/layout-styles.png", discount: 30 },
    {id:9, name: "Camera9", price: 800, imgUrl: "assets/img/layout-styles.png", discount: 30 },
    {id:9, name: "Camera9", price: 800, imgUrl: "assets/img/layout-styles.png", discount: 30 },
    {id:9, name: "Camera9", price: 800, imgUrl: "assets/img/layout-styles.png", discount: 30 },
    {id:9, name: "Camera9", price: 800, imgUrl: "assets/img/layout-styles.png", discount: 30 },
    {id:9, name: "Camera9", price: 800, imgUrl: "assets/img/layout-styles.png", discount: 30 },
    {id:9, name: "Camera9", price: 800, imgUrl: "assets/img/layout-styles.png", discount: 30 },
    {id:9, name: "Camera9", price: 800, imgUrl: "assets/img/layout-styles.png", discount: 30 },
    {id:9, name: "Camera9", price: 800, imgUrl: "assets/img/layout-styles.png", discount: 30 },
    {id:9, name: "Camera9", price: 800, imgUrl: "assets/img/layout-styles.png", discount: 30 },
    {id:9, name: "Camera9", price: 800, imgUrl: "assets/img/layout-styles.png", discount: 30 },
    {id:9, name: "Camera9", price: 800, imgUrl: "assets/img/layout-styles.png", discount: 30 },
    {id:9, name: "Camera9", price: 800, imgUrl: "assets/img/layout-styles.png", discount: 30 },
    {id:9, name: "Camera9", price: 800, imgUrl: "assets/img/layout-styles.png", discount: 30 },
  ]

  pageSize:number=9;

  newProductAdded(product:Product){
    console.log(`${product.name} recived to app component `);
    this.recievedProducts.push(product);
  }
}
