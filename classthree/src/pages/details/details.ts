import {Component, OnInit} from '@angular/core';
import {NavParams} from "ionic-angular";
import {Exampleitems} from "../../services/exampleitems";

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage implements OnInit{

  private item: Exampleitems;

  constructor(private navParams: NavParams) {
  }

  ngOnInit(){
    this.item = this.navParams.get('item111');
  }
}
