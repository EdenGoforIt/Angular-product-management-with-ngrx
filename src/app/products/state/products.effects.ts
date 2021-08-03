import { ProductService } from './../product.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ProductActions from './product.actions';
import { mergeMap, map, catchError, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable()
export class ProductEffects {

    constructor(private actions$: Actions, private productService: ProductService) {
    }
    loadProducts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProductActions.loadProducts),
            mergeMap(() =>
                this.productService.getProducts().pipe(
                    map(products => ProductActions.loadProductsSuccess({ products })),
                    catchError(error =>
                        of(ProductActions.loadProductsFailure({ error }))
                    )
                )
            )
        );
    });

    updateProduct$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProductActions.updateProduct),
            concatMap(action => {
                return this.productService.updateProduct(action.product).pipe(
                    map(product => ProductActions.updateProductSuccess({ product })),
                    catchError(error => of(ProductActions.updateProductFailure({ error })))
                );
            })

        );
    });

}