import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Product } from "../product";
import * as AppState from '../../state/app.state';

const initialProduct = {
    id: 0,
    productName: '',
    productCode: '',
    description: '',
    starRating: 0
};

export interface State extends AppState.State {
    products: ProductState
}

export interface ProductState {
    showProductCode: boolean;
    currentProductId: number | null,
    products: Product[],
    error: string
}

const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(
    getProductFeatureState,
    state => state.showProductCode
);
export const getCurrentProductId = createSelector(
    getProductFeatureState,
    state => state.currentProductId
);
export const getCurrentProduct = createSelector(
    getProductFeatureState,
    getCurrentProductId,
    (state, currentProductId) => {
        if (currentProductId === 0) {
            return initialProduct;
        }
        return currentProductId ? state.products.find(x => x.id === currentProductId) : null
    }
);
export const getProducts = createSelector(
    getProductFeatureState,
    state => state.products
);

export const getError = createSelector(getProductFeatureState,
    state => state.error
);
