import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iif, Observable, of, shareReplay, tap } from 'rxjs';

export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private cache: Posts[] = [];

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<Posts[]> {
    return iif(
      () => !!this.cache.length,
      of(this.cache),
      this.http.get<Posts[]>('http://localhost:3000/posts').pipe(shareReplay(), tap(data => this.cache = data))
    );
  }
}
