import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  Output,
} from '@angular/core';

type User = {
  id: string;
  name: string;
  avatar: string;
};

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // @Input({ required: false }) id!: string;
  @Output() select = new EventEmitter();
  @Input({ required: false }) user!: User;
  // get imagePath() {
  //   return '../../assets/users/' + this.avatar;
  // }

  // avatar = input.required<string>();
  // name = input.required<string>();
  // id = input.required<string>();

  imagePath = computed(() => '../../assets/users/' + this.user.avatar);

  onSelectedUser() {
    this.select.emit(this.user.id);
  }
}
