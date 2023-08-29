import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MakeInvoiceComponent } from './make-invoice.component';

const routes: Routes = [{ path: '', component: MakeInvoiceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MakeInvoiceRoutingModule { }
