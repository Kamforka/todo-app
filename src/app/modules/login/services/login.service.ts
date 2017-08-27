import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

  constructor(private router: Router) { }

  logIn() {
    console.log('logIn');
    localStorage.setItem('loggedIn', 'true');
    this.router.navigate(['']);
  }

  logOut() {
    localStorage.removeItem('loggedIn');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('loggedIn');
  }
}
