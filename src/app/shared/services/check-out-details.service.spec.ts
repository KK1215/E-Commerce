import { TestBed } from '@angular/core/testing';

import { CheckOutDetailsService } from './check-out-details.service';

describe('CheckOutDetailsService', () => {
  let service: CheckOutDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckOutDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
