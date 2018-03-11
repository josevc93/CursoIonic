import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-accelerometer',
  templateUrl: 'accelerometer.html',
})
export class AccelerometerPage {
    x: number;
    y: number;
    z: number;

    constructor(public navCtrl: NavController) {

    }

    ngOnInit(){
        window.ondevicemotion = function(event) {
            var x = Math.round(event.accelerationIncludingGravity.x * 100) / 100;
            var y = Math.round(event.accelerationIncludingGravity.y * 100) / 100;
            var z = Math.round(event.accelerationIncludingGravity.z * 100) / 100;
            var posx = document.getElementById('position-x');
            posx.innerHTML = 'x: ' + x;
            var posy = document.getElementById('position-y');
            posy.innerHTML = 'y: ' + y;
            var posz = document.getElementById('position-z');
            posz.innerHTML = 'z: ' + z;
        }
    }

}
