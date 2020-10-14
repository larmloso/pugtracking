import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})



export class NotificationService {

  getNotiUrl = 'http://localhost:5000/pug-demo-v1/us-central1/api/getNotification';
  getedNotiUrl = 'http://localhost:5000/pug-demo-v1/us-central1/api/getedNotification';
  _getNotiUrl = 'http://localhost:5000/pug-demo-v1/us-central1/api/_getNotification';
  removeUrl = 'http://localhost:5000/pug-demo-v1/us-central1/api/removeNotification';

  constructor(private http: HttpClient, private _router: Router) {
  }

  countnoti;
  notidata: any;
  _notidata: any;



  getNotification(model: string) {
    console.log('userid ==> ', model);

    return this.http.post(this.getNotiUrl, model).pipe(
      map((response: any) => {
        console.log(response)
        response.sort((a, b) => {
          return a.createdAt.localeCompare(b.createdAt);
        })
        const getNoti = response.reverse();
        this.countnoti = getNoti.length;
        this.notidata = getNoti;

      })
    )

  }

  /// checked true fasls
  getNotificationed(model: string){
    console.log('getnotificationed')
    return this.http.post(this.getedNotiUrl, model).pipe(
      map((response: any) => {
        console.log(response)
      })
    )
  }

  //read true

  _getNotification(model: any){

    return this.http.post(this._getNotiUrl, model).pipe(
      map((response: any) => {
        console.log(response)
        response.sort((a, b) => {
          return a.createdAt.localeCompare(b.createdAt);
        })
        const getNoti = response.reverse();
        console.log("ที่อ่านแล้ว ",getNoti)
        this._notidata = getNoti;

      })
    )

  }

  remove(model: any){
    console.log("Notification remove",model);
    return this.http.post(this.removeUrl, model).pipe(
      map((response: any) => {
        console.log(response)
      })
    )
  }
}
