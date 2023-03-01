import { Component } from '@angular/core';
import { GalleryService } from './gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: [ './gallery.component.css' ]
})
export class GalleryComponent {
  galleries$ = this.galleryService.getGalleries()
  constructor(private galleryService: GalleryService) {
  }
}
