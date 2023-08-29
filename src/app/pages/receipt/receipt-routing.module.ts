import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceiptComponent } from './receipt.component';

const routes: Routes = [
  { path: '', component: ReceiptComponent },
  { path: 'make-receipt', loadChildren: () => import('./make-receipt/make-receipt.module').then(m => m.MakeReceiptModule) },
  { path: 'receipt-cancel', loadChildren: () => import('./receipt-cancel/receipt-cancel.module').then(m => m.ReceiptCancelModule) },
  { path: 'receipt-reprint', loadChildren: () => import('./receipt-reprint/receipt-reprint.module').then(m => m.ReceiptReprintModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceiptRoutingModule { }
