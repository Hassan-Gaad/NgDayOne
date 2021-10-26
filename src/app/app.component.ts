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

  newProductAdded(product:Product){
    console.log(`${product.name} recived to app component `);
    this.recievedProducts.push(product);
  }
}
