import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurkiyaComponent } from './turkiya.component';

describe('TurkiyaComponent', () => {
  let component: TurkiyaComponent;
  let fixture: ComponentFixture<TurkiyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurkiyaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurkiyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
