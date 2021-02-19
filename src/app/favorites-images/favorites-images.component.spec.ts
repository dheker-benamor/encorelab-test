import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesImagesComponent } from './favorites-images.component';

describe('FavoritesImagesComponent', () => {
  let component: FavoritesImagesComponent;
  let fixture: ComponentFixture<FavoritesImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritesImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
