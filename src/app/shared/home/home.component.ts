import { Component, OnInit } from '@angular/core';
import { Gallery } from '../gallery/gallery.service';
import { Posts } from '../posts/post.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
  gallery: Gallery[] = [];
  posts: Posts[] = [];

  ngOnInit(): void {
    this.homeService.combine().subscribe(data => {
      this.gallery = data.gallery;
      this.posts = data.posts;
    });
  }

  combine$ = this.homeService.combine();

  constructor(public homeService: HomeService) {
  }
}
