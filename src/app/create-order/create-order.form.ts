import { Field } from '../shared/dynamic-form/models/field';
import { InputField } from '../shared/dynamic-form/models/input.field';
import { RadioField } from '../shared/dynamic-form/models/radio.field';

export class CreateOrderForm {
  fields: Field<any>[] = [
    new InputField<string>({
      fieldName: 'firstName',
      labelText: 'First Name',
      required: true,
      hidden: false,
      width: 500,
      parentClass: 'pl-1 pt-1',
      inline: true,
    }),
    new InputField<string>({
      fieldName: 'lastName',
      labelText: 'Last Name',
      required: true,
      hidden: false,
      width: 500,
      parentClass: 'pl-1 pt-1',
      inline: true,
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
