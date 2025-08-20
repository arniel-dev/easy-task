import {
  Component,
  computed,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { type User } from './user.model';
import { Card } from '../../shared/card/card';

@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // @Input({ required: false }) id!: string;

  // get imagePath() {
  //   return '../../assets/users/' + this.avatar;
  // }

  // avatar = input.required<string>();
  // name = input.required<string>();
  // id = input.required<string>();
  @Output() select = new EventEmitter();
  @Input({ required: false }) user!: User;
  @Input({ required: true }) selected!: boolean;
  imagePath = computed(() => '../../assets/users/' + this.user.avatar);

  onSelectedUser() {
    this.select.emit(this.user.id);
  }
}
