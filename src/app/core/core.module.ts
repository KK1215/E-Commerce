import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';



import { CoreRoutingModule } from './core-routing.module';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './components/signup/signup.component';

import { SharedModule } from '../shared/shared.module';





@NgModule({
  declarations: [
    
   
    UserLoginComponent,
    
    
    SignupComponent
        

    
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   
    
    ]
})
export class CoreModule { }
