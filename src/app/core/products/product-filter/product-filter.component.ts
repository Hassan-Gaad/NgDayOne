import { Component, Input, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from 'src/app/_services/productService.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss'],
})
export class ProductFilterComponent implements OnInit {
  filterList: string[];
  filterTagList: string[];
  constructor(private productService: ProductService) {
    this.filterList = [
      'Arts & Crafts',
      'Automotive',
      'Baby',
      'Books',
      'Eletronics',
      "Women's Fashion",
      "Men's Fashion",
      'Health & Household',
      'Home & Kitchen',
      'Military Accessories',
      'Movies & Television',
      'Sports & Outdoors',
      'Tools & Home Improvement',
      'Toys & Games',
    ];

    this.filterTagList = [
      "Nike",
      "Travel",
      "Sport",
      "Tv",
      "Books",
      "Tech",
      "Addidas",
      "Promo",
      "Reading",
      "Social",
      "New",
      "Special",
      "Food",
      "Used"
    ]
  }

  filterProductList(event: any) {
    const val = event.target.value;
    console.log(val);
    const newProductList = this.productService.getAllProducts().filter((product) => {
      //  return product.name.includes(val);
       return product.name.toLowerCase().includes(val.toLowerCase());
        
    });
    console.log(newProductList);
    this.productService.refreshList.emit(newProductList);


  }

  ngOnInit(): void { }
}
