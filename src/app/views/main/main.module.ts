import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import {MainComponent} from "./main.component";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    NgbAccordionModule,
    MainRoutingModule
  ],
  exports: [
    MainRoutingModule,
  ]
})
export class MainModule { }
