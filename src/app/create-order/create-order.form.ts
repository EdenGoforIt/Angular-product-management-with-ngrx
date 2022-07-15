import { Field } from '../shared/dynamic-form/models/field';
import { RadioField } from '../shared/dynamic-form/models/radio.field';

export class CreateOrderForm {
  fields: Field<any>[] = [
    new RadioField<boolean>({
      fieldName: 'TestField',
      labelText: 'TestField',
      required: true,
    }),
  ];
}
