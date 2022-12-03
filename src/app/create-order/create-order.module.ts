import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { DynamicFormModule } from './../shared/dynamic-form/dynamic-form.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOrderShellComponent } from './create-order-shell/create-order-shell.component';
import { orderReducer } from './state/order.reducers';
import * as OrderActions from './state/order.actions';

const createOrderRoute: Routes = [
  { path: '', component: CreateOrderShellComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(createOrderRoute),
    RouterModule,
    StoreModule.forFeature('order', { order: orderReducer }),
    DynamicFormModule,
    SharedModule,
    CommonModule
  ],
  declarations: [CreateOrderShellComponent],
  exports: [],
})
export class CreateOrderModule { }
