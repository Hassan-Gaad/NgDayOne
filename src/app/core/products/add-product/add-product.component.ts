import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/_models/category.model';
import { PaymentMethod } from 'src/app/_models/payment-method.model';
import { Tags } from 'src/app/_models/Tags.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  categories: Category[];
  tags:Tags[];
  paymentMethod:PaymentMethod[];
  constructor() {
    this.categories = [
      { name: 'Arts & Crafts' },
      { name: 'Automotive' },
      { name: 'Baby' },
      { name: 'Books' },
      { name: 'Eletronics' },
      { name: "Women's Fashion" },
      { name: "Men's Fashion" },
      { name: 'Health & Household' },
      { name: 'Home & Kitchen' },
      { name: 'Military Accessories' },
      { name: 'Movies & Television' },
      { name: 'Sports & Outdoors' },
      { name: 'Tools & Home Improvement' },
      { name: 'Toys & Games' },
    ]
    this.tags=[
      {name:"tag1"},
      {name:"tag2"},
      {name:"tag3"},
      {name:"tag4"},
      {name:"tag5"},
      {name:"tag6"},
      {name:"tag7"},
      {name:"tag8"},
      {name:"tag9"}
    ]
    this.paymentMethod=[
      {name:"Direct Bank"},
      {name:"Cheque Payment"},
      {name:"Paypal"},
      {name:"Visa"},
      {name:"Mastercard"},
      {name:"On Dilivery"},
      {name:"Meza"},
    ]

  }

  ngOnInit(): void {

  }

}
