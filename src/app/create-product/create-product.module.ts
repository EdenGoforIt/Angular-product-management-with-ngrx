import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CreateProductShellComponent } from './create-product-shell/create-product-shell.component';

const createProductRoute: Routes = [
  { path: '', component: CreateProductShellComponent },
];

@NgModule({
  imports: [RouterModule.forChild(createProductRoute), SharedModule],
  declarations: [CreateProductShellComponent],
  exports: [],
})
export class CreateProductModule {}
