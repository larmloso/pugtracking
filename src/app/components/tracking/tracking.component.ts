import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DatadetailsService } from 'src/app/shared/services/datadetails.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})
export class TrackingComponent implements OnInit {

  trackUrl = "http://localhost:5000/pug-demo-v1/us-central1/api/find";
  getAllUrl = "http://localhost:5000/pug-demo-v1/us-central1/api/alltracked";
  newTrack: any;
  getToken = localStorage.getItem('token')

  progressbar = false;

  datas = [];
  count: any;

  constructor(private http: HttpClient,
     private authService: AuthService,
     public datadetailService: DatadetailsService) {

    this.getHistory();

  }

  ngOnInit(): void {
  }

  async getHistory(){
    if(this.getToken){
      const userId = this.authService.helper.decodeToken(this.getToken)
      const newUserid = { userId: userId.user_id }
      let his = await this.http.post(this.getAllUrl, newUserid).toPromise()
      this.datadetailService.historys = his;
      console.log(history)
    }
    else{
      console.log('not found userid')
    }

  }



  foods: Food[] = [
    {value: 'kerry_express', viewValue: 'Kerry Express'},
    {value: 'jt_express', viewValue: 'J&T Express'},
    {value: 'shopee_express', viewValue: 'Shopee Express'},
  ];

  onSubmit(f: any){
    this.datas.push(f.value)
    f.reset();
    this.count = this.datas.length;
    console.log(this.datas);

    if(this.getToken){
      // sentoken :: to fiirebase
      const sentoken = this.authService.helper.decodeToken(this.getToken)
      console.log('abc', sentoken.user_id)
       this.newTrack = {
        data: this.datas,
        userId: sentoken.user_id
      }
      console.log(this.newTrack);
    }else{
        this.newTrack = {
        data: this.datas,
        userId: ''
      }
      console.log(this.newTrack);
    }
  }

  deleteItem(obj: any) {
    console.log("first data ",this.datas)
    this.datas = this.datas.filter(item => item !== obj)
    console.log('second data' , this.datas);
    this.count = this.datas.length;

  }

  async track() {
    this.progressbar = true;

    let respon = await this.http.post(this.trackUrl, this.newTrack).toPromise()
    console.log(respon);
    this.progressbar = false;
    this.datadetailService.trackingData = respon

  }


}
