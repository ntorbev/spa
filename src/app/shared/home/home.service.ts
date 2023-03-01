import { Injectable } from '@angular/core';
import { forkJoin, map, of, tap } from 'rxjs';
import { GalleryService } from '../gallery/gallery.service';
import { PostService } from '../posts/post.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private cache: any;

  constructor(private postService: PostService, private galleryService: GalleryService) {

  }

  combine() {
    return this.cache ? of(this.cache) : forkJoin(
      // as of RxJS 6.5+ we can use a dictionary of sources
      {
        gallery: this.galleryService.getGalleries().pipe(map(gall => gall.slice(0, 10))),
        posts: this.postService.getPosts().pipe(map(posts => posts.slice(0, 10)))
      }).pipe(tap(data => this.cache = data));
  }
}
