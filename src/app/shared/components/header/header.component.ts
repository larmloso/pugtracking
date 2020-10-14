import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service'
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';
import { NotificationService } from 'src/app/shared/services/notification.service';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  getToken = localStorage.getItem('token')
  socket;
  constructor(public authService: AuthService,
    private _router: Router,
    private alertService: AlertService,
    public notificationService: NotificationService) {
      this.socket = io("http://localhost:4000")
  }

  ngOnInit(): void {
    const userId = this.authService.helper.decodeToken(this.getToken)

    this.socket.on('noti', ({ data }) => {
      console.log(data);

      if (userId.user_id == (data.user_data.userId)) {
        this.alertService.warning('การแจ้งเตือน');
        if (this.notificationService.countnoti > 0) {
          this.notificationService.countnoti++;

        }
        else {
          this.notificationService.countnoti = 1;
        }

      }
      else {
        console.log('user id false')
      }
    })


  }

  logout() {
    this.alertService.info('ออกจากระบบแล้ว');
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.clear();
    this._router.navigateByUrl('');

  }





}
