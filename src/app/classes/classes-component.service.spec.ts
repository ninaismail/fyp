import { TestBed } from '@angular/core/testing';

import { ClassesComponentService } from './classes-component.service';

describe('ClassesComponentService', () => {
  let service: ClassesComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassesComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
