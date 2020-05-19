import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../@core/services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form:FormGroup;
  errors: any = null;
  invalidCredentials: 'Xay ra loi' | 'Tai khoan hoac mat khau khong hop le' | null = null;
  constructor(private authService: AuthService, private router: Router, private formBuider:FormBuilder) { }

  ngOnInit() {
    this.form=this.formBuider.group({
      username:['',[Validators.required, Validators.minLength(8)]],
      password:['',[Validators.required]]
    })
  }

  get userNameErrors() {
    return this.form.get('username').errors
  }

  get userNameErrorsString() {
    return JSON.stringify(this.userNameErrors)
  }

  onSubmit() {
    this.errors = {
      username: {...this.userNameErrors}
    }

    console.log(this.form)
    
    if (this.form.invalid) return

    const account:Account =this.form.value;
    this.authService.signIn(account).subscribe(
      ()=> {
        this.router.navigate(['/products'])
      },
      (err) => {
        if(err.status === 401) {
          this.invalidCredentials = 'Tai khoan hoac mat khau khong hop le'
        } else {
          this.invalidCredentials = 'Xay ra loi'
        }
      }
    )
  }
}
