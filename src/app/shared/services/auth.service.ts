import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from '@angular/fire/auth';
import { BehaviorSubject, from, Observable, observable, switchMap } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {


  currentUser$ = authState(this.auth);


 

  

  constructor(private auth:Auth) {
    
  }

 



  signUp(name: string,username: string, password: string,isAdmin:boolean) {
    return from(createUserWithEmailAndPassword(this.auth,username, password)).pipe(
    switchMap(({ user}) => updateProfile(user, {displayName:username})
  ))
  }

  login(usernameValue:string,passwordValue:string){
  
    
   
    return from (signInWithEmailAndPassword(this.auth,usernameValue,passwordValue))
   
    
}
HaveRoleAccess(rname:any){
  const role = localStorage.getItem("role");
  if(role=='admin'){
    return true;
  }else{
    if(rname == 'admin-product'){
      return true;
    } else{
      return false;
    }
  }
}

}






