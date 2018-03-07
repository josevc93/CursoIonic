import {Component, OnInit} from '@angular/core';
import {LoadingController, NavController, NavParams} from 'ionic-angular';
import {Exampleitems, ExampleItemsService} from "../../services/exampleitems";
import {DetailsPage} from "../details/details";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage implements OnInit{
  selectedItem: any;
  icons: string[];
  items: Exampleitems[];
  loading: boolean;


  constructor(public navCtrl: NavController, private exampleitemsService: ExampleItemsService) {
  }

  ngOnInit(){
    this.loading = true;
    this.exampleitemsService.getExampleItems()
      .subscribe((items: Exampleitems[])=>{
          this.items = items;
          this.loading = false;
      });

  }

  itemTapped(event, item) {
    this.navCtrl.push(DetailsPage, {
      item111: item
    });
  }
}
