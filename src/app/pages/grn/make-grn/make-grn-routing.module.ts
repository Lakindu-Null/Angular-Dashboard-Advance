import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MakeGrnComponent } from './make-grn.component';

const routes: Routes = [{ path: '', component: MakeGrnComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MakeGrnRoutingModule { }
