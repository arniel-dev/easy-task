import { Component, computed, Input } from '@angular/core';
import { dummyTasks } from '../../dummy-tasks';
import { TaskComponent } from './task/task';
import { type Task } from './tasks.model';
@Component({
  selector: 'app-tasks-management',
  imports: [TaskComponent],
  templateUrl: './tasks-management.html',
  styleUrl: './tasks-management.css',
})
export class TaskManagement {
  tasks = dummyTasks;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;

  get selectedUserTask(): Array<Task> {
    return this.tasks.filter((task) => task.userId === this.userId);
  }
}
