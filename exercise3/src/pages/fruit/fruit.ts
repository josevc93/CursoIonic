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
  isLoading: boolean;
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
      }

      this.getFruits();
  }

  getFruits() {
    this.isLoading = false;
    this.fruitService.getFruits()
      .subscribe((items: FruitItems[])=>{
        this.fruits = items;
      }, (error: HttpErrorResponse) => {
        console.log('Oh! Algo fue mal.');
        this.isLoading = true;
      });
  }

    goToDetails(event, fruit, name) {
        this.navCtrl.push(FruitPage, {
            fruit: fruit,
            name: name
        });
    }

    like(){
      this.likeVote += 1;
      this.showAlert(true);
    }

    dislike(){
      this.dislikeVote += 1;
      this.showAlert(false);
    }

    showAlert(like: boolean){
      let vote = like ? 'me gusta' : 'no me gusta';

      let alert = this.alertCtrl.create({
        title: this.selectedFruit.name,
        subTitle: 'Has votado ' + vote,
        buttons: ['Dismiss']
      });
      alert.present();
    }
}
