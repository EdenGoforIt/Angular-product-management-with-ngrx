export class Field<T> {
  fieldValue?: T;
  defaultValue?: T;
  name: string;
  placeholder?: string;
  helpText?: string;
  class?: string;
  maxLength?: number;
  disabled?: boolean;
  hidden?: boolean;
  readonly?: boolean;

  constructor(data: Partial<Field<any>>) {
    this.fieldValue = data?.fieldValue;
    this.defaultValue = data?.defaultValue;
    this.name = data.name;
    this.placeholder = data?.placeholder;
    this.helpText = data?.helpText;
    this.class = data?.class;
    this.maxLength = data?.maxLength || 255;
    this.disabled = !!data?.disabled;
    this.hidden = !!data?.hidden;
    this.readonly = data?.readonly;
  }
}
