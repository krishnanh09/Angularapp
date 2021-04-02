import { TestBed } from '@angular/core/testing';

import { FiledServiceService } from './filed-service.service';

describe('FiledServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FiledServiceService = TestBed.get(FiledServiceService);
    expect(service).toBeTruthy();
  });
});
