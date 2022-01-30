import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductCategory } from '../product-category';
import { Store } from '@ngrx/store';
import { State, getProductCategories, getError } from '../state';
import { productCategoryPageActions } from '../state/actions';

@Component({
  templateUrl: './product-category-shell.component.html',
})
export class ProductCategoryShellComponent implements OnInit {
  constructor(private store: Store<State>) {}
  displayCode$: Observable<boolean>;
  errorMessage$: Observable<string>;
  productCategories$: Observable<ProductCategory[]>;
  ngOnInit(): void {
    this.displayCode$ = of(true);
    this.productCategories$ = this.store.select(getProductCategories);
    this.errorMessage$ = this.store.select(getError);
    this.store.dispatch(productCategoryPageActions.loadProductCategories());
  }
}
