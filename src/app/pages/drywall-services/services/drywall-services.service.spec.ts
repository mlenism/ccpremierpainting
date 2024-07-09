import { TestBed } from '@angular/core/testing';

import { DrywallServicesService } from './drywall-services.service';

describe('DrywallServicesService', () => {
  let service: DrywallServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrywallServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
