import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { FilterPipe } from '../pipes/filter.pipe';
import { SortPipe } from '../pipes/sort.pipe';
import { BaseFormDirective } from './base-form.component';
import { FieldPropsDirective } from './directives/field-props.directive';
import { DynamicFormComponent } from './dynamic-form.component';
import { InputFieldComponent } from './input/input.field.component';
import { RadioFieldComponent } from './radio/radio.field.component';

@NgModule({
  declarations: [
    FieldPropsDirective,
    DynamicFormComponent,
    SortPipe,
    FilterPipe,
    RadioFieldComponent,
    BaseFormDirective,
    InputFieldComponent
  ],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [
    FieldPropsDirective,
    DynamicFormComponent,
    RadioFieldComponent,
    FormsModule,
    ReactiveFormsModule,
    BaseFormDirective,
  ],
})
export class DynamicFormModule {}
