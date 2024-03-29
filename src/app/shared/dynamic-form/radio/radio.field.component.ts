import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BaseFormDirective } from '../base-form.component';

@Component({
  selector: 'app-radio-field',
  templateUrl: './radio.field.component.html',
  styleUrls: ['./radio.field.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class RadioFieldComponent extends BaseFormDirective {
  constructor(public ngForm: NgForm) {
    super();
  }
}
