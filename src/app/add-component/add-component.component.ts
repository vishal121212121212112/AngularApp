import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.css']
})
export class AddComponentComponent implements OnInit {

  formdata: any;
  userName: any;
  address: any;
  email: any;

  ngOnInit(): void {
    this.formdata = new FormGroup({
      userName: new FormControl(""),
      email: new FormControl(""),
      address: new FormControl("")
    });
  }
  saveCustomer(data: any) {
    this.userName = data.userName;
    this.email = data.email;
    this.address = data.address;
  }
  onClickSubmit(data: any) {
    this.userName = data.userName;
    this.email = data.email;
    this.address = data.address;
  }

}
