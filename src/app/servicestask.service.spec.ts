import { TestBed } from '@angular/core/testing';

import { ServicestaskService } from './servicestask.service';

describe('ServicestaskService', () => {
  let service: ServicestaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicestaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
