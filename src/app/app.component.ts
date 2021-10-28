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

  pageSize:number=9;

}
