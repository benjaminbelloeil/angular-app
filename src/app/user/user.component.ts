import { Component, Input, Output, EventEmitter } from '@angular/core';

// type User = {
//   id: string;
//   name: string;
//   avatar: string;
// }

interface User {
  id: string;
  name: string;
  avatar: string;
};

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({ required: true }) selected!:boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath(){
    return './users/' + this.user.avatar;
  };

  onSelectUser(){
    this.select.emit(this.user.id);
  }
}
