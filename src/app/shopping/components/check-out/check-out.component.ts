import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/shopping-cart.service';


@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  public productList: any = [];
  public grandTotal :any;
  public totalItem!: number;
  get formControls(): { [key: string]: AbstractControl } {
    return this.checkoutform.controls;
  }


  constructor(private cartService:CartService,private route:Router) { }

  checkoutform: FormGroup = new FormGroup(

    {

      city: new FormControl('', Validators.required),
      adr: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      fname: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required),
      cname: new FormControl('', Validators.required),
      ccname: new FormControl('', Validators.required),
      expmonth: new FormControl('', Validators.required),
      expyear: new FormControl('', Validators.required),
      cvv: new FormControl('', Validators.required,)
}
)



  ngOnInit(): void {

    this.cartService.getProducts()
    .subscribe(res=>{
      this.productList= res;
      
        this.grandTotal = this.cartService.getTotalPrice();

this.productList.forEach((a:any)=>{
  Object.assign(a,{total:a.price*a.quantity})

});
        
     
    })
  
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })

  
  }
  thankYou(){
    this.route.navigate(['thankyou']);
  }
}

