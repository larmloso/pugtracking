import { Component, OnInit } from '@angular/core';
import { DatadetailsService } from 'src/app/shared/services/datadetails.service'

@Component({
  selector: 'app-tracking-details',
  templateUrl: './tracking-details.component.html',
  styleUrls: ['./tracking-details.component.scss']
})
export class TrackingDetailsComponent implements OnInit {

  constructor(public datadetailService: DatadetailsService) {
  }

  ngOnInit(): void {
  }




}
