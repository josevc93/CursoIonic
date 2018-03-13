import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {BookListPage} from "../pages/book-list/book-list";
import {BookService} from "../services/book";
import {HttpClientModule} from "@angular/common/http";
import {BookDetailsPage} from "../pages/book-details/book-details";
import {VoteComponent} from "../components/vote/vote";
import {CommonNavbarComponent} from "../components/common-navbar/common-navbar";
import {NewBookPage} from "../pages/new-book/new-book";

import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {TraslateComponent} from "../components/traslate/traslate";
import {ExpandableContentListComponent} from "../components/expandable-content-list/expandable-content-list";

export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    BookListPage,
    BookDetailsPage,
    VoteComponent,
    CommonNavbarComponent,
    NewBookPage,
    TraslateComponent,
    ExpandableContentListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
      TranslateModule.forRoot({
          loader: {
              provide: TranslateLoader,
              useFactory: HttpLoaderFactory,
              deps: [HttpClient]
          }
      }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BookListPage,
    BookDetailsPage,
    NewBookPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BookService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
