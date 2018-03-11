import {Component, OnInit} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {FruitItems, FruitService} from "../../services/fruit";
import {HttpErrorResponse} from "@angular/common/http";


@Component({
  selector: 'page-fruit',
  templateUrl: 'fruit.html',
})
export class FruitPage implements OnInit{
  fruits: FruitItems[];
  name: string;
  selectedFruit: FruitItems;
  errorLoading: boolean;
  loading: boolean;
  likeVote: number;
  dislikeVote: number;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private fruitService: FruitService,
              private alertCtrl: AlertController) {
  }

  ngOnInit(){
      this.selectedFruit = this.navParams.get('fruit');
      this.name = this.navParams.get('name');
      this.likeVote = 0;
      this.dislikeVote = 0;

      if (!this.name) {
          this.name = "Fruits List";
          this.getFruits();
      }
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
        this.navCtrl.push(FruitPage, {
            fruit: fruit,
            name: name
        });
    }

    showAlert(text: Event){
      let alert = this.alertCtrl.create({
        title: this.selectedFruit.name,
        subTitle: 'Has votado ' + text + '.',
        buttons: ['Dismiss']
      });
      alert.present();
    }
}
