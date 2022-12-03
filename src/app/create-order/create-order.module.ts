import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { DynamicFormModule } from './../shared/dynamic-form/dynamic-form.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOrderShellComponent } from './create-order-shell/create-order-shell.component';

const createOrderRoute: Routes = [
  { path: '', component: CreateOrderShellComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(createOrderRoute),
    RouterModule,
    DynamicFormModule,
    SharedModule,
    CommonModule
  ],
  declarations: [CreateOrderShellComponent],
  exports: [],
})
export class CreateOrderModule { }
