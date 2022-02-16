import { createAction, props } from '@ngrx/store';

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
