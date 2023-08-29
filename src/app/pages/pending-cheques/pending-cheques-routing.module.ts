import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PendingChequesComponent } from './pending-cheques.component';

const routes: Routes = [{ path: '', component: PendingChequesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PendingChequesRoutingModule { }
