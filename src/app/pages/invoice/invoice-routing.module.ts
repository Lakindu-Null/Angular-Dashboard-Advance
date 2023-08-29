import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponent } from './invoice.component';

const routes: Routes = [
  { path: '', component: InvoiceComponent },
  { path: 'make-invoice', loadChildren: () => import('./make-invoice/make-invoice.module').then(m => m.MakeInvoiceModule) },
  { path: 'invoice-reprint', loadChildren: () => import('./invoice-reprint/invoice-reprint.module').then(m => m.InvoiceReprintModule) }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
