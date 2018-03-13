import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-explanation4',
  templateUrl: 'explanation4.html'
})
export class Explanation4Page implements OnInit {

  private form: FormGroup;

  constructor() {

  }

  ngOnInit() {

    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      birthDate: new FormControl(null, Validators.required),
      sex: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email])
    });

    setTimeout(() => {

      this.form.patchValue({
        id: 1,
        name: 'Jose Antonio Postigo',
        birthDate: new Date('1985-05-10').toISOString(),
        sex: 'male',
        phone: 2324,
        email: 'japostigo@atsistemas.com'
      });

    }, 2000);
  }

  submitForm() {

    console.log(this.form);
  }
}
