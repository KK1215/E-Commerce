import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';
import { CartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
@Input() 
public productList: any = [];
public grandTotal !: number;
quantity = 1;
public cartItemList : any =[]
 

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.productList= res;
        this.grandTotal = this.cartService.getTotalPrice();

      this.productList.forEach((a:any)=>{
        if(a.category === "women's clothing" || a.category === "men's clothing"){
          a.category === "fashion"
        }
         Object.assign(a,{total:a.price*a.quantity})
      });
    });
  }

  
  removeItem(item:any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
 


}
