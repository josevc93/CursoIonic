import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'fruit-card',
  templateUrl: 'fruit-card.html'
})
export class FruitCardComponent implements OnInit{

  @Input() fruit: any;
  @Output() delete: EventEmitter<void>;
  @Output() viewDetails: EventEmitter<void>;

  private showInfo: boolean;
  private like: number;
  private dislike :number;

  constructor() {
    this.delete = new EventEmitter<void>();
    this.viewDetails = new EventEmitter<void>();
  }

  ngOnInit(){
      this.showInfo = false;
      this.like = 0;
      this.dislike = 0;
  }

  megusta(){
      this.like += 1;
  }

  nomegusta(){
      this.dislike += 1;
  }

  deletePressed() {
    this.delete.emit();
  }

  showDetails(show: boolean) {
      this.showInfo = show;
  }

    viewDetailsF(event: Event){
        this.viewDetails.emit();
    }
}
