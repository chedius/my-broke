import { Component, OnInit ,EventEmitter, Output } from '@angular/core';
import {Post} from '../functional/functional.component';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  mess = 'You not register!';
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()

  title = ''
  text = ''
  img = ''
  constructor() { }

  ngOnInit() {
  }

  addPost() {
    if (localStorage.getItem('username') === null) {
      console.log(this.mess)
      return this.mess;
    }else{
    if (this.text.trim() && this.title.trim() && this.img.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text,
        img: this.img
      }
      this.onAdd.emit(post)

      this.title = this.text = this.img = '';
    }
   }
  }

}
