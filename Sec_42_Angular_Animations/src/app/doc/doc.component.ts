import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-doc',
  standalone: true,
  imports: [],
  templateUrl: './doc.component.html',
  styleUrl: './doc.component.scss',
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow',
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue',
      })),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
  ],
})
export class DocComponent {
  isOpen = true;
  toggle() {
    this.isOpen = !this.isOpen;
  }
}
