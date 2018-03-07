import { Component } from '@angular/core';
import {Alert, AlertController, NavController} from 'ionic-angular';
import {DetailsPage} from "../details/details";
import {ListPage} from "../list/list";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm go to list',
      message: 'Do you want to go to list?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Confirm',
          handler: () => {
            this.navCtrl.setRoot(ListPage, {
            });
          }
        }
      ]
    });
    alert.present();
  }

}
