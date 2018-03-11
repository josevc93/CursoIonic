import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {RecommendationItem, RecommendationService} from "../../services/recommendation";
import {HttpErrorResponse} from "@angular/common/http";


@Component({
    selector: 'page-recommendation',
    templateUrl: 'recommendation.html',
})
export class RecommendationPage implements OnInit{
    recommendations: RecommendationItem[];
    name: string;
    selectedRecommendation: RecommendationItem;
    errorLoading: boolean;
    loading: boolean;

    constructor(public navCtrl: NavController, public navParams: NavParams, private recommendationService: RecommendationService) {
    }

    ngOnInit(){
        this.selectedRecommendation = this.navParams.get('recommendation');
        this.name = this.navParams.get('name');
        if (!this.name) {
            this.name = "Recommendations List";
            this.getRecommendations();
        }
    }

  getRecommendations(){
    this.loading = true;
    this.errorLoading = false;
    this.recommendationService.getRecommendations()
      .subscribe((items: RecommendationItem[])=>{
        this.recommendations = items;
        this.loading = false;
      }, (error: HttpErrorResponse) => {
        console.log('Oh! Algo fue mal.');
        this.errorLoading = true;
        this.loading = false;
      });
  }

    goToDetails(event, recommendation, name) {
        this.navCtrl.push(RecommendationPage, {
            recommendation: recommendation,
            name: name
        });
    }
}
