import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceiptReprintRoutingModule } from './receipt-reprint-routing.module';
import { ReceiptReprintComponent } from './receipt-reprint.component';


@NgModule({
  declarations: [
    ReceiptReprintComponent
  ],
  imports: [
    CommonModule,
    ReceiptReprintRoutingModule
  ]
})
export class ReceiptReprintModule { }
