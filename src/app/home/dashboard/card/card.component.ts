import { Component, Input } from '@angular/core';

@Component({
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() title: string;
}
