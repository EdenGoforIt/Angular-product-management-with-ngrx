import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OrderState } from './order.reducers';

const productCategoryFeatureState = createFeatureSelector<OrderState>('order');

export const getOrder = createSelector(
  productCategoryFeatureState,
  state => state.order
);
