import { Component, computed, Input } from '@angular/core';
import { dummyTasks } from '../../dummy-tasks';
import { TaskComponent } from './task/task';
import { NewTaskData, type Task } from './tasks.model';
import { NewTask } from './new-task/new-task';
@Component({
  selector: 'app-tasks-management',
  imports: [TaskComponent, NewTask],
  templateUrl: './tasks-management.html',
  styleUrl: './tasks-management.css',
})
export class TaskManagement {
  tasks = dummyTasks;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  isAddingTask = false;
  get selectedUserTask(): Array<Task> {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    console.log('completed', id);
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartNewTask() {
    this.isAddingTask = true;
    console.log('click add task');
  }
  onCancelAddTask() {
    this.isAddingTask = false;
  }
  OnSubmitNewTask(taskData: NewTaskData) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    });
    this.isAddingTask = false;
  }
}
