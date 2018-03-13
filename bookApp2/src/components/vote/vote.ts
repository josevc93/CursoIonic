import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'vote',
  templateUrl: 'vote.html'
})
export class VoteComponent implements OnInit{

  @Output() hasVoted = new EventEmitter();

  text: string;
  likeVote: number;
  dislikeVote: number;

  constructor() {
  }

  ngOnInit(){
    this.likeVote = 0;
    this.dislikeVote = 0;
  }

  like(){
    this.likeVote += 1;
    this.hasVoted.emit('me gusta');
  }

  dislike(){
    this.dislikeVote += 1;
    this.hasVoted.emit('no me gusta');
  }

}
