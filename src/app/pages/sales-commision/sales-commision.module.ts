import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesCommisionRoutingModule } from './sales-commision-routing.module';
import { SalesCommisionComponent } from './sales-commision.component';


@NgModule({
  declarations: [
    SalesCommisionComponent
  ],
  imports: [
    CommonModule,
    SalesCommisionRoutingModule
  ]
})
export class SalesCommisionModule { }
