import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, ResolveStart, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { isAdmin } from '@firebase/util';
import { map, Observable, take, tap } from 'rxjs';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardGuard implements CanActivate {
 
  auth: any;
 
  
  // isAdmin: boolean;
  constructor(private router:Router,private authService:AuthService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authService.HaveRoleAccess(route.url[0].path)) {       
        return true;
      } 
      else{
        alert('You dont have access')
        return false;
      }
       
      
    } 

  
  }
