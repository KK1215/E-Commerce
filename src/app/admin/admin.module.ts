import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
   

   
   
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    
  ]
})
export class AdminModule { }
