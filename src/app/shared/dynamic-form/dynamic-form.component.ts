import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Field } from './models/field';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  // https://timdeschryver.dev/blog/a-practical-guide-to-angular-template-driven-forms#dynamic-nested-forms-example
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  encapsulation: ViewEncapsulation.None
})
export class DynamicFormComponent {
  @Output() event = new EventEmitter();
  @Input() data: any;
  @Input() fields: Field<any>[];
  @Input() disabled = false;
  subs: Subscription[] = [];

  trigger(event: string, field: Field<any>): void {
    this.event.emit({ action: event, field: field.name });
  }

  isValidDependency = (field: Field<any>): boolean => {
    if (field.dependency) {
      const [key, value] = field.dependency.split('|');
      if (value) {
        return !!this.data[key] ? this.data[key].toString() === value : false;
      }

      return !!this.data[key];
    }

    return true;
  };

  isInline = (field: Field<any>) => field.inline && !field.groupingKey;

  splitCamelCase(key: any): string {
    const text = key.replace(/([a-z])([A-Z])/g, '$1 $2');
    return text[0].toUpperCase() + text.substr(1);
  }

  isDisabled = (field: Field<any>) => field.disabled || this.disabled;

  isMandatory = (field: Field<any>) => {
    if (field.mandatoryAfter) {
      const [key, value] = field.mandatoryAfter.split('|');

      if (!!this.data[key] && value) {
        return this.data[key].toString() === value;
      }

      return !!this.data[key];
    }
    return !field.hidden && field.required && this.isValidDependency(field);
  };
}
