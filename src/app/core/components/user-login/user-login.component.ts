import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { AuthService } from 'src/app/shared/services/auth.service';

import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements Validators {
  roles: any[] = ['user', 'admin'];
  alert:boolean=false;
  
  
  
 get formControls(): { [key: string]: AbstractControl } {
    return this.loginform.controls;
  }

constructor(private route: ActivatedRoute,
    private toastr:ToastrService,
    private authService: AuthService,
    private router: Router) {}
 
loginform: FormGroup = new FormGroup(
    {
      usernameValue: new FormControl('', [Validators.required, Validators.email]),
      passwordValue: new FormControl('', [Validators.required,Validators.minLength(5)]),
      isuserAdmin: new FormControl('false', Validators.required)

    }
  )

  
  get email() {
    return this.loginform.get('email');
  }

  get password() {
    return this.loginform.get('password');
  }
  submit() {
    if (!this.loginform.valid) {
      return;
    }
    
    const usernameValue = this.loginform.value['usernameValue'];
    const passwordValue = this.loginform.value['passwordValue'];
    const isuserAdmin  = this.loginform.value['isuserAdmin'];

      this.authService.login(usernameValue, passwordValue).subscribe((data) => {
      localStorage.setItem("role",isuserAdmin)
      localStorage.setItem('userData', JSON.stringify(data));
      this.router.navigate(['/admin/products']);
      this.toastr.success('Login Successful!');
    });
}

signup() {
    this.router.navigate(['signup'], { relativeTo: this.route })
  }
}


