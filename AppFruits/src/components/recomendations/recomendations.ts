import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'recomendations',
  templateUrl: 'recomendations.html'
})
export class RecomendationsComponent implements OnInit{

  @Input() recomendation: any;
  @Output() viewDetails: EventEmitter<void>;
    private like: number;
    private dislike :number;
   private showInfo: boolean;

  constructor() {
    this.viewDetails = new EventEmitter<void>();
  }

    ngOnInit(){
        this.showInfo = false;
        this.like = 0;
        this.dislike = 0;
    }

  viewDetailsR(event: Event){
    this.viewDetails.emit();
  }

    showDetails(show: boolean) {
        this.showInfo = show;
    }

    megusta(){
        this.like += 1;
    }

    nomegusta(){
        this.dislike += 1;
    }
}
