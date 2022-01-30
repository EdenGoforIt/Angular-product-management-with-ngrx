import { createAction, props } from '@ngrx/store';
import { ProductCategory } from '../../product-category';

export const loadProductCategoriesSuccess = createAction(
  '[Product Category API] Load Success',
  props<{ productCategories: ProductCategory[] }>()
);

export const loadProductCategoriesFailure = createAction(
  '[Product Category API] Load Failure',
  props<{ error: string }>()
);
