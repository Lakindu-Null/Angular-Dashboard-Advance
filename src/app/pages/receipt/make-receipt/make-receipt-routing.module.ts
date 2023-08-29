import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MakeReceiptComponent } from './make-receipt.component';

const routes: Routes = [{ path: '', component: MakeReceiptComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MakeReceiptRoutingModule { }
