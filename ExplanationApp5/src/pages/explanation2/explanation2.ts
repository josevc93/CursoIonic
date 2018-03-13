import { Component, OnInit } from '@angular/core';

interface User {
  id: number,
  name: string,
  birthDate: string,
  sex: string,
  phone: number,
  email: string
}

@Component({
  selector: 'page-explanation2',
  templateUrl: 'explanation2.html'
})
export class Explanation2Page implements OnInit {

  private user: User;

  constructor() {

  }

  ngOnInit() {

    /*
    this.user = <User> {
      id: 1,
      name: 'Jose Antonio Postigo',
      birthDate: new Date('1985-05-10').toISOString(),
      sex: 'male',
      phone: 2324,
      email: 'japostigo@atsistemas.com'
    };
    */

    this.user = <User> {};
  }
}
