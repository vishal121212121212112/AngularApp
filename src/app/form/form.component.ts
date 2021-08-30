import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
  CustomerName: any;
  Email: any;
  Address: any;
  contact:any;
  formdata: any;

  ngOnInit(): void {
    this.formdata = new FormGroup({
      CustomerName: new FormControl(""),
      contact: new FormControl(""),
      Email: new FormControl(""),
      Address: new FormControl("")  

    });
  }
  onClickSubmit(data: any) {
    console.log("You entered :" + data.CustomerName +"    "+ data.contact +""+ data.Email +""+ data.Address);
  }
}
