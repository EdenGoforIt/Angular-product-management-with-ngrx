import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {
  Component,
  Input,
  EventEmitter,
  OnInit,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenericValidator } from 'src/app/shared/generic-validator';
import { NumberValidators } from 'src/app/shared/number.validator';
import Swal from 'sweetalert2';
import { ProductCategory } from '../product-category';

@Component({
  selector: 'pm-product-category-edit',
  templateUrl: './product-category-edit.component.html',
})
export class ProductCategoryEditComponent implements OnInit, OnChanges {
  pageTitle = 'Product Category';
  @Input() errorMessage: string;
  @Input() selectedProductCategory: ProductCategory;
  @Output() create = new EventEmitter<ProductCategory>();
  @Output() update = new EventEmitter<ProductCategory>();
  @Output() delete = new EventEmitter<ProductCategory>();
  @Output() clearCurrentProductCategory = new EventEmitter<void>();

  productCategoryForm: FormGroup;
  displayMessage: { [key: string]: string } = {};
  private validationMessage: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;
  constructor(private fb: FormBuilder) {
    this.validationMessage = {
      name: {
        required: 'Product Category Name is required',
        minlength: 'Product Category Name must be at least three characters',
        maxlength: 'Product Category Name cannot exceed 50 characters',
      },
      code: {
        required: 'Product Category Code is required',
      },
      starRating: {
        range: 'Rate should be between 1 (lowest) and 5 (highest)',
      },
    };

    this.genericValidator = new GenericValidator(this.validationMessage);
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedProductCategory) {
      const productCategory = changes.selectedProductCategory.currentValue;
      this.displayProductCategory(productCategory);
    }
  }
  displayProductCategory(productCategory: ProductCategory | null): void {
    if (productCategory && this.productCategoryForm) {
      this.productCategoryForm.reset();

      if (productCategory.id === 0) {
        this.pageTitle = 'Add Product Category';
      } else {
        this.pageTitle = `Edit Product Category:
      ${productCategory.name}`;
      }
      this.productCategoryForm.patchValue({
        name: productCategory.name,
        code: 'code',
        description: productCategory.description,
        starRating: Math.floor(Math.random() * 10),
      });
    }
  }

  ngOnInit(): void {
    this.productCategoryForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      code: ['', Validators.required],
      starRating: ['', NumberValidators.range(1, 5)],
      description: '',
    });

    this.productCategoryForm.valueChanges.subscribe(
      () =>
        (this.displayMessage = this.genericValidator.processMessages(
          this.productCategoryForm
        ))
    );
  }
  saveProductCategory(): void {
    if (this.productCategoryForm.valid && this.productCategoryForm.dirty) {
      const productCategory = {
        ...this.selectedProductCategory,
        ...this.productCategoryForm.value,
      };

      if (productCategory.id === 0) {
        this.create.emit(productCategory);
      } else {
        this.update.emit(productCategory);
      }
    }
  }
  blur(): void {
    this.displayMessage = this.genericValidator.processMessages(
      this.productCategoryForm
    );
  }
  cancelEdit(): void {
    this.displayProductCategory(this.selectedProductCategory);
  }
  deleteProductCategory(): void {
    if (this.selectedProductCategory && this.selectedProductCategory.id) {
      Swal.fire({
        title: 'Are you sure?',
        text: `${this.selectedProductCategory.name} will be deleted`,
        icon: 'warning',
        showCancelButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          this.delete.emit(this.selectedProductCategory);
        } else {
          this.clearCurrentProductCategory.emit();
        }
      });
    }
  }
}
