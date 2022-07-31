import { Field } from './field';

export class RadioField<T> extends Field<T> {
  infoType = 'radio';

  constructor(options: {} = {}) {
    super(options);
  }
}
