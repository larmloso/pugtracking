import { Component, OnInit } from '@angular/core';

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

  datas = [];
  count: any;

  constructor() {

  }

  ngOnInit(): void {
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
  }

  deleteItem(obj: any) {
    console.log("first data ",this.datas)
    this.datas = this.datas.filter(item => item !== obj)
    console.log('second data' , this.datas);
    this.count = this.datas.length;

  }

  async track() {
    console.log(this.datas);

    // let respon = await this.http.post(this.trackUrl, this.newTrack).toPromise()
    // this.datapass.tracked = respon


  }

}
