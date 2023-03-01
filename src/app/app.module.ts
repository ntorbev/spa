import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MyMaterialModule } from './my-material.module';
import { GalleryComponent } from './shared/gallery/gallery.component';
import { HomeComponent } from './shared/home/home.component';
import { PostsComponent } from './shared/posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MyMaterialModule,
    BrowserAnimationsModule,
    RouterOutlet,
    RouterLink,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
