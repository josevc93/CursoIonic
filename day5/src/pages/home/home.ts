import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';

interface User {
  id: number,
  name: string,
  birthDate: string,
  sex: string,
  phone: number,
  email: string
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  private user: User;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit(){
    this.user = <User> {};
  }

}
