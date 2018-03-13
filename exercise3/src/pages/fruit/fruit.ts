import {Component, OnInit} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {FruitItems, FruitService} from "../../services/fruit";
import {HttpErrorResponse} from "@angular/common/http";
import {FruitDetailsPage} from "../fruit-details/fruit-details";

@Component({
  selector: 'page-fruit',
  templateUrl: 'fruit.html',
})
export class FruitPage implements OnInit{
  fruits: FruitItems[];
  errorLoading: boolean;
  loading: boolean;
  name: string;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private fruitService: FruitService,
              private alertCtrl: AlertController) {
  }

  ngOnInit(){
      this.name = "Fruits List";
      this.getFruits();
  }

  getFruits() {
    this.loading = true;
    this.errorLoading = false;
    this.fruitService.getFruits()
      .subscribe((items: FruitItems[])=>{
        this.fruits = items;
        this.loading = false;
      }, (error: HttpErrorResponse) => {
        console.log('Oh! Algo fue mal.');
        this.errorLoading = true;
        this.loading = false;
      });
  }

    goToDetails(event, fruit, name) {
        this.navCtrl.push(FruitDetailsPage, {
            fruit: fruit,
            name: name
        });
    }

}
