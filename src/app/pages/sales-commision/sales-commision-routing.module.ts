import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesCommisionComponent } from './sales-commision.component';

const routes: Routes = [{ path: '', component: SalesCommisionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesCommisionRoutingModule { }
