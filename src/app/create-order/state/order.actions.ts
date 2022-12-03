import { createAction, props } from "@ngrx/store";
import { Order } from './../order';


export const loadOrder = createAction(
  '[Order] Load'
);

export const loadOrderSuccess = createAction(
  '[Order] Load Success',
  props<{ order: Order; }>()
);

export const loadOrderFailure = createAction(
  '[Order] Load Failure',
  props<{ error: any; }>()
);
