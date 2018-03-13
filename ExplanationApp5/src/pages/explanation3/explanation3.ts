import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface User {
  id: number,
  name: string,
  birthDate: string,
  sex: string,
  phone: number,
  email: string
}

@Component({
  selector: 'page-explanation3',
  templateUrl: 'explanation3.html'
})
export class Explanation3Page implements OnInit {

  private form: FormGroup;

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

    this.form = new FormGroup({
      name: new FormControl(this.user.name, Validators.required),
      birthDate: new FormControl(this.user.birthDate, Validators.required),
      sex: new FormControl(this.user.sex, Validators.required),
      phone: new FormControl(this.user.phone, Validators.required),
      email: new FormControl(this.user.email, [Validators.required, Validators.email])
    });
  }

  submitForm() {

    console.log(this.form);
  }
}
