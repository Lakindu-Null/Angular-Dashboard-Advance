import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VolumeTypeRoutingModule } from './volume-type-routing.module';
import { VolumeTypeComponent } from './volume-type.component';


@NgModule({
  declarations: [
    VolumeTypeComponent
  ],
  imports: [
    CommonModule,
    VolumeTypeRoutingModule
  ]
})
export class VolumeTypeModule { }
