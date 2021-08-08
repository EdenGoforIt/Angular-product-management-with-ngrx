import { createAction, props } from '@ngrx/store'
import { Product } from '../../product';
import * as ProductContants from '../product.constants';

export const loadProductsSuccess = createAction(ProductContants.LOAD_PRODUCT_SUCCESS, props<{ products: Product[] }>());

export const loadProductsFailure = createAction(ProductContants.LOAD_PRODUCT_FAILURE, props<{ error: string }>());

export const updateProduct = createAction(ProductContants.UPDATE_PRODUCT, props<{ product: Product }>());

export const updateProductSuccess = createAction(ProductContants.UPDATE_PRODUCT_SUCCESS, props<{ product: Product }>());

export const updateProductFailure = createAction(ProductContants.UPDATE_PRODUCT_FAILURE, props<{ error: string }>());

