import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFeaturesComponent } from './simple-features.component';

describe('SimpleFeaturesComponent', () => {
  let component: SimpleFeaturesComponent;
  let fixture: ComponentFixture<SimpleFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
