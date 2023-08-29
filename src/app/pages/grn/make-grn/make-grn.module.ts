import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MakeGrnRoutingModule } from './make-grn-routing.module';
import { MakeGrnComponent } from './make-grn.component';


@NgModule({
  declarations: [
    MakeGrnComponent
  ],
  imports: [
    CommonModule,
    MakeGrnRoutingModule
  ]
})
export class MakeGrnModule { }
