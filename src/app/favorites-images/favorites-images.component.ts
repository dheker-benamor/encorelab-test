import {Component, Inject, OnInit} from '@angular/core';
import {ImagesService} from '../Services/images.service';
import {LOCAL_STORAGE, WebStorageService} from 'ngx-webstorage-service';

@Component({
  selector: 'app-favorites-images',
  templateUrl: './favorites-images.component.html',
  styleUrls: ['./favorites-images.component.css']
})
export class FavoritesImagesComponent implements OnInit {

  list = [];
  constructor( @Inject(LOCAL_STORAGE) private storage: WebStorageService) {  }

  ngOnInit() {
    this.list = this.storage.get('favorites');



  }

  search(id) {
    if (id !== '') {
      this.list = this.storage.get('favorites');

      const filtered = this.list.filter(p => p.id == id);
      this.list = filtered;

    } else {
      this.list = this.storage.get('favorites');

    }
  }
  deleteFavorite(image) {
    this.list = this.list.filter(p => p.id != image.id);
    this.storage.set('favorites', this.list);
  }

}
