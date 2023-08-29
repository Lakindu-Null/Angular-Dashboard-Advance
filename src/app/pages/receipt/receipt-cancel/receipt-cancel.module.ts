import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceiptCancelRoutingModule } from './receipt-cancel-routing.module';
import { ReceiptCancelComponent } from './receipt-cancel.component';


@NgModule({
  declarations: [
    ReceiptCancelComponent
  ],
  imports: [
    CommonModule,
    ReceiptCancelRoutingModule
  ]
})
export class ReceiptCancelModule { }
