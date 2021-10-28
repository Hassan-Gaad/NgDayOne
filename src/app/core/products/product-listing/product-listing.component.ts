import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { ProductService } from 'src/app/_services/productService.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
   productListArray!: Product[];

  //a property of listing component that tells its pagination child ,the no of pages should have
  noOfPages: number[] = [];//we used it as an array so when using *ngFor it will itrate over the values 1,2,3,4,... in the array then add each per element

  @Input() pageSize!: number; //no of elements per page
  productListTobeViewed: Product[] = [];
  currentPage: number = 0;


  constructor(private productService:ProductService) {
  }

  ngOnInit(): void {
    
    this.productService.refreshList.subscribe(
      (next)=>{
        console.log([...next]);
        this.productListArray=[...next];
        this.intializePageNo();
      },
      (err)=>{console.log("Couldnt refresh the list because:"+err);},
      ()=>{}
    )

    //get the product list from the product service
    this.productListArray=this.productService.getAllProducts();
      this.intializePageNo();
    

   
  }
  intializePageNo(){
    //intialize the number of pages
    let lenght = Math.ceil(this.productListArray.length / this.pageSize); //(19 items / pageSize 9)=2.3333 using math.ciel to make it 3 
    this.noOfPages=[]; //to prevent each time we call the function adding new pages over the previous
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


}
