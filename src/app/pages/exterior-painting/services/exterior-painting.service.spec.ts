import { TestBed } from '@angular/core/testing';

import { ExteriorPaintingService } from './exterior-painting.service';

describe('ExteriorPaintingService', () => {
  let service: ExteriorPaintingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExteriorPaintingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
