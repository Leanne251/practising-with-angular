import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnItemComponent } from './add-an-item.component';

describe('AddAnItemComponent', () => {
  let component: AddAnItemComponent;
  let fixture: ComponentFixture<AddAnItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAnItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAnItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
