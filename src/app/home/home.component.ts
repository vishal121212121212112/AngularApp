import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:string = '';
  dataFromChild = '';
  constructor() { }

  ngOnInit(): void {
    
  }
  SendDataToChild(){
    this.data= 'Data from parent to child';
  }
  DataComingFromChildToParent(data:string) {
    this.dataFromChild= data;
  }
}
