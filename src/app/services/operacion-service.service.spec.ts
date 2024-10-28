import { TestBed } from '@angular/core/testing';

import { OperacionServiceService } from './operacion-service.service';

describe('OperacionServiceService', () => {
  let service: OperacionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperacionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
