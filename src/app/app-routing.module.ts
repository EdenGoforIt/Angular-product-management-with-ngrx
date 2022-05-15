import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './user/auth-guard.service';

import { ShellComponent } from './home/shell.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { PageNotFoundComponent } from './home/page-not-found/page-not-found.component';
import { LoginComponent } from './user/login.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'products',
        // canActivate: [AuthGuard],
        loadChildren: () =>
          import('./products/product.module').then((m) => m.ProductModule),
      },
      {
        path: 'product-categories',
        loadChildren: () =>
          import('./product-category/product-category.module').then(
            (m) => m.ProductCategoryModule
          ),
      },
      {
        path: 'create-order',
        loadChildren: () =>
          import('./create-order/create-order.module').then(
            (m) => m.CreateOrderModule
          ),
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
