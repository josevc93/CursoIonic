import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import {CameraPage} from "../camera/camera";
import {AccelerometerPage} from "../accelerometer/accelerometer";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AccelerometerPage;
  tab3Root = CameraPage;

  constructor() {

  }
}
