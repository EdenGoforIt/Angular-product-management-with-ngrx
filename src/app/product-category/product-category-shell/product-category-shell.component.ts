import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductCategory } from '../product-category';
import { ProductCategoryService } from '../product-category-service';
@Component({
  templateUrl: './product-category-shell.component.html',
})
export class ProductCategoryShellComponent implements OnInit {
  constructor(private service: ProductCategoryService) {}
  displayCode$: Observable<boolean>;
  productCategories$: Observable<ProductCategory[]>;
  ngOnInit(): void {
    this.displayCode$ = of(true);
    this.productCategories$ = this.service.getProductCategories();
  }
}
