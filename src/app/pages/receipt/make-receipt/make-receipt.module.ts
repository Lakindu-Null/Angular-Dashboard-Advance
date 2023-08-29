import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MakeReceiptRoutingModule } from './make-receipt-routing.module';
import { MakeReceiptComponent } from './make-receipt.component';


@NgModule({
  declarations: [
    MakeReceiptComponent
  ],
  imports: [
    CommonModule,
    MakeReceiptRoutingModule
  ]
})
export class MakeReceiptModule { }
