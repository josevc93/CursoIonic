import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Explanation1Page } from '../pages/explanation1/explanation1';
import { Explanation2Page } from '../pages/explanation2/explanation2';
import { Explanation3Page } from '../pages/explanation3/explanation3';
import { Explanation4Page } from '../pages/explanation4/explanation4';
import { Explanation5Page } from '../pages/explanation5/explanation5';
import { Explanation6Page } from '../pages/explanation6/explanation6';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = Explanation6Page;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      if(platform.is('cordova')) {
        statusBar.styleDefault();
        splashScreen.hide();
      }
    });
  }
}

