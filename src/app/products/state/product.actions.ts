import { createAction, props } from '@ngrx/store'
import { Product } from '../product';
import * as ProductContants from './product.constants';

export const toggleProductAction = createAction(ProductContants.TOGGLE_PRODUCT_CODE);

export const setCurrentProduct = createAction(ProductContants.SET_CURRENT_PRODUCT,
    props<{ product: Product }>()
);

export const clearCurrentProduct = createAction(ProductContants.CLEAR_CURRENT_PRODUCT);

export const initializeCurrentProduct = createAction(ProductContants.INITIALIZE_CURRENT_PRODUCT);