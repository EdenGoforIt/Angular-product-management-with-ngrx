import { testCountries } from './actions/product-api.actions';
import { LocalStorageService } from './../../shared/services/local-storage.service';
import { Injectable } from '@angular/core';
/* NgRx */
import { Actions, createEffect, ofType } from '@ngrx/effects';
/* NgRx */
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import {
  catchError,
  concatMap,
  filter,
  map,
  mergeMap,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { ProductService } from '../product.service';
import { getProducts, State } from '../state';
import { ProductApiActions, ProductPageActions } from './actions';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService,
    private localStorageService: LocalStorageService,
    private store: Store<State>
  ) {}

  // loadCountries$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(ProductApiActions.testCountries),
  //     switchMap(() => {
  //       const countries = this.localStorageService.getByProperty(
  //         'test',
  //         'countries'
  //       );
  //       return countries ? of({ countries }) : of({ countries: [] });
  //     }),
  //     mergeMap(({ countries }) => {
  //       if (countries.length) {
  //         ProductApiActions.testCountriesSuccess({ countries });
  //       }
  //       of([{ countries: [{ key: 1, value: 'England' }] }]).pipe(
  //         map((countries) =>
  //           ProductApiActions.testCountriesSuccess({ countries })
  //         ),
  //         catchError((error) =>
  //           of(ProductApiActions.loadProductsFailure({ error }))
  //         )
  //       );
  //       console.log('data', countries);
  //     })
  //   );
  // });

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductPageActions.loadProducts),
      // When checking with the state
      // withLatestFrom(this.store.select(getProducts)),
      // filter(([_, products]) => !!products),
      mergeMap(() =>
        this.productService.getProducts().pipe(
          map((products) => {
            return ProductApiActions.loadProductsSuccess({ products });
          }),
          catchError((error) =>
            of(ProductApiActions.loadProductsFailure({ error }))
          )
        )
      )
    );
  });

  updateProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductPageActions.updateProduct),
      concatMap((action) =>
        this.productService.updateProduct(action.product).pipe(
          map((product) => ProductApiActions.updateProductSuccess({ product })),
          catchError((error) =>
            of(ProductApiActions.updateProductFailure({ error }))
          )
        )
      )
    );
  });

  createProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductPageActions.createProduct),
      concatMap((action) =>
        this.productService.createProduct(action.product).pipe(
          map((product) => ProductApiActions.createProductSuccess({ product })),
          catchError((error) =>
            of(ProductApiActions.createProductFailure({ error }))
          )
        )
      )
    );
  });

  deleteProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductPageActions.deleteProduct),
      mergeMap((action) =>
        this.productService.deleteProduct(action.productId).pipe(
          map(() =>
            ProductApiActions.deleteProductSuccess({
              productId: action.productId,
            })
          ),
          catchError((error) =>
            of(ProductApiActions.deleteProductFailure({ error }))
          )
        )
      )
    );
  });

  // /**
  //  * Example of check if there is a data in the reducer
  //  */
  // readonly loadSongsIfNotLoaded$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     // when the songs page is opened
  //     ofType(songsPageActions.opened),
  //     // then select songs from the store
  //     concatLatestFrom(() => this.store.select(selectSongs)),
  //     // and check if the songs are loaded
  //     filter(([, songs]) => !songs),
  //     // if not, load songs from the API
  //     exhaustMap(() => {
  //       return this.songsService.getSongs().pipe(
  //         map((songs) => songsApiActions.songsLoadedSuccess({ songs })),
  //         catchError((error: { message: string }) =>
  //           of(songsApiActions.songsLoadedFailure({ error }))
  //         )
  //       );
  //     })
  //   );
  // });
}
