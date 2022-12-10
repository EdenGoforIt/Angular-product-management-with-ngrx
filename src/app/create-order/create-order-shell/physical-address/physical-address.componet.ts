import { Order } from './../../order';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-physical-address',
  templateUrl: './physical-address.component.html',
})
export class PhysicalAddressComponent {
  @Input() data: Order;
}
