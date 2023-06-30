import { TestBed } from '@angular/core/testing';

import { LoginFlagService } from './login-flag.service';

describe('LoginFlagService', () => {
  let service: LoginFlagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginFlagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
