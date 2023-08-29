import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrnComponent } from './grn.component';

const routes: Routes = [
  { path: '', component: GrnComponent },
  { path: 'make-grn', loadChildren: () => import('./make-grn/make-grn.module').then(m => m.MakeGrnModule) },
  { path: 'grn-reprint', loadChildren: () => import('./grn-reprint/grn-reprint.module').then(m => m.GrnReprintModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrnRoutingModule { }
