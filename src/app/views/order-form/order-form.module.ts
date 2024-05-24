import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderFormRoutingModule } from './order-form-routing.module';
import {OrderFormComponent} from "./order-form.component";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    OrderFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    OrderFormRoutingModule
  ],
  exports: [
    OrderFormRoutingModule,
  ]
})
export class OrderFormModule { }
