import { Component, OnInit } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  img: string;
  id?: number;
}

@Component({
  selector: 'app-functional',
  templateUrl: './functional.component.html',
  styleUrls: ['./functional.component.css']
})
export class FunctionalComponent implements OnInit {

  posts: Post[] = [
    {title: 'Hi', text: 'This is a form of post that you can use good luck.', img: 'https://sun9-46.userapi.com/c855124/v855124487/15c1ab/KJJzTgEdKtQ.jpg', id: 1}
  ]
  constructor() { }

  ngOnInit() {
  }

  updatePosts(post: Post) {
    this.posts.unshift(post)
    console.log('Post:', post);
  }

  removePost(id: number) {
    this.posts = this.posts.filter(p => p.id !== id);
  }

}
