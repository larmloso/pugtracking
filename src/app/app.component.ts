import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { DatadetailsService } from 'src/app/shared/services/datadetails.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  getToken = localStorage.getItem('token')

  constructor(private authService: AuthService,
    private notificationService: NotificationService,
    private datapassService: DatadetailsService) { }

  ngOnInit(): void {
    this.getallnoti()
    const userId = this.authService.helper.decodeToken(this.getToken)
    const username = localStorage.getItem('username');
    this.authService.username = username;
    this.datapassService.email = userId.email;

  }

  getallnoti() {
    const resRef = {
      next: x => {
        console.log('geted')
      },
      error: err => {
        console.log("eeee; ", err)
      }
    };
    const userId = this.authService.helper.decodeToken(this.getToken)
    if(userId){
      this.notificationService.getNotification(userId.user_id).subscribe(resRef)
    }

  }

  getallnoticationed() {
    const resRef = {
      next: x => {
        console.log('geted')
      },
      error: err => {
        console.log("eeee; ", err)
      }
    };
    const userId = this.authService.helper.decodeToken(this.getToken)
    this.notificationService.getNotification(userId.user_id).subscribe(resRef)
  }

}
