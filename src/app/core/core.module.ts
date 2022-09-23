import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';



import { CoreRoutingModule } from './core-routing.module';
import { Router } from '@angular/router';

import { UserLoginComponent } from './components/user-login/user-login.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './components/signup/signup.component';
import { FirebaseApp } from '@angular/fire/app';




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
    HttpClientModule
    ]
})
export class CoreModule { }
