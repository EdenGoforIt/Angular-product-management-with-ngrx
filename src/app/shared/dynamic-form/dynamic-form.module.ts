import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RadioFieldComponent } from './radio/radio.field.component';

import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldPropsDirective } from './directives/field-props.directive';

@NgModule({
  declarations: [RadioFieldComponent, FieldPropsDirective],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [],
})
export class DynamicFormModule {}
