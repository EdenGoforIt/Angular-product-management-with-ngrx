import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './product.reducer';

// Extends the app state to include the product feature.
// This is required because products are lazy loaded.
// So the reference to ProductState cannot be added to app.state.ts directly.
// export interface State extends AppState.State {
//     products: ProductState;
// }

// @TODO: not extending app state at the moment extends AppState.State
export interface State {
  products: ProductState;
}

// Selector functions
export const getProductFeatureState = createFeatureSelector<State>('products');

export const getShowProductCode = createSelector(
  getProductFeatureState,
  (state) => state.products.showProductCode
);

export const getCurrentProductId = createSelector(
  getProductFeatureState,
  (state) => state.products.currentProductId
);

export const getCurrentProduct = createSelector(
  getProductFeatureState,
  getCurrentProductId,
  (state, currentProductId) => {
    if (currentProductId === 0) {
      return {
        id: 0,
        productName: '',
        productCode: 'New',
        description: '',
        starRating: 0,
      };
    } else {
      return currentProductId
        ? state.products.products.find((p) => p.id === currentProductId)
        : null;
    }
  }
);

export const getProducts = createSelector(getProductFeatureState, (state) => {
  console.log('in the feature selector', state);
  return state.products.products;
});

// to simplify the state.prdoucts.products,
// https://stackblitz.com/edit/ngrx-localstorage-128-fix-gzslmg?file=src%2Fapp%2Fstore%2Fmetareducers.ts,src%2Fapp%2Ffeature2%2Fstore%2Freducers%2Findex.ts

export const getError = createSelector(
  getProductFeatureState,
  (state) => state.products.error
);
