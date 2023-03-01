import { Component } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: [ './posts.component.css' ]
})
export class PostsComponent {
  photos$ = this.postService.getPosts();

  constructor(private postService: PostService) {
  }
}
