import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable,of as observableOf} from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '@angular/fire/auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { user } from 'src/app/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  public user: Observable<User> | boolean | undefined;
 constructor(private afAuth:AngularFireAuth,
    private http:HttpClient) { }
  authState$:Observable<firebase.default.User | any> = this.afAuth.authState;
  displayName$:Observable<any>=this.authState$.pipe(map(user => {
    
    if(!user){
      return null;
    }
    else{
      return user.displayName;
    }
  }

  ))
 createUser(user:{username:string,name:string,password:string,roles:string}){
    console.log(user);
const headers = new HttpHeaders({'myHeaders':"Komal"});
this.http.post<{name:string}>('https://nkapp-61e84-default-rtdb.firebaseio.com/users.json',user,{headers:headers})
.subscribe((res)=>{
console.log(res);
});
}

fetchProduct(){
  return this.http.get<{[key:string]:user}>('https://nkapp-61e84-default-rtdb.firebaseio.com/users.json')
   .pipe(map((res) => {
     const users=[];
     for(const key in res){
       if(res.hasOwnProperty(key)){
         users.push({...res[key], id:key})
       }
     }
     return users;
   }))
}
  fetchUserByUserName(userName:string){
    return this.http.get<{[id:string]:user}>('https://nkapp-61e84-default-rtdb.firebaseio.com//users/'+userName+'.json')
     .pipe(map((res) => {
       const user=res;
       
       return user;
     }))
  
    }

}
