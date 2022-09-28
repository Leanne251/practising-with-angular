import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullStackPractiseComponent } from './full-stack-practise.component';

describe('FullStackPractiseComponent', () => {
  let component: FullStackPractiseComponent;
  let fixture: ComponentFixture<FullStackPractiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullStackPractiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullStackPractiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
