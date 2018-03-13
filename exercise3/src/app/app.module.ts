import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {FruitService} from "../services/fruit";
import {RecommendationService} from "../services/recommendation";
import {FruitPage} from "../pages/fruit/fruit";
import {RecommendationPage} from "../pages/recommendation/recommendation";
import {lenghtFormat} from "../pipes/lenghtFormat";
import {TraslateComponent} from "../components/traslate/traslate";
import {VoteComponent} from "../components/vote/vote";
import {CommonNavbarComponent} from "../components/common-navbar/common-navbar";
import {FruitDetailsPage} from "../pages/fruit-details/fruit-details";
import {RecommendationDetailsPage} from "../pages/recommendation-details/recommendation-details";
import {ToastService} from "../services/toast";

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    FruitPage,
    RecommendationPage,
    lenghtFormat,
    TraslateComponent,
    VoteComponent,
    CommonNavbarComponent,
    FruitDetailsPage,
    RecommendationDetailsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot
    ({
      loader
        : {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FruitPage,
    RecommendationPage,
    FruitDetailsPage,
    RecommendationDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FruitService,
    ToastService,
    RecommendationService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
