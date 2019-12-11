import { Component, OnInit , Output , Input , EventEmitter } from '@angular/core';
import {Post} from '../functional/functional.component';
import { invalid } from '@angular/compiler/src/render3/view/util';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Output() Remove = new EventEmitter<number>()
  @Input() post: Post


  constructor() {
  }

  ngOnInit() {
  }


  removePost():any {
    if (localStorage.getItem('username') !== null){
    this.Remove.emit(this.post.id);
    }else{
      return null;
    }
  }

  date: Date = new Date();

  ofuser():any {
    if (localStorage.getItem('username') === null) {
      return ;
    }else{
      return null;
    }
  }

}
