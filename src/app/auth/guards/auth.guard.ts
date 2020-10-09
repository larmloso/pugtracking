import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private _router: Router){}

  canActivate(): boolean {
    if(this.authService.loggedIn()){
      return false;
    } else {
      return true;
    }
  }

}
