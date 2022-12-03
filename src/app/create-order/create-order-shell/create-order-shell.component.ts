import { State } from './../../state/app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CreateOrderDto } from '../create-order';
import { CreateOrderForm } from '../create-order.form';
import * as OrderActions from '../state/order.actions';

@Component({
  selector: 'app-create-order-shell',
  templateUrl: './create-order-shell.component.html',
  styleUrls: ['./create-order-shell.component.scss'],
})
export class CreateOrderShellComponent implements OnInit {
  constructor(private store: Store<State>) {}
  form = new CreateOrderForm();

  data = new CreateOrderDto();
  ngOnInit(): void {
    this.store.dispatch(OrderActions.loadOrder());
  }
  onSubmit() {}
}
