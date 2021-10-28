import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { faEdit, faEye, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { Product } from 'src/app/_models/product.model';
import { ProductService } from 'src/app/_services/productService.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  // providers:[ProductService] // we just define this property in the app module (dependIn:Root) 
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product; //get prop from parent so it act as input
  @ViewChild("saleElem") saleElement !: ElementRef; //passing the reference name to the viewChild Decorator
  // and give a property name to the queried element of type ElementRef wich acts as an umberella for all html elements

  // @Output() productAdded=new EventEmitter<Product>() //creating the Event
  // productService:ProductService;

  /**
   * we need to send product item to the outer parent (product-listing) and the parent will send this data to 
   * its parent (app-component)
   * 
   * IN THE OTHER SIDE 
   * 
   * the (header-component) will recieve it as an input from the parent (app-component) and the notification card element
   * will recieve it as an input from the parent (header-component) to increment the number of product added to the cart
   * 
   * 
   * OK enough talk HOW WE DO THAT?
   * 
   * simply, you need to send the clicked product object ,right ? Ok :)
   * create an event in the product-item-component using the @output decorator wich followed by the EVENT EMITTER
   * then fire the event in any condition , in our case when the button 'add to card' clicked 
   * in the callback function 
   */

  constructor(private productService:ProductService) {
    // this.productService=new ProductService();
   }

   
   getPrice(){
     return this.product.discount? this.product.price-this.product.discount:this.product.price;
   }

  ngOnInit(): void {

  }

  addItemToChart(){
    
  }

  recievedElem(elem:HTMLElement){
    // here we recieved an element from the Html using #reference passed to click-event's callback-function 
    console.log(elem);

    // here we are loging the element queried by @viewChiled decorator once the button clicked
    let htmlDivSale:HTMLDivElement = this.saleElement.nativeElement as HTMLDivElement;
    console.log(htmlDivSale);
  }

  productClicked(){
    this.productService.itemAdded.emit(this.product); //once the button clicked it will fire the event so we can bind the event property to the component element html in the parent component
    // and call a function with $event parameter in the parent component 
  }

  deleteProduct(id:number){
    const newProductList=this.productService.deleteProduct(id);
    console.log(`"after delete" ${newProductList}`);
    this.productService.refreshList.emit(newProductList)
  }

  

  

}
