import { Field } from './field';

export class RadioField<T> extends Field<T> {
  name = 'radio';

  constructor(options: {} = {}) {
    super(options);
  }
}
