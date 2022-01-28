import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ProductCategory } from '../product-category';

@Component({
  selector: 'pm-product-category-list',
  styleUrls: ['./product-category-list.component.css'],
  templateUrl: './product-category-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCategoryListComponent implements OnInit {
  @Input() displayCode: boolean;
  @Input() productCategories: ProductCategory[];

  ngOnInit(): void {
    console.log(this.productCategories);
  }
}
