import { TestBed } from '@angular/core/testing';

import { ApiServiceeService } from './api-servicee.service';

describe('ApiServiceeService', () => {
  let service: ApiServiceeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiServiceeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
