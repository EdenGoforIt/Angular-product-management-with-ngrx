import { Field } from './field';

export class CheckBoxField<T> extends Field<any> {
  name = 'checkbox';
  labelPosition?: string;
  constructor(options: {} = {}) {
    super(options);
    this.labelPosition = options['labelPosition'] || 'before';
  }
}
