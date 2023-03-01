import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './shared/gallery/gallery.component';
import { HomeComponent } from './shared/home/home.component';
import { PostsComponent } from './shared/posts/posts.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'gallery', component: GalleryComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
