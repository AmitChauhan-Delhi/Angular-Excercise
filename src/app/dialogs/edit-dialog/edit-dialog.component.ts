import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommanService } from '../../services/comman.service';

@Component({
  selector: 'edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {
  local_data:any;
  updateForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<EditDialogComponent>, private fb: FormBuilder, private comm:CommanService, @Inject(MAT_DIALOG_DATA) public data: any) { 
    this.local_data = data.rowData;
    this.updateForm = this.fb.group({
      description: [''],
      category: [''],
      longDescription: [''],
      actionDate:[new Date()]
    });
  }

  ngOnInit(): void {
    if(this.local_data) {
      this.updateForm.patchValue({
        description: this.local_data.description,
        category: this.local_data.category,
        longDescription: this.local_data.longDescription,
      })
    }
  }

  update() : void {
    let payload = {
      description: this.updateForm.controls['description'].value,
      category: this.updateForm.controls['category'].value,
      longDescription: this.updateForm.controls['longDescription'].value,
    };
    this.comm.updateTourData(this.local_data.id).subscribe(
      (res) => {
          this.local_data = res;   
          //console.log("tour detail update response", res) 
          this.dialogRef.close({'data' : payload});   
          alert('data updated sucessfully');     
      }, err => {
        //alert('some error while updating tour');
    })
  }

  close() {
    this.dialogRef.close();
  }

}
