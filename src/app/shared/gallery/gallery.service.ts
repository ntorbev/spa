import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iif, Observable, of, tap } from 'rxjs';

export interface Gallery {
  albumId?: number;
  id?: number;
  title?: string;
  url?: string;
  thumbnailUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private cache: Gallery[]=[];

  constructor(private http: HttpClient) {
  }

  getGalleries(): Observable<Gallery[]> {
    return iif(
      () => !!this.cache.length,
      of(this.cache),
      this.http.get<Gallery[]>('http://localhost:3000/photos').pipe(tap(data => this.cache = data))
    );
  }
}
