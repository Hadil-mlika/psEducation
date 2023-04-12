import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarceloneComponent } from './barcelone.component';

describe('BarceloneComponent', () => {
  let component: BarceloneComponent;
  let fixture: ComponentFixture<BarceloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarceloneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarceloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
