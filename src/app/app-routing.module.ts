import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminProductsComponent } from './admin/components/admin-products/admin-products.component';

import { UserLoginComponent } from './core/components/user-login/user-login.component';




import { BsNavbarComponent } from './core/components/bs-navbar/bs-navbar.component';

import { SignupComponent } from './core/components/signup/signup.component';
import { AuthGuardGuard } from './shared/services/auth-guard.guard';
import { ThankyouComponent } from './thankyou/thankyou.component';

import { AdminAuthGuardGuard } from './shared/services/admin-auth-guard.guard';
import { ProductFormComponent } from './admin/components/product-form/product-form.component';
import { CartListComponent } from './shopping/components/cart-list/cart-list.component';
import { CheckOutComponent } from './shopping/components/check-out/check-out.component';


const routes: Routes = [
 

  
 {path: '',component:UserLoginComponent},
 {path:'check-out',component:CheckOutComponent},
 {path:'bs-navbar',component:BsNavbarComponent,canActivate:[AuthGuardGuard]},
{path: 'cart-list',component: CartListComponent,canActivate:[AuthGuardGuard]},
{path: 'admin/products',component: AdminProductsComponent,canActivate:[AuthGuardGuard]},
 {path:'admin/products/new',component: ProductFormComponent,canActivate:[AuthGuardGuard, AdminAuthGuardGuard]},
 
 {path: 'signup',component:SignupComponent },
 {path:'thankyou',component:ThankyouComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
