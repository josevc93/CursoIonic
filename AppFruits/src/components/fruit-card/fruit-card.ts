import {Component, Input} from '@angular/core';

@Component({
  selector: 'fruit-card',
  templateUrl: 'fruit-card.html'
})
export class FruitCardComponent {

  @Input() fruit: any;


  constructor() {
  }

}
