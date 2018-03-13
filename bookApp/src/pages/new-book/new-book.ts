import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BookService} from "../../services/book";
import {BookListPage} from "../book-list/book-list";

@Component({
  selector: 'page-new-book',
  templateUrl: 'new-book.html',
})
export class NewBookPage implements OnInit{
  private name: string;
  private bookForm: FormGroup;
  private loading: boolean;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private bookService: BookService) {
  }

  ngOnInit(){
    this.name = 'New Book';

    this.bookForm = new FormGroup ({
        title: new FormControl(null, Validators.required),
        language: new FormControl(null, Validators.required),
        edition: new FormControl(null, Validators.required),
        publisher: new FormControl(null, Validators.required)
    });

  }

    submitForm(){

      this.loading = true;
        this.bookService.newBook(this.bookForm.value)
            .subscribe(() => {
                this.navCtrl.setRoot(BookListPage);
                this.loading = false;
            }, () => {
                this.loading = false;
                alert('error');
            })
    }
}
