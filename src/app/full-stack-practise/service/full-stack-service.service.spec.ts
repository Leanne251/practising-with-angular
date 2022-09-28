import { TestBed } from '@angular/core/testing';

import { FullStackServiceService } from './full-stack-service.service';

describe('FullStackServiceService', () => {
  let service: FullStackServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FullStackServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
