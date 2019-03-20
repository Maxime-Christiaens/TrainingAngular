import { Component, Input , OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postCreated_at: string;
  @Input() postLoveIts: number;

  like(){
    this.postLoveIts ++;
  }
  dislike(){
    this.postLoveIts --;
  }
  bgColor(){
    if( this.postLoveIts > 0){
      return "green"
    }
    else if ( this.postLoveIts < 0 ){
      return "red"
    }
    else{
      return "white";
    }
  }
  constructor() { }

  ngOnInit() {
  }
}
