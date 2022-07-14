import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormModule } from '../shared/dynamic-form/dynamic-form.module';
import { SortPipe } from '../shared/pipes/sort.pipe';
import { SharedModule } from '../shared/shared.module';
import { CreateOrderShellComponent } from './create-order-shell/create-order-shell.component';

const createOrderRoute: Routes = [
  { path: '', component: CreateOrderShellComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(createOrderRoute),
    DynamicFormModule, SharedModule,
  ],
  declarations: [CreateOrderShellComponent],
  exports: [],
})
export class CreateOrderModule {}
