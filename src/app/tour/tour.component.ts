import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommanService } from '../services/comman.service';

@Component({
  selector: 'tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent implements OnInit {
 tourDetails: any;
 tourId: any;
 locationList:any[] = [];
 displayedColumns = ['#', 'Location', 'Days'];
  
  constructor(private route: ActivatedRoute, private comm:CommanService) {
    this.tourId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    if(this.tourId){
      this.getTourDetailById(this.tourId);
      this.getLocationList(this.tourId);
    }
  }

  getTourDetailById(id:any) {    
    this.comm.getTourDetails(id).subscribe(
        (res) => {
            this.tourDetails = res;   
            console.log("tour detail response", res)         
        }, err => {
          alert('some error while fetching tour detail by Id');
    })
  } 

  getLocationList(id:any) {    
    this.comm.getLocationList(id).subscribe(
        (res) => {
            this.locationList = res['payload'];
            console.log("tour locations", res)     
        }, err => {
          alert('some error while fetching locations');
    })
  }

  getImage(url) {
    return url;
  }


}
