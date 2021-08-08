import { ProductService } from './../product.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductAPIActions, ProductPageActions } from './actions';
import { mergeMap, map, catchError, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable()
export class ProductEffects {

    constructor(private actions$: Actions, private productService: ProductService) {
    }
    loadProducts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProductPageActions.loadProducts),
            mergeMap(() =>
                this.productService.getProducts().pipe(
                    map(products => ProductAPIActions.loadProductsSuccess({ products })),
                    catchError(error =>
                        of(ProductAPIActions.loadProductsFailure({ error }))
                    )
                )
            )
        );
    });

    updateProduct$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProductPageActions.updateProduct),
            concatMap(action => {
                return this.productService.updateProduct(action.product).pipe(
                    map(product => ProductAPIActions.updateProductSuccess({ product })),
                    catchError(error => of(ProductAPIActions.updateProductFailure({ error })))
                );
            })

        );
    });

}