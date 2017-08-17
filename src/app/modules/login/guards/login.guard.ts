import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { LoginService } from '../services/login.service';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor (private router: Router, private loginService: LoginService) { }
  canActivate() {
    if (this.loginService.isLoggedIn()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
