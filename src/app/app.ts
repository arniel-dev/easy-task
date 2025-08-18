import { Component, signal, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { UserComponent } from './components/user/user';
import { DUMMY_USERS } from './dummy-users';
import { TaskManagement } from './components/tasks-management/tasks-management';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, UserComponent, TaskManagement],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users = DUMMY_USERS;

  selectedUserId = '';

  // selectedUser = {};
  // @Input({ required: true }) selectedUser!: IUser;
  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }
  onSelectUser(id: string) {
    console.log('this is user' + id);
    this.selectedUserId = id;
  }
}
