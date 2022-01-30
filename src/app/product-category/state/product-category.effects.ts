import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map, catchError, concatMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProductCategoryService } from '../product-category-service';
import {
  productCategoryAPIActions,
  productCategoryPageActions,
} from './actions';

@Injectable()
export class ProductCategoryEffects {
  constructor(
    private actions$: Actions,
    private productCategoryService: ProductCategoryService
  ) {}

  loadProductCategories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(productCategoryPageActions.loadProductCategories),
      mergeMap(() =>
        this.productCategoryService.getProductCategories().pipe(
          map((productCategories) =>
            productCategoryAPIActions.loadProductCategoriesSuccess({
              productCategories,
            })
          ),
          catchError((error) =>
            of(
              productCategoryAPIActions.loadProductCategoriesFailure({ error })
            )
          )
        )
      )
    );
  });
}
