import { Component, OnInit } from '@angular/core';
import { CreateOrderForm } from '../create-order.form';

@Component({
  selector: 'app-create-order-shell',
  templateUrl: './create-order-shell.component.html',
  styleUrls: ['./create-order-shell.component.scss'],
})
export class CreateOrderShellComponent implements OnInit {
  form = new CreateOrderForm();
  ngOnInit(): void {}
  onSubmit() {}
}
