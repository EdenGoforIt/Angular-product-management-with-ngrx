import { Order } from './../order';
import { createReducer, on } from '@ngrx/store';
import * as OrderActions from './order.actions';

export interface OrderState {
  order: Order | null;
  error: string;
}

const initialState: OrderState = {
  order: null,
  error: '',
};

export const productCategoryReducer = createReducer<OrderState>(
  initialState,
  on(
    OrderActions.loadOrderSuccess,
    (state, action): OrderState => {
      return {
        ...state,
        order: action.order,
        error: '',
      };
    }
  ),
  on(OrderActions.loadOrderFailure, (state, action) => {
    return { ...state, error: action.error };
  })
);
