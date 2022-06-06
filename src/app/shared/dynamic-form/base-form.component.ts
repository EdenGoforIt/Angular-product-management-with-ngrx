import { Directive, EventEmitter, Input, OnInit } from '@angular/core';
import { Field } from './models/field';

@Directive()
export class BaseFormDirective implements OnInit {
  @Input() field: Field<any>;
  @Input() disabled: boolean;
  @Input() required: boolean;
  @Input() value: any;
  @Input() clear = new EventEmitter();
  @Input() valueChange = new EventEmitter();

  ngOnInit(): void {}

  get val() {
    return this.value;
  }

  set val(val: any) {
    this.value = val;
    this.valueChange.emit(this.value);
  }
}
