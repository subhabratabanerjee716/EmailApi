import { TestBed } from '@angular/core/testing';

import { GlobalconstantsService } from './globalconstants.service';

describe('GlobalconstantsService', () => {
  let service: GlobalconstantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalconstantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
