import { TestBed } from '@angular/core/testing';

import { SubmissionRestApiService } from './submission-rest-api.service';

describe('SubmissionRestApiService', () => {
  let service: SubmissionRestApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmissionRestApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
