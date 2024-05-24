import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrderFormComponent} from "./order-form.component";

const routes: Routes = [
  { path: 'order', component: OrderFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderFormRoutingModule { }
