import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskManagement } from './tasks-management';

describe('TaskManagement', () => {
  let component: TaskManagement;
  let fixture: ComponentFixture<TaskManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskManagement],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
