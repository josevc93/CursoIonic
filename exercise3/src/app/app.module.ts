import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {FruitService} from "../services/fruit";
import {RecommendationService} from "../services/recommendation";
import {FruitPage} from "../pages/fruit/fruit";
import {RecommendationPage} from "../pages/recommendation/recommendation";
import {lenghtFormat} from "../pipes/lenghtFormat";

@NgModule({
  declarations: [
    MyApp,
    FruitPage,
    RecommendationPage,
    lenghtFormat
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FruitPage,
    RecommendationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FruitService,
    RecommendationService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
