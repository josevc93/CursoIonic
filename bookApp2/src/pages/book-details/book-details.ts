import {Component, OnInit} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {BookItem, BookService} from "../../services/book";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BookListPage} from "../book-list/book-list";

@Component({
  selector: 'page-book-details',
  templateUrl: 'book-details.html',
})
export class BookDetailsPage implements OnInit{
  private book: BookItem;
  private bookForm: FormGroup;
  private name: string;
  private loadingUpdate: boolean;
  private loadingDelete: boolean;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private bookService: BookService,
              public alertCtrl: AlertController) {
  }

  ngOnInit(){
      this.loadingDelete = false;
      this.loadingUpdate = false;
      this.book = this.navParams.get('book');
      this.name = this.book.title;

      this.bookForm = new FormGroup ({
          title: new FormControl(this.book.title, Validators.required),
          language: new FormControl(this.book.language, Validators.required),
          edition: new FormControl(this.book.edition, Validators.required),
          publisher: new FormControl(this.book.publisher, Validators.required)
      });
  }

  // UPDATE
  submitForm(){
      this.loadingUpdate = true;
      this.book.title = this.bookForm.value.title;
      this.book.language = this.bookForm.value.language;
      this.book.publisher = this.bookForm.value.publisher;
      this.book.edition = this.bookForm.value.edition;
      this.bookService.updateBook(this.book)
          .subscribe(() => {
              this.loadingUpdate = false;
          }, () => {
              this.loadingUpdate = false;
          })
  }

    deleteBook(){
        let confirm = this.alertCtrl.create({
            title: 'Delete book',
            message: 'Do you want to delete this book?',
            buttons: [
                {
                    text: 'Disagree'
                },
                {
                    text: 'Agree',
                    handler: () => {
                        this.loadingDelete = true;
                        this.bookService.deleteBook(this.book)
                            .subscribe(() => {
                                this.loadingDelete = false;
                                this.navCtrl.setRoot(BookListPage);
                            }, () => {
                                this.loadingDelete = false;
                            })
                    }
                }
            ]
        });
        confirm.present();
    }

    // VOTE
    showAlert(event: Event){
        let alert = this.alertCtrl.create({
            title: this.book.title,
            subTitle: 'Has votado ' + event + '.',
            buttons: ['Dismiss']
        });
        alert.present();
    }
}
