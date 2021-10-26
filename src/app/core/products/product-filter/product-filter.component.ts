import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss'],
})
export class ProductFilterComponent implements OnInit {
  filterList: string[];
  filterTagList: string[];
  faSearch=faSearch;
  constructor() {
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

    this.filterTagList=[
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

  ngOnInit(): void {}
}
