import { Component, OnInit } from '@angular/core';
import { CommanService } from '../services/comman.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {  
  
  constructor(private comm:CommanService) { }

  ngOnInit(): void {
  }
  
}
