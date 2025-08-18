import { Component, Input } from '@angular/core';
import { dummyTasks } from '../../dummy-tasks';
import { TaskComponent } from './task/task';
@Component({
  selector: 'app-tasks-management',
  imports: [TaskComponent],
  templateUrl: './tasks-management.html',
  styleUrl: './tasks-management.css',
})
export class TaskManagement {
  tasks = dummyTasks;
  @Input() name?: string;
  @Input() userId!: string;
}
