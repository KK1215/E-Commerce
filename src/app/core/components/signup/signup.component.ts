import { Component } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { user } from 'src/app/user.model';
import { UserService } from 'src/app/shared/services/user.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements Validators {

  roles: string[] = ['user', 'admin'];
  allProducts: user[] = [];
  isFetching: boolean = false;

  get formControls(): { [key: string]: AbstractControl } {
    return this.signupform.controls;
  }

  constructor(private httpClient: HttpClient, private router: Router,
    private authService: AuthService, private userService: UserService,private toastr:ToastrService) {}
  
    signupform: FormGroup = new FormGroup(
    {
      name: new FormControl('', Validators.required,),
      username: new FormControl('', [Validators.required, Validators.email]),
      isuserAdmin: new FormControl('false', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])

    })
  
  onProductsFetch() {
    this.fetchProducts();
  }

  onProductCreate(users: { username: string, name: string, password: string, roles: string }) {
    this.userService.createUser(users);

    if (!this.signupform.valid) return;
    

    const emailValue = this.signupform.value['username'];
    const passwordValue = this.signupform.value['password'];
    const nameValue = this.signupform.value['name'];
    const rolesValue = this.signupform.value['isuserAdmin'];
    let isuserAdmin = false;
    if (rolesValue == 'admin') {
      isuserAdmin = true;
    }
    this.authService.signUp(nameValue, emailValue, passwordValue, isuserAdmin).subscribe((data) => {
      this.router.navigate(['/']);
      this.toastr.success('Signed Up Successfully');
    });
  }
  private fetchProducts() {
    this.isFetching = true;
    this.userService.fetchProduct().subscribe((users) => {
      this.allProducts = users;
      this.isFetching = false;
    });
  }
}
