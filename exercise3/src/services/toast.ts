import {Injectable} from "@angular/core";
import {ToastController} from "ionic-angular";

@Injectable()

export class ToastService {

    constructor(private toastCtrl: ToastController) {

    }

    showToast(message: string) {
        this.toastCtrl.create({
            message,
            duration: 3000
        }).present();
    }
}