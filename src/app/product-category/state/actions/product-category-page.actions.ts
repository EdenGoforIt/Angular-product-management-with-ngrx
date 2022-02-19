import { createAction, props } from '@ngrx/store';
import { ProductCategory } from '../../product-category';

export const loadProductCategories = createAction(
  '[Product Category Page] Load'
);

export const toggleCode = createAction('[Product Category Page] Toggle Code');

export const setCurrentProductCategory = createAction(
  '[Product Category Page] Set Current Project Category',
  props<{ currentProductCategoryId: number }>()
);

export const initializeCurrentProductCategory = createAction(
  '[Product Category Page] Initialize Current Product Category'
);

export const createProductCategory = createAction(
  '[Product Category Page] Create Product Category',
  props<{ productCategory: ProductCategory }>()
);

export const updateProductCategory = createAction(
  '[Product Category Page] Update Product Category',
  props<{ productCategory: ProductCategory }>()
);

export const deleteProductCategory = createAction(
  '[Product Category Page] Delete Product Category',
  props<{ productCategory: ProductCategory }>()
);

export const clearCurrentProductCategory = createAction(
  '[Product Category Page] Clear Current Product Category'
);
