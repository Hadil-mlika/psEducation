import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostinscriComponent } from './postinscri.component';

describe('PostinscriComponent', () => {
  let component: PostinscriComponent;
  let fixture: ComponentFixture<PostinscriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostinscriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostinscriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
