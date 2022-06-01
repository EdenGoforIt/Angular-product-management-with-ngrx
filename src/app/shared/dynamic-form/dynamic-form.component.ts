import { Component, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EventEmitter } from 'stream';
import { Field } from './models/field';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  // https://timdeschryver.dev/blog/a-practical-guide-to-angular-template-driven-forms#dynamic-nested-forms-example
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class DynamicFormComponent {
  @Output() event = new EventEmitter();
  @Input() data: any;
  @Input() fields: Field<any>[];
  @Input() disabled = false;
  subs: Subscription[] = [];

  //TODO: event as enum or const
  trigger(event: string, field: Field<any>) {
    this.event.emit({ action: event, field: field.name });
  }
}
