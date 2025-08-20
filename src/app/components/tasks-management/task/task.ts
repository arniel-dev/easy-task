import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Task } from '../tasks.model';
import { Card } from '../../../shared/card/card';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
