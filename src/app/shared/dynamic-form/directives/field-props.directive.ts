import { AfterViewChecked, Directive, ElementRef, Input } from '@angular/core';
import { Field } from '../models/field';

@Directive({ selector: '[appFieldProps]' })
export class FieldPropsDirective implements AfterViewChecked {
  @Input('appFieldProps') props: Field<any>;

  constructor(private el: ElementRef) {}
  ngAfterViewChecked(): void {
    this.el.nativeElement.id = this.props.fieldName;
    this.el.nativeElement.placeholder = this.props.placeholderText;
  }
}
