import { createReducer, on } from '@ngrx/store';
import { ProductCategory } from '../product-category';
import {
  productCategoryAPIActions,
  productCategoryPageActions,
} from './actions';

export interface ProductCategoryState {
  showProductCategoryCode: boolean;
  currentProductCategoryId: number | null;
  productCategories: ProductCategory[];
  error: string;
}

const initialState: ProductCategoryState = {
  showProductCategoryCode: false,
  currentProductCategoryId: null,
  productCategories: [],
  error: '',
};

export const productCategoryReducer = createReducer<ProductCategoryState>(
  initialState,
  on(
    productCategoryAPIActions.loadProductCategoriesSuccess,
    (state, action): ProductCategoryState => {
      return {
        ...state,
        productCategories: action.productCategories,
        error: '',
      };
    }
  ),
  on(
    productCategoryAPIActions.loadProductCategoriesFailure,
    (state, action): ProductCategoryState => {
      return {
        ...state,
        error: action.error,
      };
    }
  ),
  on(productCategoryPageActions.toggleCode, (state): ProductCategoryState => {
    return {
      ...state,
      showProductCategoryCode: !state.showProductCategoryCode,
    };
  })
);
