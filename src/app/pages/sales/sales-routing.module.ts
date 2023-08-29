import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesComponent } from './sales.component';

const routes: Routes = [
  { path: '', component: SalesComponent },
  { path: 'sales-return', loadChildren: () => import('./sales-return/sales-return.module').then(m => m.SalesReturnModule) },
  { path: 'sales-return-reprint', loadChildren: () => import('./sales-return-reprint/sales-return-reprint.module').then(m => m.SalesReturnReprintModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
