import { Component, computed, EventEmitter, input, Input, output, Output, signal } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input({required: true}) id!: string;
  @Input({required: true}) name!: string;
  @Input({required: true}) avatar!: string;
  @Output() select = new EventEmitter<string>();

  get imgPath() {
    return `users/${this.avatar}`;
  }


  onSelectUser() {
    this.select.emit(this.id);
  }
}
