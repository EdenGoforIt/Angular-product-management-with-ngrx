import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'eden-app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() title: string;

  ngOnInit(): void {}

  constructor() {}
}
