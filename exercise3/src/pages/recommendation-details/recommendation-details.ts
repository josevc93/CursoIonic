import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RecommendationItem, RecommendationService} from "../../services/recommendation";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastService} from "../../services/toast";

@Component({
  selector: 'page-recommendation-details',
  templateUrl: 'recommendation-details.html',
})
export class RecommendationDetailsPage implements OnInit{
  private recommendation: RecommendationItem;
  private name: string;
  private recommendationForm: FormGroup;
  private updating: boolean;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private recommendationService: RecommendationService,
              private toastService: ToastService) {
  }

  ngOnInit(){
      this.recommendation = this.navParams.get('recommendation');
      this.name = this.navParams.get('name');

      this.recommendationForm = new FormGroup({
          title: new FormControl(this.recommendation.title, Validators.required),
          content: new FormControl(this.recommendation.content, Validators.required),
          author: new FormControl(this.recommendation.author, Validators.required)
      });
  }

    submitForm() {
        this.updating = true;
        this.recommendation.title = this.recommendationForm.value.title;
        this.recommendation.content = this.recommendationForm.value.content;
        this.recommendation.author = this.recommendationForm.value.author;
        this.recommendationService.saveRecommendation(this.recommendation)
            .subscribe(() => {
                this.updating = false;
                this.name = this.recommendation.title;
                this.toastService.showToast('Recommendation update.');
            }, () => {
                this.updating = false;
                this.toastService.showToast('Error updating recommendation.');
            })
    }

}
