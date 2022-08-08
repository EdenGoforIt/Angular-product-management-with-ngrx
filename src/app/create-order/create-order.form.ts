import { Field } from '../shared/dynamic-form/models/field';
import { InputField } from '../shared/dynamic-form/models/input.field';
import { RadioField } from '../shared/dynamic-form/models/radio.field';

export class CreateOrderForm {
  fields: Field<any>[] = [
    new InputField<string>({
      fieldName: 'fullName',
      labelText: 'Full Name',
      required: true,
      hidden: false,
    }),
    new RadioField<boolean>({
      fieldName: 'hasConsignment',
      labelText: 'Has Consignment',
      required: true,
      hidden: false,
      options: [
        { key: true, value: 'Yes' },
        { key: false, value: 'No' },
      ],
    }),
  ];
}
