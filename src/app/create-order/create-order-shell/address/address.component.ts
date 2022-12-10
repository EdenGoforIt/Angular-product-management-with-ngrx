import { Order } from './../../order';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: 'address.component.html',
})
export class AddressComponent {
  @Input() data: Order;
}
