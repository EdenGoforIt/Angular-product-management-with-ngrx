import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'pm-product-edit-buttons',
  templateUrl: './product-edit-buttons.component.html',
  styleUrls: ['./product-edit-buttons.component.css'],
})
export class ProductEditButtonsComponent implements OnInit, OnChanges {
  @Output() cancelClicked = new EventEmitter<void>();
  @Output() deleteClicked = new EventEmitter<void>();
  @Output() saveClicked = new EventEmitter<void>();
  private _form: any;
  set form(form: any) {
    console.log(form);
    this._form = form as FormGroup;
  }
  @Input()
  get form(): any {
    return this._form;
  }

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {}
}
