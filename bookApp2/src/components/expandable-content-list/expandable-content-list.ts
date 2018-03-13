import {Component, Input} from '@angular/core';
import {BookDetailsPage} from "../../pages/book-details/book-details";
import {BookItem} from "../../services/book";
import {NavController} from "ionic-angular";

@Component({
  selector: 'expandable-content-list',
  templateUrl: 'expandable-content-list.html'
})
export class ExpandableContentListComponent {
  private view: boolean;
  @Input() book: BookItem;

  text: string;

  constructor(public navCtrl: NavController,) {
    this.view = false;
  }

  show(){
    this.view = !this.view;
  }

    goToDetails(event: Event, book: BookItem){
        this.navCtrl.push(BookDetailsPage, {
            book: book
        });
    }

}
