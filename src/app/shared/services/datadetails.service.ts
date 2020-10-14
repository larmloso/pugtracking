import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DatadetailsService {

  constructor(private http: HttpClient) { }
  trackingData: any;
  historys: any;
  memberHistory: any;
  email: any;

  getAllUrl = "http://localhost:5000/pug-demo-v1/us-central1/api/alltracked";
  trackUrl = "http://localhost:5000/pug-demo-v1/us-central1/api/find";

  getHistory(model: any){

    console.log('model', model)
    return this.http.post(this.getAllUrl, model).pipe(
      map(async (response: any) => {
        console.log("respon555")
        const newTrack = {
          data: response,
          userId: model
        }
        //console.log("this is new track", newTrack);
        let respon = await this.http.post(this.trackUrl, newTrack).toPromise()
        this.memberHistory = respon;
      })
    )


  }

}
