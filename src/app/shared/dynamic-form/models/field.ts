export class Field<T> {
  fieldValue?: T;
  defaultValue?: T;
  name: string;
  placeholder?: string;
  helpText?: string;
  class?: string;
  parentClass?: string;
  maxLength?: number;
  disabled?: boolean;
  hidden?: boolean;
  readonly?: boolean;
  labelText?: string;
  options?: any[];
  fieldName?: string;
  placeholderText?: string;
  dependency?: string;
  verticalBaseline?: boolean;
  groupingKey?: string;
  inline?: boolean;
  infoType: string;
  required: boolean;
  mandatoryAfter: string;

  constructor(data: Partial<Field<any>>) {
    this.fieldValue = data?.fieldValue;
    this.defaultValue = data?.defaultValue;
    this.name = data.name;
    this.placeholder = data?.placeholder;
    this.helpText = data?.helpText;
    this.class = data?.class;
    this.parentClass = data?.parentClass;
    this.maxLength = data?.maxLength || 255;
    this.disabled = !!data?.disabled;
    this.hidden = !!data?.hidden;
    this.readonly = data?.readonly;
    this.labelText = data?.labelText;
    this.options = data?.options;
    this.fieldName = data?.fieldName;
    this.placeholderText = data?.placeholderText;
    this.dependency = data?.dependency;
    this.verticalBaseline = !!data?.verticalBaseline;
    this.groupingKey = data?.groupingKey;
    this.inline = !!data?.inline;
    this.infoType = data?.infoType;
    this.mandatoryAfter = data?.mandatoryAfter;
    this.required = data?.required ?? false;
  }
}
