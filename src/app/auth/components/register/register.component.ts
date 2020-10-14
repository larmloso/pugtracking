import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService} from 'src/app/shared/services/auth.service';
import { AlertService } from 'ngx-alerts';
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  hide = true;

  progressbar = false;
  constructor(private authService: AuthService,
    private alertService: AlertService) { }

  ngOnInit(): void {
  }

  onSubmit(f: any){
    this.progressbar = true;


    const registerObserver = {
      next: x => {
        this.alertService.success('สมัครสำเร็จ');
        console.log('User Registered')
        this.progressbar = false;

      },
      error: err => {
        console.log(err)
        this.alertService.danger(err.error.message);
        this.progressbar = false;

      }
    };

    this.authService.register(f.value).subscribe(registerObserver);

    console.log(f.value)
    console.log(f.valid)

  }

}
