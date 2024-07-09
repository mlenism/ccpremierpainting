import { TestBed } from '@angular/core/testing';

import { CommercialPaintingService } from './commercial-painting.service';

describe('CommercialPaintingService', () => {
  let service: CommercialPaintingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommercialPaintingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
