import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// import { ProductsComponent } from './components/cart/products.component';
import { ShippingFormsComponent } from './components/shipping-forms/shipping-forms.component';

// import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CheckOutComponent } from './components/check-out/check-out.component';





@NgModule({
  declarations: [
   
   
    ShippingFormsComponent,
            CheckOutComponent,
 
  
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule

   
    
  ]
})
export class ShoppingModule { }
