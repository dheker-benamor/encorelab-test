import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ImagesListComponent} from './images-list/images-list.component';
import {FavoritesImagesComponent} from './favorites-images/favorites-images.component';


const routes: Routes = [
  { path: '', redirectTo: 'All', pathMatch: 'full' },
  { path: 'All', component: ImagesListComponent },
  { path: 'favorites', component: FavoritesImagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
