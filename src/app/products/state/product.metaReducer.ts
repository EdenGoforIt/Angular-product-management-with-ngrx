import { ActionReducerMap } from '@ngrx/store';
import * as fromProduct from './product.reducer';

import { ActionReducer, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { State } from '.';

export const reducers: ActionReducerMap<State> = {
  products: fromProduct.productReducer,
};

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: ['products'],
    rehydrate: true,
  })(reducer);
}

export const metaReducers: Array<MetaReducer<any, any>> = [
  localStorageSyncReducer,
];
