import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotovideoComponent } from './photovideo.component';

describe('PhotovideoComponent', () => {
  let component: PhotovideoComponent;
  let fixture: ComponentFixture<PhotovideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotovideoComponent]
    });
    fixture = TestBed.createComponent(PhotovideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
