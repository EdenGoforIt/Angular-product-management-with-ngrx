import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CreateOrderShellComponent } from './create-order-shell/create-order-shell.component';

const createOrderRoute: Routes = [
  { path: '', component: CreateOrderShellComponent },
];

@NgModule({
  imports: [RouterModule.forChild(createOrderRoute), SharedModule],
  declarations: [CreateOrderShellComponent],
  exports: [],
})
export class CreateOrderModule {}
