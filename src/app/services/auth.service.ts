import { Injectable, NgZone } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData: any;

  constructor( public router: Router ) { 
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true : false;
  }

  // Sign out 
  SignOut() {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

}