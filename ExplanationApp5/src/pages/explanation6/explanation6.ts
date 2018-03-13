import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from 'ionic-angular';
import { User, UsersService } from '../../services/users';
import { Subscription } from 'rxjs/Subscription';

enum PageState {
  Loading,
  Ready,
  LoadingError,
  Saving
}

@Component({
  selector: 'page-explanation6',
  templateUrl: 'explanation6.html'
})
export class Explanation6Page implements OnInit, OnDestroy {

  private form: FormGroup;

  private PageState = PageState;
  private pageState: PageState;

  private getUserSubscription: Subscription;
  private saveUserSubscription: Subscription;

  constructor(private usersService: UsersService,
              private toastCtrl: ToastController) {

  }

  ngOnInit() {

    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      birthDate: new FormControl(null, Validators.required),
      sex: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email])
    });

    this.loadUser();
  }

  ngOnDestroy() {

    if(this.getUserSubscription) {
      this.getUserSubscription.unsubscribe();
    }

    if(this.saveUserSubscription) {
      this.saveUserSubscription.unsubscribe();
    }
  }

  loadUser() {

    this.pageState = PageState.Loading;

    this.getUserSubscription = this.usersService.getRemoteUser()
      .subscribe((user: User) => {

        this.form.patchValue(user);
        this.pageState = PageState.Ready;

      }, () => {

        this.pageState = PageState.LoadingError;
      });
  }

  submitForm() {

    this.pageState = PageState.Saving;

    this.saveUserSubscription = this.usersService.saveRemoteUser(this.form.value)
      .subscribe(() => {

        this.showToast('User was saved successfully');
        this.pageState = PageState.Ready;

      }, () => {

        this.showToast('Error saving the user');
        this.pageState = PageState.Ready;
      })
  }

  showToast(message: string) {

    this.toastCtrl.create({
      message,
      duration: 3000
    }).present();
  }
}
