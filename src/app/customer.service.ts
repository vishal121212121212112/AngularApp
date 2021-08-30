import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>('https://localhost:44356/api/values');
  }
  saveCustomer(customer: Customer): Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(customer);
    return this.http.post('https://localhost:44356/api/values/AddCustomer', body,{'headers':headers});
  }
  addCustomerTest(): Observable<any> {
    const headers = { 'content-type': 'application/json'};  
    const body=JSON.stringify({'id' : '123'});
    console.log(body)
    return this.http.post('https://localhost:44356/api/values/Add?id=1313',{});
  }
}
