import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PractiseFeatureComponent } from './practise-feature.component';

describe('PractiseFeatureComponent', () => {
  let component: PractiseFeatureComponent;
  let fixture: ComponentFixture<PractiseFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PractiseFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PractiseFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
