import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OrderState } from './order.reducers';
export interface State {
  order: OrderState;
}
const productCategoryFeatureState = createFeatureSelector<State>('order');

export const getOrder = createSelector(
  productCategoryFeatureState,
  state => state.order.order
);
