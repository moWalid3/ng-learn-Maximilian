import { Component } from '@angular/core';

@Component({
  selector: 'button[appButton]', // or any css selector ==> .my-btn, .... // ?thats call builtin element selector
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {}
