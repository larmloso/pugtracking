import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DatadetailsService } from 'src/app/shared/services/datadetails.service';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {


  getToken = localStorage.getItem('token')
  constructor(public authService: AuthService,
     public datapassService: DatadetailsService,
     private alertService: AlertService) {
      this.getHistory();
  }

  ngOnInit(): void {
  }

  onSubmit(f: any) {

    const userId = this.authService.helper.decodeToken(this.getToken)

    const newProfile = {
      username: f.value.username,
      userId: userId.user_id
    }
    const e = {
      next: x => this.alertService.success('แก้ไขชื่อผู้ใช้แล้ว')
    }

    if(confirm('ยืนยันการแก้ไข')){
      this.authService.editprofile(newProfile).subscribe(e);
    }



  }

  getHistory(){

    const userId = this.authService.helper.decodeToken(this.getToken)
    this.datapassService.getHistory(userId.user_id).subscribe();

  }
}
