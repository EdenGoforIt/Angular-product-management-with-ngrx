import { createAction, on, createReducer, createFeatureSelector, createSelector } from "@ngrx/store";
import { Product } from "../product";
import * as AppState from '../../state/app.state';
import * as ProductActions from './product.actions';
import { Action } from "rxjs/internal/scheduler/Action";

export interface State extends AppState.State {
    products: ProductState
}

export interface ProductState {
    showProductCode: boolean;
    currentProduct: Product,
    products: Product[]
}
const initialProduct = {
    id: 0,
    productName: '',
    productCode: '',
    description: '',
    starRating: 0
};

const initialState: ProductState = {
    showProductCode: true,
    currentProduct: null,
    products: []
};

const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(
    getProductFeatureState,
    state => state.showProductCode
);
export const getCurrentProduct = createSelector(
    getProductFeatureState,
    state => state.currentProduct
);
export const getProducts = createSelector(
    getProductFeatureState,
    state => state.products
);

export const productReducer = createReducer<ProductState>(
    initialState,
    on(ProductActions.toggleProductAction, (state): ProductState => {
        return { ...state, showProductCode: !state.showProductCode };
    }),
    on(ProductActions.setCurrentProduct, (state, action): ProductState => {
        return { ...state, currentProduct: action.product };
    }),
    on(ProductActions.clearCurrentProduct, (state): ProductState => {
        return { ...state, currentProduct: null };
    }),
    on(ProductActions.initializeCurrentProduct, (state): ProductState => {
        return {
            ...state, currentProduct: initialProduct
        };
    })

);
