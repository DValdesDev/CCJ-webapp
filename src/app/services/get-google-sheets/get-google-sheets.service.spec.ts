import { TestBed } from '@angular/core/testing';

import { GetGoogleSheetsService } from './get-google-sheets.service';

describe('GetGoogleSheetsService', () => {
  let service: GetGoogleSheetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetGoogleSheetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
