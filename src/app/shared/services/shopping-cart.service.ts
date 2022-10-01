
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {

 
  public productList = new BehaviorSubject<any>([]);
  public cartItemList : any =[]
  quantity:number = 1;
  public search = new BehaviorSubject<string>("");

 

  constructor(private router:Router) { }
  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product : any){

    let productExists= false;

    for(let i in this.cartItemList){
      if(this.cartItemList[i].id === product.id){
        this.cartItemList[i].quantity++;
        productExists=true;
        break;
      }
    }

    if(!productExists){

      this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
   
    }
 
  }
 
  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
 
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.price*a.quantity;
    })
    return grandTotal;
  } 
 
}