import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppBlog';


public posts = [
  {
    title: "Post1",
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis ullam magni omnis cupiditate eos tempore veniam excepturi ducimus quidem impedit nam quaerat, debitis aut numquam nemo repudiandae? Unde, molestiae omnis?",
    loveIts: 0,
    created_at: new Date()
  },
  {
    title: "Post2",
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis ullam magni omnis cupiditate eos tempore veniam excepturi ducimus quidem impedit nam quaerat, debitis aut numquam nemo repudiandae? Unde, molestiae omnis?",
    loveIts: 0,
    created_at: new Date()
  },
  {
    title: "Post3",
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis ullam magni omnis cupiditate eos tempore veniam excepturi ducimus quidem impedit nam quaerat, debitis aut numquam nemo repudiandae? Unde, molestiae omnis?",
    loveIts: 0,
    created_at: new Date()
  }
]


}