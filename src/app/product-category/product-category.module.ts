import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { productCategoryReducer } from './state/product-category.reducer';
import { ProductCategoryEffects } from './state/product-category.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProductCategoryShellComponent } from './product-category-shell/product-category-shell.component';
import { ProductCategoryListComponent } from './product-category-list/product-category-list.component';
import { CommonModule } from '@angular/common';
const productCategoryRoutes: Routes = [
  { path: '', component: ProductCategoryShellComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(productCategoryRoutes),
    StoreModule.forFeature('productCategories', productCategoryReducer),
    EffectsModule.forFeature([ProductCategoryEffects]),
    CommonModule,
  ],
  declarations: [ProductCategoryShellComponent, ProductCategoryListComponent],
})
export class ProductCategoryModule {}
