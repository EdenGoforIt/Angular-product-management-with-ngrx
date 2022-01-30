import { createFeatureSelector } from '@ngrx/store';
import * as AppState from '../../state/app.state';
import { ProductCategoryState } from './product-category.reducer';
import { createSelector } from '@ngrx/store';

// Extend State
export interface State extends AppState.State {
  productCategories: ProductCategoryState;
}

const productCategoryFeatureState =
  createFeatureSelector<ProductCategoryState>('productCategories');

export const getProductCategories = createSelector(
  productCategoryFeatureState,
  (state) => state.productCategories
);

export const getError = createSelector(
  productCategoryFeatureState,
  (state) => state.error
);
