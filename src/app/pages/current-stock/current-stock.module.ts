import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrentStockRoutingModule } from './current-stock-routing.module';
import { CurrentStockComponent } from './current-stock.component';


@NgModule({
  declarations: [
    CurrentStockComponent
  ],
  imports: [
    CommonModule,
    CurrentStockRoutingModule
  ]
})
export class CurrentStockModule { }
