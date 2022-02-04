import { createFeatureSelector } from '@ngrx/store';
import * as AppState from '../../state/app.state';
import { ProductCategoryState } from './product-category.reducer';
import { createSelector } from '@ngrx/store';
import { initialProductCategory } from '../product-category';
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
export const getDisplayCode = createSelector(
  productCategoryFeatureState,
  (state) => state.showProductCategoryCode
);

export const getCurrentProductCategoryId = createSelector(
  productCategoryFeatureState,
  (state) => state.currentProductCategoryId
);

export const getSelectedProductCategory = createSelector(
  productCategoryFeatureState,
  getCurrentProductCategoryId,
  (state, currentProductCategoryId) => {
    if (currentProductCategoryId === 0) {
      return initialProductCategory;
    }
    return currentProductCategoryId
      ? state.productCategories.find((x) => x.id === currentProductCategoryId)
      : null;
  }
);
