import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ProductCategory } from '../product-category';
import { State } from '../state';
import { Store } from '@ngrx/store';
import { productCategoryPageActions } from '../state/actions';
@Component({
  selector: 'pm-product-category-list',
  styleUrls: ['./product-category-list.component.css'],
  templateUrl: './product-category-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCategoryListComponent implements OnInit {
  constructor(private store: Store<State>) {}
  @Input() displayCode: boolean;
  @Input() productCategories: ProductCategory[];
  @Input() selectedProductCategory: ProductCategory;
  @Input() errorMessage: string;
  @Output() displayCodeChanged = new EventEmitter<void>();
  @Output() productCategoryWasSelected = new EventEmitter<ProductCategory>();
  @Output() initializeNewProductCategory = new EventEmitter<void>();
  ngOnInit(): void {}
  productCategorySelected(productCategory: ProductCategory): void {
    this.productCategoryWasSelected.emit(productCategory);
  }
  checkChanged(): void {
    this.displayCodeChanged.emit();
  }
  newProductCategory(): void {
    this.initializeNewProductCategory.emit();
  }
}
