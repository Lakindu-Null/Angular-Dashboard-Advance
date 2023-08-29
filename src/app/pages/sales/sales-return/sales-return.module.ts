import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesReturnRoutingModule } from './sales-return-routing.module';
import { SalesReturnComponent } from './sales-return.component';


@NgModule({
  declarations: [
    SalesReturnComponent
  ],
  imports: [
    CommonModule,
    SalesReturnRoutingModule
  ]
})
export class SalesReturnModule { }
