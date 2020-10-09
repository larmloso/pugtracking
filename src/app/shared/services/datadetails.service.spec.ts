import { TestBed } from '@angular/core/testing';

import { DatadetailsService } from './datadetails.service';

describe('DatadetailsService', () => {
  let service: DatadetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatadetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
