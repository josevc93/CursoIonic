import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {FruitItems, FruitService} from "../../services/fruit";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastService} from "../../services/toast";

@Component({
  selector: 'page-fruit-details',
  templateUrl: 'fruit-details.html',
})
export class FruitDetailsPage implements OnInit{
  private name: string;
  private fruit: FruitItems;
  private likeVote: number;
  private dislikeVote: number;
  private fruitForm: FormGroup;
  private updating: boolean;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController,
              private fruitService: FruitService,
              private toastService: ToastService) {
  }

  ngOnInit(){
      this.name = this.navParams.get('name');
      this.fruit = this.navParams.get('fruit');
      this.likeVote = 0;
      this.dislikeVote = 0;
      this.updating = false;

      this.fruitForm = new FormGroup({
        description: new FormControl(this.fruit.description, Validators.required)
      });
  }

  showAlert(text: Event){
      let alert = this.alertCtrl.create({
          title: this.fruit.name,
          subTitle: 'Has votado ' + text + '.',
          buttons: ['Dismiss']
      });
      alert.present();
  }

    submitForm(){
      this.updating = true;
      this.fruit.description = this.fruitForm.value.description;
        this.fruitService.saveFruit(this.fruit)
            .subscribe(() => {
                this.updating = false;
                this.toastService.showToast('Fruit update.');
            }, () => {
                this.updating = false;
                this.toastService.showToast('Error updating fruit.');
            })
    }
}
