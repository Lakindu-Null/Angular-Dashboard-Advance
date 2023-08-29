import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesReturnReprintRoutingModule } from './sales-return-reprint-routing.module';
import { SalesReturnReprintComponent } from './sales-return-reprint.component';


@NgModule({
  declarations: [
    SalesReturnReprintComponent
  ],
  imports: [
    CommonModule,
    SalesReturnReprintRoutingModule
  ]
})
export class SalesReturnReprintModule { }
