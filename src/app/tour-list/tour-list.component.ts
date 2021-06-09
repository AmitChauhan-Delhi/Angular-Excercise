import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EditDialogComponent } from '../dialogs/edit-dialog/edit-dialog.component';
import { CommanService } from '../services/comman.service';

@Component({
  selector: 'tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.scss']
})
export class TourListComponent implements OnInit {

  constructor(private comm:CommanService, public router: Router, private dialog: MatDialog ) { }
  tourList:any[] = [];
  beginnerTourList:any[] = [];
  advancedTourList:any[] = [];
  active = 0;

  onTabChange(e) {
    console.log(e)
  }

  ngOnInit(): void {
    this.getTourList();
  }

  getTourList() {    
    this.comm.getAllTourList().subscribe(
        (res) => {
          if (res) {
            this.tourList = res['payload'];
            
            this.beginnerTourList = this.tourList.filter(x => x.category == 'BEGINNER');
            //console.log("beginnerTourList list",this.beginnerTourList);
            this.advancedTourList = this.tourList.filter(x => x.category == 'ADVANCED');
            //console.log("advancedTourList list",this.advancedTourList);

          }
        }, err => {
          alert('some error while fetching tours');
    })
  }

  getImage(url) {
    return url;
  }

  goToDetail(id:any){
    this.router.navigate(['/dashboard/tour-detail',id]);
  }


  openDialog(row, type, index) {
    const dialogRef = this.dialog.open(EditDialogComponent,{
      width: '350px',
      data:{ 'rowData' : row }
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res != undefined || res != null) {
        if(type == 'beg'){
          if (index !== -1) {
          this.beginnerTourList[index].description = res.data.description;
          this.beginnerTourList[index].longDescription = res.data.longDescription;
          this.beginnerTourList[index].category = res.data.category;
            if(res.data.category == 'ADVANCED'){  
                let arrRowData = this.beginnerTourList[index];   
                this.beginnerTourList.splice(index, 1);
                this.advancedTourList.push(arrRowData);
            }  
          }
        } else {
          if (index !== -1) {
            this.advancedTourList[index].description = res.data.description;
            this.advancedTourList[index].longDescription = res.data.longDescription;
            this.advancedTourList[index].category = res.data.category;
              if(res.data.category == 'ADVANCED'){  
                  let arrRowData = this.advancedTourList[index];   
                  this.advancedTourList.splice(index, 1);
                  this.beginnerTourList.push(arrRowData);
              }  
            }
        }
      }
    });
  }

}
