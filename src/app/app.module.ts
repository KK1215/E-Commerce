import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
 import { BsNavbarComponent } from './core/components/bs-navbar/bs-navbar.component';


// import { ProductsComponent } from './shopping/components/cart/products.component';



import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';


import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { UserService } from './shared/services/user.service';

import * as firebase from 'firebase/firestore'
import { ProductFormComponent } from './admin/components/product-form/product-form.component';
import { AdminProductsComponent } from './admin/components/admin-products/admin-products.component';

import { ProductsService } from './shared/services/products.service';
import { CartListComponent } from './shopping/components/cart-list/cart-list.component';
import { CartService } from './shared/services/shopping-cart.service';
import { SharedModule } from './shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material.module';
import { FilterPipe } from './shared/filter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    // ProductsComponent,

   
   
    BsNavbarComponent,
    ProductFormComponent,
    AdminProductsComponent,
    CartListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,

    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    CoreModule,
    SharedModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AppMaterialModule
    
    
  ],
  providers: [
   
    UserService,
    
    ProductsService,
    CartService

   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
