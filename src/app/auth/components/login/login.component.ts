import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthService} from 'src/app/shared/services/auth.service';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  progressbar = false;

  constructor(private authService: AuthService, private alertService: AlertService) { }

  ngOnInit(): void {
  }

  onSubmit(f:any){
    console.log(f.value);
    this.progressbar = true;

    const loginObserver = {
      next: x => {
        console.log('User logged')
        this.progressbar = false;
        this.alertService.success('เข้าสู่ระบบ');

      },
      error: err => {
        console.log(err)
        this.progressbar = false;
        this.alertService.danger(err.error.message);

      }
    };
    this.authService.login(f.value).subscribe(loginObserver);

  }


}
