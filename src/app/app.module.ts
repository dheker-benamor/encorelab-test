import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagesListComponent } from './images-list/images-list.component';
import {HttpClientModule} from '@angular/common/http';
import {LazyForDirective} from './directives/lazyFor.directive';
import {LazyLoadImageModule} from 'ng-lazyload-image';
import { FavoritesImagesComponent } from './favorites-images/favorites-images.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagesListComponent,
    LazyForDirective,
    FavoritesImagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LazyLoadImageModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
