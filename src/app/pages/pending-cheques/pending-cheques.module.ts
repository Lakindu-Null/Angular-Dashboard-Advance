import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PendingChequesRoutingModule } from './pending-cheques-routing.module';
import { PendingChequesComponent } from './pending-cheques.component';


@NgModule({
  declarations: [
    PendingChequesComponent
  ],
  imports: [
    CommonModule,
    PendingChequesRoutingModule
  ]
})
export class PendingChequesModule { }
