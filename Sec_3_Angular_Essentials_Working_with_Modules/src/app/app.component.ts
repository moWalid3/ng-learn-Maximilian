import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedId?: string;

  onSelect(id: string) {
    this.selectedId = id;
  }

  get userSelected() {
    return this.users.find(user => user.id == this.selectedId);
  }
}
