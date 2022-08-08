import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BaseFormDirective } from '../base-form.component';

@Component({
  selector: 'app-input-field',
  templateUrl: './input.field.component.html',
  styleUrls: ['./input.field.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class InputFieldComponent extends BaseFormDirective {
  constructor(public ngForm: NgForm) {
    super();
  }
}
