import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DynamicFormModule } from './../shared/dynamic-form/dynamic-form.module';
import { SharedModule } from './../shared/shared.module';
import { AddressComponent } from './create-order-shell/address/address.component';
import { CreateOrderShellComponent } from './create-order-shell/create-order-shell.component';
import { PhysicalAddressComponent } from './create-order-shell/physical-address/physical-address.componet';
import { OrderEffects } from './state/order.effects';
import { orderReducer } from './state/order.reducers';

const createOrderRoute: Routes = [
  { path: '', component: CreateOrderShellComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(createOrderRoute),
    RouterModule,
    StoreModule.forFeature('order', { order: orderReducer }),
    EffectsModule.forFeature([OrderEffects]),
    DynamicFormModule,
    SharedModule,
    CommonModule,
  ],
  declarations: [
    CreateOrderShellComponent,
    AddressComponent,
    PhysicalAddressComponent,
  ],
  exports: [],
})
export class CreateOrderModule {}
