
import { Injectable } from '@angular/core';
import { user } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private auth:AuthService,private router:Router) {
    
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    this.auth.currentUser$.subscribe(user=>{
      if(user)return true;

      this.router.navigate(['/'])
      return false;
    })
  }
   
  
 
  
}
