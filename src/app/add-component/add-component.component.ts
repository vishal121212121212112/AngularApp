import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { Customer } from '../models/Customer';
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
  contact: any;

  constructor(private customerService: CustomerService){

  }
  ngOnInit(): void {
    this.formdata = new FormGroup({
      customerName: new FormControl(""),
      email: new FormControl(""),
      address: new FormControl(""),
      contact: new FormControl("")
    });
  }
 saveCustomer(data :Customer)
  {
    this.customerService.addCustomerTest().subscribe(() => {
      alert();
    })
    
    // this.customerService.saveCustomer(data).subscribe((res) => {
    //   console.log(res); 
    // });
  }

}
