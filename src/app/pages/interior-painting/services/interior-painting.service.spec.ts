import { TestBed } from '@angular/core/testing';

import { InteriorPaintingService } from './interior-painting.service';

describe('InteriorPaintingService', () => {
  let service: InteriorPaintingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InteriorPaintingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
