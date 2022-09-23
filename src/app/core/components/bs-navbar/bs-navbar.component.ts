import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { authState } from '@angular/fire/auth';
import { Auth } from '@angular/fire/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import * as firebase from 'firebase/auth'
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/shopping-cart.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  public totalItem : number = 0;
  public productList: any = [];
  isLoggedIn$: Observable<boolean> | undefined;
  isUserAdmin = false;
  public searchTerm !: string;
 

  


  user: firebase.User | undefined;
  

  isFetching: boolean = false;
  
 


  constructor(private afAuth: AngularFireAuth, private authService: AuthService,private toastr:ToastrService, private userServices: UserService, private toast:ToastrService,private router:Router,private cartService:CartService) {

    afAuth.authState.subscribe(x => console.log(x));
  }
  displayName$: Observable<string> = this.userServices.displayName$;
 

  ngOnInit() {
    if (localStorage.getItem('role') != null) {
      this.isUserAdmin = localStorage.getItem('role')?.toString() === 'admin';
    
    }


    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })

    
   
  }
  


  logout() {

    this.afAuth.signOut();
    this.router.navigate(['/'])
    this.toastr.success('Logout Successful!');
    }

  loggedIn(){
    return localStorage.getItem('token');
  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
}


