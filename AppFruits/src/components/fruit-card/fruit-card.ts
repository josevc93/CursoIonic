import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'fruit-card',
  templateUrl: 'fruit-card.html'
})
export class FruitCardComponent {

  @Input() fruit: any;
  @Output() delete: EventEmitter<void>;

  constructor() {
    this.delete = new EventEmitter<void>();
  }

  deletePressed() {
    this.delete.emit();
  }

}
