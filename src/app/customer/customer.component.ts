import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../models/Customer';
import { UtilityService } from '../utility.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public customers: Customer[] = [];
  constructor(private customerService: CustomerService, private _utilityService:UtilityService) { 
    
  }

  ngOnInit(): void {
    this.customerService.getCustomer().subscribe((res) => {
      this.customers = res;
    });
  }
  sendDataBySubject() {
    this._utilityService.sharedData.next('Hi I am coming through subject');
  } 
 }
