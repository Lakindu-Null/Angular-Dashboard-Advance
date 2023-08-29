import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MakeInvoiceRoutingModule } from './make-invoice-routing.module';
import { MakeInvoiceComponent } from './make-invoice.component';


@NgModule({
  declarations: [
    MakeInvoiceComponent
  ],
  imports: [
    CommonModule,
    MakeInvoiceRoutingModule
  ]
})
export class MakeInvoiceModule { }
