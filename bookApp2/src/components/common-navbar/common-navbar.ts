import { Component, Input } from '@angular/core';

@Component({
  selector: 'common-navbar',
  templateUrl: 'common-navbar.html'
})
export class CommonNavbarComponent {

  @Input() name: string;

  constructor() {
  }

}
