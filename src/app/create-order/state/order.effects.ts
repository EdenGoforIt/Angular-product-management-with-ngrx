import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, map, mergeMap, tap } from 'rxjs/operators';
import { Order } from '../order';
import * as OrderActions from './order.actions';

@Injectable()
export class OrderEffects {
  constructor(private actions$: Actions) {}

  getOrder(): Observable<Order> {
    return of({
      id: 1,
      name: 'testOrder',
      address: {
        physicalAddress: null,
      },
    });
  }

  loadOrder$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(OrderActions.loadOrder),
      mergeMap(() =>
        this.getOrder().pipe(
          tap(console.log),
          map(order =>
            OrderActions.loadOrderSuccess({
              order,
            })
          ),
          catchError(error => of(OrderActions.loadOrderFailure({ error })))
        )
      )
    );
  });
}
