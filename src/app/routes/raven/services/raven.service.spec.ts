import { TestBed } from '@angular/core/testing';

import { RavenService } from './raven.service';

describe('RavenService', () => {
  let service: RavenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RavenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
