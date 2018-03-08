import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FruitItems, FruitService} from "../../services/fruit";


@Component({
  selector: 'page-fruit',
  templateUrl: 'fruit.html',
})
export class FruitPage implements OnInit{
  fruits: FruitItems[];
  name: string;
  selectedFruit: FruitItems;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fruitService: FruitService) {
  }

  ngOnInit(){
      this.selectedFruit = this.navParams.get('fruit');
      this.name = this.navParams.get('name');
      if (!this.name) {
          this.name = "Fruits List";
      }

      this.fruitService.getFruits()
          .subscribe((items: FruitItems[])=>{
              this.fruits = items;
          });
  }

    goToDetails(event, fruit, name) {
        this.navCtrl.push(FruitPage, {
            fruit: fruit,
            name: name
        });
    }
}
