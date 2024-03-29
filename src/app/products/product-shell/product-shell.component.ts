import { ProductApiActions } from 'src/app/products/state/actions';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../product';

/* NgRx */
import { select, Store } from '@ngrx/store';
import {
  State,
  getProductFeatureState,
  getShowProductCode,
  getCurrentProduct,
  getProducts,
  getError,
} from '../state';

import { ProductPageActions } from '../state/actions';

@Component({
  templateUrl: './product-shell.component.html',
})
export class ProductShellComponent implements OnInit {
  displayCode$: Observable<boolean>;
  selectedProduct$: Observable<Product>;
  products$: Observable<Product[]>;
  errorMessage$: Observable<string>;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    // Do NOT subscribe here because it uses an async pipe
    // This gets the initial values until the load is complete.
    this.products$ = this.store.pipe(select(getProducts));

    this.store.pipe(select(getProducts)).subscribe((data) => {
      console.log('getProducts in the shell', data);
    });

    // Do NOT subscribe here because it uses an async pipe
    this.errorMessage$ = this.store.pipe(select(getError));

    this.store.dispatch(ProductPageActions.loadProducts());

    // Do NOT subscribe here because it uses an async pipe
    this.selectedProduct$ = this.store.pipe(select(getCurrentProduct));

    // Do NOT subscribe here because it uses an async pipe
    this.displayCode$ = this.store.pipe(select(getShowProductCode));

    // @TODO: this is the test and can be removed
    // this.store.dispatch(ProductApiActions.testCountries());
  }

  checkChanged(): void {
    this.store.dispatch(ProductPageActions.toggleProductCode());
  }

  newProduct(): void {
    this.store.dispatch(ProductPageActions.initializeCurrentProduct());
  }

  productSelected(product: Product): void {
    this.store.dispatch(
      ProductPageActions.setCurrentProduct({ currentProductId: product.id })
    );
  }

  deleteProduct(product: Product): void {
    this.store.dispatch(
      ProductPageActions.deleteProduct({ productId: product.id })
    );
  }

  clearProduct(): void {
    this.store.dispatch(ProductPageActions.clearCurrentProduct());
  }
  saveProduct(product: Product): void {
    this.store.dispatch(ProductPageActions.createProduct({ product }));
  }

  updateProduct(product: Product): void {
    this.store.dispatch(ProductPageActions.updateProduct({ product }));
  }
}
