import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {BookItem, BookService} from "../../services/book";
import {HttpErrorResponse} from "@angular/common/http";
import {BookDetailsPage} from "../book-details/book-details";
import {NewBookPage} from "../new-book/new-book";

@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage implements OnInit{
  private books: BookItem[];
  private name: string
  private loading: boolean;
  private errorLoading: boolean;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private bookService: BookService) {
  }

  ngOnInit(){
      this.loading = true;
      this.errorLoading = false;
      this.name = "Book List";
      this.getBooks();
  }

  getBooks(){
      this.loading = true;
      this.bookService.getBooks()
          .subscribe((items: BookItem[])=>{
              this.loading = false;
              this.errorLoading = false;
              this.books = items;
          }, (error: HttpErrorResponse) => {
              this.loading = false;
              this.errorLoading = true;
          });
  }


    goToNewBook(event: Event){
        this.navCtrl.push(NewBookPage);
    }
}
