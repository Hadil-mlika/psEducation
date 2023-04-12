import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllemagneComponent } from './allemagne.component';

describe('AllemagneComponent', () => {
  let component: AllemagneComponent;
  let fixture: ComponentFixture<AllemagneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllemagneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllemagneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
