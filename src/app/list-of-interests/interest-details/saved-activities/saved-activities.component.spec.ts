import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedActivitiesComponent } from './saved-activities.component';

describe('SavedActivitiesComponent', () => {
  let component: SavedActivitiesComponent;
  let fixture: ComponentFixture<SavedActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedActivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
