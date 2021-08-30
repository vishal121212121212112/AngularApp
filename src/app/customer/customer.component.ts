import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../models/Customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public customers: Customer[] = [];
  constructor(private customerService: CustomerService) { 
    
  }

  ngOnInit(): void {
    this.customerService.getCustomer('https://localhost:44356/api/values').subscribe((res) => {
      this.customers = res;
    });
  }
}
