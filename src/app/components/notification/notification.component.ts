import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AlertService } from 'ngx-alerts';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit, OnDestroy {

  getToken = localStorage.getItem('token')


  constructor(public notificationService: NotificationService,
    private authService: AuthService,
    private alertService: AlertService) {

    console.log('aaa')
    const userId = this.authService.helper.decodeToken(this.getToken)

    const e = {
      next: x => {
        this.notificationService.countnoti = 0;
      },
      error: err => {
        this.notificationService.countnoti = 0;
      }

    }
    this.notificationService.getNotification(userId.user_id).subscribe(e);

  }

  ngOnInit(): void {

    const userId = this.authService.helper.decodeToken(this.getToken)
    this.notificationService._getNotification(userId.user_id).subscribe();

  }

  ngOnDestroy(): void {
    console.log('ondestroy')
    const userId = this.authService.helper.decodeToken(this.getToken)
    this.notificationService.getNotificationed(userId.user_id).subscribe()


  }





  del(item: any) {

    const userId = this.authService.helper.decodeToken(this.getToken)
    const newRemove = {
      createdAt: item.createdAt,
      userId: userId.user_id
    }

    const resRef = {
      next: x => {
        window.location.reload();
      },
      error: err => {
        console.log(err)

      }
    };

    this.notificationService.remove(newRemove).subscribe(resRef)
  }

}
