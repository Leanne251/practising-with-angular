import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComponentsComponent } from './game-components.component';

describe('GameComponentsComponent', () => {
  let component: GameComponentsComponent;
  let fixture: ComponentFixture<GameComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
