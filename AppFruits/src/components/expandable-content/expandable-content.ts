import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'expandable-content',
    templateUrl: 'expandable-content.html'
})
export class ExpandableContentComponent {

    private textBtn: string;
    private oculto: boolean;

    constructor() {
    }

    ngOnInit() {
        this.textBtn = "+";
        this.oculto = false;
    }

    btnPressed() {
        if(this.textBtn == "+"){
            this.oculto = true;
            this.textBtn = "-";
        }else{
            this.oculto = false;
            this.textBtn = "+";
        }
    }
}