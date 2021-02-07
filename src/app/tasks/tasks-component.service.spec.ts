import { TestBed } from '@angular/core/testing';

import { TasksComponentService } from './tasks-component.service';

describe('TasksComponentService', () => {
  let service: TasksComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasksComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
