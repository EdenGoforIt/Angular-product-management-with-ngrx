import { Field } from './field';

export class InputField<T> extends Field<T> {
  infoType = 'input';

  constructor(options: {} = {}) {
    super(options);
  }
}
