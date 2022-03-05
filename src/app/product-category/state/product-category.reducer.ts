import { createReducer, on } from '@ngrx/store';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ProductApiActions } from 'src/app/products/state/actions';
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
  }),
  on(
    productCategoryPageActions.setCurrentProductCategory,
    (state, action): ProductCategoryState => {
      return {
        ...state,
        currentProductCategoryId: action.currentProductCategoryId,
      };
    }
  ),
  on(
    productCategoryPageActions.initializeCurrentProductCategory,
    (state): ProductCategoryState => {
      return { ...state, currentProductCategoryId: 0 };
    }
  ),
  on(
    productCategoryAPIActions.updateProductCategorySuccess,
    (state, action): ProductCategoryState => {
      const updatedProductCategories = state.productCategories.map((pc) =>
        action.productCategory.id === pc.id ? action.productCategory : pc
      );

      return {
        ...state,
        productCategories: updatedProductCategories,
        currentProductCategoryId: action.productCategory.id,
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
  )
);
