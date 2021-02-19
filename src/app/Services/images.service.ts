import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  private url = 'http://localhost:3000/images';
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.url);

  }
}
