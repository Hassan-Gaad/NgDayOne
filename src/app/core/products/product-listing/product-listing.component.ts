import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_models/product.model';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  @Input() productListArray!: Product[];
  @Output() newProductAdded !: EventEmitter<Product>;

  //a property of listing component that tells its pagination child ,the no of pages should have
  noOfPages: number[] = [];//we used it as an array so when using *ngFor it will itrate over the values 1,2,3,4,... in the array then add each per element

  @Input() pageSize!: number; //no of elements per page
  productListTobeViewed: Product[] = [];
  currentPage: number = 0;

  constructor() {
    this.newProductAdded = new EventEmitter<Product>();
  }

  ngOnInit(): void {
    let lenght = Math.ceil(this.productListArray.length / this.pageSize); //(19 items / pageSize 9)=2.3333 using math.ciel to make it 3 
    for (let i = 0; i < lenght; i++) {
      this.noOfPages.push(i + 1);//the noOfPages have 1,2,3,...
    }
    this.sliceProductList();

  }

  /**
   * Used to slice products list into sections that change each time the currentPage change
   */
  sliceProductList() {
    this.productListTobeViewed = this.productListArray.slice(this.currentPage * this.pageSize, this.currentPage * this.pageSize + this.pageSize);
  }

  /**
   * once page item clicked it will increase current page by 1 and slice the array to the new section
   */
  onPageination(pageIdx: number) {
    console.log("pageIDX"+pageIdx);
    if (pageIdx > -1 && pageIdx <= this.noOfPages.length-1) {  //when click next we have to ensure if the pageIdx within the range
      this.currentPage = pageIdx;
      this.sliceProductList();
    }
  }



  newProductAddedToCart(product: Product) {
    //recieving the product came from the event of the prodictItemComponent
    console.log(`new product added ${product.name}`);
    this.newProductAdded.emit(product);

  }

}
