import { Component, Input, OnInit } from '@angular/core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faDotCircle, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown, faAngleRight, faCartArrowDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/_models/product.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() recievedProducts: Product[] = [];

  cardIsOpen:boolean=false;

  faCart = faCartArrowDown;
  faTimes = faTimes;
  faDotCircle = faDotCircle;
  faWhatsapp = faWhatsapp;
  faEvelop = faEnvelope;
  faAngelRight = faAngleRight;
  faAngelDown = faAngleDown;

  constructor() {
    // this.filterRecievedProducts();
   }

  ngOnInit(): void {
    
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
