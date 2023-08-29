import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrnReprintRoutingModule } from './grn-reprint-routing.module';
import { GrnReprintComponent } from './grn-reprint.component';


@NgModule({
  declarations: [
    GrnReprintComponent
  ],
  imports: [
    CommonModule,
    GrnReprintRoutingModule
  ]
})
export class GrnReprintModule { }
