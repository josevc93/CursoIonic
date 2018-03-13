import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User, UsersService } from '../../services/users';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'page-explanation5',
  templateUrl: 'explanation5.html'
})
export class Explanation5Page implements OnInit, OnDestroy {

  private form: FormGroup;

  private isLoading: boolean;

  private getUserSubscription: Subscription;
  private saveUserSubscription: Subscription;

  constructor(private usersService: UsersService) {

  }

  ngOnInit() {

    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      birthDate: new FormControl(null, Validators.required),
      sex: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email])
    });

    this.isLoading = true;

    //this.getUserSubscription = this.usersService.getLocalUser()

    this.getUserSubscription = this.usersService.getRemoteUser()
      .subscribe((user: User) => {

        this.form.patchValue(user);
        this.isLoading = false;
      });
  }

  ngOnDestroy() {

    if(this.getUserSubscription) {
      this.getUserSubscription.unsubscribe();
    }

    if(this.saveUserSubscription) {
      this.saveUserSubscription.unsubscribe();
    }
  }

  submitForm() {

    this.isLoading = true;

    this.saveUserSubscription = this.usersService.saveRemoteUser(this.form.value)
      .subscribe(() => {

        this.isLoading = false;
      })
  }
}
