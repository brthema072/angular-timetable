import { TestBed } from '@angular/core/testing';

import { AngularTimetableService } from './angular-timetable.service';

describe('AngularTimetableService', () => {
  let service: AngularTimetableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularTimetableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
