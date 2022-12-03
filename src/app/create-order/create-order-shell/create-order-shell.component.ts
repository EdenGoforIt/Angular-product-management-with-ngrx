import { SharedModule } from './../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CreateOrderDto } from '../create-order';
import { CreateOrderForm } from '../create-order.form';

@Component({
  selector: 'app-create-order-shell',
  templateUrl: './create-order-shell.component.html',
  styleUrls: ['./create-order-shell.component.scss'],
})
export class CreateOrderShellComponent implements OnInit {
  form = new CreateOrderForm();

  data = new CreateOrderDto();
  ngOnInit(): void {}
  onSubmit() {}
}
