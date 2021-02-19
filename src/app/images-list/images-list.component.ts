import {Component, Inject, OnInit} from '@angular/core';
import {ImagesService} from '../Services/images.service';
import {LOCAL_STORAGE, WebStorageService} from 'ngx-webstorage-service';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.css']
})
export class ImagesListComponent implements OnInit {
  list = [];
  constructor(private imagesService: ImagesService, @Inject(LOCAL_STORAGE) private storage: WebStorageService) {  }

  ngOnInit() {
  this.imagesService.getAll().subscribe(data => {

    this.list = data;


  });


  }

  search(id) {
    if (id !== '') {
      this.imagesService.getAll().subscribe(data => {

        this.list = data;
        const filtered = this.list.filter(p => p.id == id);
        this.list = filtered;

      });
    } else {
      this.imagesService.getAll().subscribe(data => {

        this.list = data;

      });
    }
}
  addToFavorites(image) {

    if (this.storage.get('favorites') == null) {
      this.storage.set('favorites', []);
      const favorites = this.storage.get('favorites');
      favorites.push(image);
      this.storage.set('favorites', favorites);
    } else  {
    const favorites = this.storage.get('favorites');
    favorites.push(image);
    this.storage.set('favorites', favorites);
    }
  }

}
