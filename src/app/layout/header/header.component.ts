import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { ProductService } from 'src/app/_services/productService.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   recievedProducts: Product[] = [];

  // productService:ProductService;
  constructor(private productService:ProductService) { //inject dependency of ProductService
    // this.filterRecievedProducts();
    // this.productService=new ProductService();
   }

  ngOnInit(): void {
    this.productService.itemAdded.subscribe(
      (next)=>{
        console.log(next);
        this.recievedProducts.push(next);
      },
      (err)=>{},
      ()=>{}
    )
  }

  // fix them later
  getPrice(product: Product) {
    return product.discount ? product.price - product.discount : product.price;
  }
  dublicatedProduct(product: Product) {
    let dublicatedItems = this.recievedProducts.filter(value => { value.id === product.id })
    return dublicatedItems.length+1;
  }

  // filterRecievedProducts() {
  //   let recievedPro: Product[] = [...this.recievedProducts];
  //   var resArr: Product[]  = [];
  //   recievedPro.forEach(function (item) {
  //     var i = resArr.findIndex(x => x.name == item.name);
  //     if (i <= -1) {
  //       resArr.push(item.id);
  //     }
  //   });
  //   console.log(resArr);

  // }

}
