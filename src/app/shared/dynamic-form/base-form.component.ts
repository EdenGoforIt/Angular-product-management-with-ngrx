import { Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Field } from './models/field';

@Directive({
  selector: 'base-form',
})
export class BaseFormDirective implements OnInit {
  @Input() field: Field<any>;
  @Input() disabled: boolean;
  @Input() required: boolean;
  @Input() clear = new EventEmitter<any>();
  // https://stackoverflow.com/questions/53209462/does-input-give-a-two-way-binding
  // two way binding with a child component should work with {inputName}Change for output
  @Input() value: any;
  @Output() valueChange = new EventEmitter<any>();

  ngOnInit(): void {
    if (this.val === null && this.field.defaultValue !== null) {
      this.val = this.field.defaultValue;
    }
  }

  get val() {
    return this.value;
  }

  set val(val: any) {
    this.value = val;
    this.valueChange.emit(this.value);
  }
}
