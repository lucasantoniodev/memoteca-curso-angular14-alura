import { TestBed } from '@angular/core/testing';

import { ToughtService } from './tought.service';

describe('ToughtService', () => {
  let service: ToughtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToughtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
