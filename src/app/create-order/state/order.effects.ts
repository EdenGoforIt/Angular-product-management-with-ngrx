import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, map, mergeMap } from 'rxjs/operators';
import { Order } from '../order';
import * as OrderActions from './order.actions';



@Injectable()
export class ProductCategoryEffects {
  constructor(
    private actions$: Actions,
  ) { }

  getOrder(): Observable<Order> {
    return of({
      id: 1,
      name: 'testOrder',
      address: {
        physicalAddress: null
      }
    });
  }

  loadProductCategories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(OrderActions.loadOrder),
      mergeMap(() =>
        this.getOrder().pipe(
          map((order) =>
            OrderActions.loadOrderSuccess({
              order,
            })
          ),
          catchError((error) =>
            of(
              OrderActions.loadOrderFailure({ error })
            )
          )
        )
      )
    );
  });

}
