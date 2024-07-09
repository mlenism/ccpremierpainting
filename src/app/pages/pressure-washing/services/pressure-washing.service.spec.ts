import { TestBed } from '@angular/core/testing';

import { PressureWashingService } from './pressure-washing.service';

describe('PressureWashingService', () => {
  let service: PressureWashingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PressureWashingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
