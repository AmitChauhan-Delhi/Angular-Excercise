import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  public loginInvalid = false;
  private formSubmitAttempt = false;
  private returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    
    this.loginForm = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit() : void {
    if(this.loginForm.invalid){
      return
    }
    if(this.loginForm.controls['username'].value == 'admin@admin.com' && this.loginForm.controls['password'].value == 'admin@123'){
      localStorage.setItem('user', JSON.stringify({emailId : 'admin@admin.com', password : 'admin@123'}));
     this.router.navigate(["dashboard"]);
    }else {
      alert("Invalid credentials");
    }
  }
  
}