import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceReprintRoutingModule } from './invoice-reprint-routing.module';
import { InvoiceReprintComponent } from './invoice-reprint.component';


@NgModule({
  declarations: [
    InvoiceReprintComponent
  ],
  imports: [
    CommonModule,
    InvoiceReprintRoutingModule
  ]
})
export class InvoiceReprintModule { }
