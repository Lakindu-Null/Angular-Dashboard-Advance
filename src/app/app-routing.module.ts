import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},

  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
  
  { path: 'company', loadChildren: () => import('./pages/company/company.module').then(m => m.CompanyModule) },
  { path: 'volume-type', loadChildren: () => import('./pages/volume-type/volume-type.module').then(m => m.VolumeTypeModule) },
  { path: 'color', loadChildren: () => import('./pages/color/color.module').then(m => m.ColorModule) },
  { path: 'category', loadChildren: () => import('./pages/category/category.module').then(m => m.CategoryModule) },
  { path: 'product', loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule) },
  { path: 'users', loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule) },

  { path: 'grn', loadChildren: () => import('./pages/grn/grn.module').then(m => m.GrnModule) },
  { path: 'invoice', loadChildren: () => import('./pages/invoice/invoice.module').then(m => m.InvoiceModule) },
  { path: 'sales', loadChildren: () => import('./pages/sales/sales.module').then(m => m.SalesModule) },
  { path: 'receipt', loadChildren: () => import('./pages/receipt/receipt.module').then(m => m.ReceiptModule) },
  { path: 'pending-cheques', loadChildren: () => import('./pages/pending-cheques/pending-cheques.module').then(m => m.PendingChequesModule) }, 
  
  { path: 'sales-commision', loadChildren: () => import('./pages/sales-commision/sales-commision.module').then(m => m.SalesCommisionModule) },
  { path: 'current-stock', loadChildren: () => import('./pages/current-stock/current-stock.module').then(m => m.CurrentStockModule) },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
