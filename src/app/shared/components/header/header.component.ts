import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service'
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';
import { NotificationService } from '../../services/notification.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  progressbar = false;

  noti = this.notificationService.notification;


  constructor(public authService: AuthService,
    private _router: Router,
    private alertService: AlertService,
    private notificationService: NotificationService) { }


  ngOnInit(): void {
  }

  logout(){
    this.alertService.info('ออกจากระบบแล้ว');
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.clear();
    this._router.navigateByUrl('');





  }

}
