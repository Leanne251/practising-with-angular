import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingAndServicesComponent } from './routing-and-services.component';

describe('RoutingAndServicesComponent', () => {
  let component: RoutingAndServicesComponent;
  let fixture: ComponentFixture<RoutingAndServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingAndServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingAndServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
