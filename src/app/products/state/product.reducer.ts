import { Product } from '../product';

/* NgRx */
import { createReducer, on } from '@ngrx/store';
import { ProductApiActions, ProductPageActions } from './actions';

// State for this feature (Product)
export interface ProductState {
  showProductCode: boolean;
  currentProductId: number | null;
  products: Product[];
  countries: any[];
  error: string;
}

const initialState: ProductState = {
  showProductCode: true,
  currentProductId: null,
  products: [],
  countries: [],
  error: '',
};

export const productReducer = createReducer<ProductState>(
  initialState,
  on(ProductPageActions.toggleProductCode, (state): ProductState => {
    return {
      ...state,
      showProductCode: !state.showProductCode,
    };
  }),
  on(ProductPageActions.setCurrentProduct, (state, action): ProductState => {
    return {
      ...state,
      currentProductId: action.currentProductId,
    };
  }),
  on(ProductPageActions.clearCurrentProduct, (state): ProductState => {
    return {
      ...state,
      currentProductId: null,
    };
  }),
  on(ProductPageActions.initializeCurrentProduct, (state): ProductState => {
    return {
      ...state,
      currentProductId: 0,
    };
  }),
  on(ProductApiActions.loadProductsSuccess, (state, action): ProductState => {
    return {
      ...state,
      products: action.products,
      error: '',
    };
  }),
  on(ProductApiActions.loadProductsFailure, (state, action): ProductState => {
    return {
      ...state,
      products: [],
      error: action.error,
    };
  }),
  on(ProductApiActions.updateProductSuccess, (state, action): ProductState => {
    const updatedProducts = state.products.map((item) =>
      action.product.id === item.id ? action.product : item
    );
    return {
      ...state,
      products: updatedProducts,
      currentProductId: action.product.id,
      error: '',
    };
  }),
  on(ProductApiActions.updateProductFailure, (state, action): ProductState => {
    return {
      ...state,
      error: action.error,
    };
  }),
  // After a create, the currentProduct is the new product.
  on(ProductApiActions.createProductSuccess, (state, action): ProductState => {
    return {
      ...state,
      products: [...state.products, action.product],
      currentProductId: action.product.id,
      error: '',
    };
  }),
  on(ProductApiActions.createProductFailure, (state, action): ProductState => {
    return {
      ...state,
      error: action.error,
    };
  }),
  // After a delete, the currentProduct is null.
  on(ProductApiActions.deleteProductSuccess, (state, action): ProductState => {
    return {
      ...state,
      products: state.products.filter(
        (product) => product.id !== action.productId
      ),
      currentProductId: null,
      error: '',
    };
  }),
  on(ProductApiActions.deleteProductFailure, (state, action): ProductState => {
    return {
      ...state,
      error: action.error,
    };
  }),
  on(ProductApiActions.testCountriesSuccess, (state, action): ProductState => {
    console.log('got the country in the reducer', action);
    return { ...state, countries: action.countries };
  })
);


// https://stackblitz.com/edit/ngrx-localstorage-128-fix-gzslmg?file=src%2Fapp%2Fstore%2Fmetareducers.ts,src%2Fapp%2Ffeature2%2Fstore%2Freducers%2Findex.ts


