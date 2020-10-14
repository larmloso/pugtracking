import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = "http://localhost:5000/pug-demo-v1/us-central1/api/auth";
  editprofileUrl = "http://localhost:5000/pug-demo-v1/us-central1/api/auth/editprofile";
  trackUrl = "http://localhost:5000/pug-demo-v1/us-central1/api/find";

  helper = new JwtHelperService();
  decodedToken: any;
  username: any;

  constructor(private http: HttpClient, private _router: Router) { }

  login(model: any){
    return this.http.post(this.authUrl, model).pipe(
      map((response: any) => {
        const user = response;
        if(user.user){
          localStorage.setItem('token', user.token);
          localStorage.setItem('username', user.username);
          this.decodedToken = this.helper.decodeToken(user.token);
          this.username = user.username;
          this._router.navigateByUrl('track');
        }
        else{
          console.log(user.message);
        }
      })
    )
  }

  loggedIn(){
    const token = localStorage.getItem('token')
    return !this.helper.isTokenExpired(token);
  }

  loggedIn2(){
    const token = localStorage.getItem('token')
    return !this.helper.isTokenExpired(token);
  }

  register(model: any){
    return this.http.post(this.authUrl+'/register' , model).pipe(
      map((response: any) => {
        this._router.navigateByUrl('login');

      })
    )
  }

  editprofile(model: any){

    return this.http.post(this.editprofileUrl, model).pipe(
      map((response: any) => {
        const user = response;
        localStorage.setItem('username', user.username);

      })
    )

  }


}
