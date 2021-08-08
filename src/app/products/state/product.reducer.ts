import { on, createReducer } from "@ngrx/store";
import { ProductState } from ".";
import { ProductAPIActions, ProductPageActions } from "./actions";

const initialState: ProductState = {
    showProductCode: true,
    currentProductId: null,
    products: [],
    error: ''
};



export const productReducer = createReducer<ProductState>(
    initialState,
    on(ProductPageActions.toggleProductAction, (state): ProductState => {
        return { ...state, showProductCode: !state.showProductCode };
    }),
    on(ProductPageActions.setCurrentProduct, (state, action): ProductState => {
        return { ...state, currentProductId: action.currentProductId };
    }),
    on(ProductPageActions.clearCurrentProduct, (state): ProductState => {
        return { ...state, currentProductId: null };
    }),
    on(ProductPageActions.initializeCurrentProduct, (state): ProductState => {
        return {
            ...state, currentProductId: 0
        };
    }),
    on(ProductAPIActions.loadProductsSuccess, (state, action): ProductState => {
        return {
            ...state, products: action.products, error: ''
        };
    }),
    on(ProductAPIActions.loadProductsFailure, (state, action): ProductState => {
        return {
            ...state, error: action.error
        }
    }),
    on(ProductAPIActions.updateProductSuccess, (state, action): ProductState => {
        const updatedProducts = state.products.map(item => action.product.id === item.id ? action.product : item);
        return {
            ...state,
            products: updatedProducts,
            currentProductId: action.product.id,
            error: ''
        };
    }),
    on(ProductAPIActions.updateProductFailure, (state, action): ProductState => {
        return {
            ...state,
            error: action.error
        };
    })

);
