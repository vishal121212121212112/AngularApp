import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'form',
    component: FormComponent
  },
  {
    path:'Customers',
    component: CustomerComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
