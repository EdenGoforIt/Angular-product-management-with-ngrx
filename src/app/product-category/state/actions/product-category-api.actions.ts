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

export const updateProductCategorySuccess = createAction(
  '[Product Category API] Update Product Success',
  props<{ productCategory: ProductCategory }>()
);

export const updateProductCategoryFailure = createAction(
  '[Product Category API] Update Product Failure',
  props<{ error: string }>()
);
