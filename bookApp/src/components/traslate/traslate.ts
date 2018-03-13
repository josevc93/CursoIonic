import {Component, Input} from '@angular/core';

@Component({
  selector: 'traslate',
  templateUrl: 'traslate.html'
})
export class TraslateComponent {
  @Input() params: any;
  text: string;
}
