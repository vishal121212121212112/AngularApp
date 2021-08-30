import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomer(url: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(url);
  }
  saveCustomer(customer: Customer): Observable<any>{
    return this.http.post('', customer);
  }
}
