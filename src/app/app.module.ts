import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { ProductListingComponent } from './core/products/product-listing/product-listing.component';
import { ProductItemComponent } from './core/products/product-item/product-item.component';
import { ProductFilterComponent } from './core/products/product-filter/product-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListingComponent,
    ProductItemComponent,
    ProductFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
