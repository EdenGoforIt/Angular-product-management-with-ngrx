import { tap } from 'rxjs/operators';
import { getOrder } from './../state/index';
import { Order } from './../order';
import { State } from './../../state/app.state';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CreateOrderDto } from '../create-order';
import { CreateOrderForm } from '../create-order.form';
import * as OrderActions from '../state/order.actions';
import * as fromOrder from '../state/index';
@Component({
  selector: 'app-create-order-shell',
  templateUrl: './create-order-shell.component.html',
  styleUrls: ['./create-order-shell.component.scss'],
})
export class CreateOrderShellComponent implements OnInit {
  constructor(private store: Store<State>) {}
  form = new CreateOrderForm();

  data: Order;
  ngOnInit(): void {
    this.store.dispatch(OrderActions.loadOrder());
    // TODO:: unsub
    this.store
      .pipe(
        select(fromOrder.getOrder),
        tap((order: Order) => {
          this.data = {
            ...order,
            address: {
              ...order.address,
              physicalAddress: { ...order?.address?.physicalAddress },
            },
          };
          // console.log('got order', order);
          // console.log('got order', this.data);
          // console.assert(order.id == this.data.id, 'Id same');
          // console.assert(order.address == this.data.address, 'Address Same');
        })
      )
      .subscribe();
  }
  onSubmit() {}
}
