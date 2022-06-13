import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopedInterestsComponent } from './looped-interests.component';

describe('LoopedInterestsComponent', () => {
  let component: LoopedInterestsComponent;
  let fixture: ComponentFixture<LoopedInterestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoopedInterestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopedInterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
