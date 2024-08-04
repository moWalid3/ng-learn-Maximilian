import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-max',
  standalone: true,
  imports: [],
  templateUrl: './max.component.html',
  styleUrl: './max.component.scss',
  animations:[
    trigger('moving', [
      state('normal', style({
        backgroundColor: 'red',
        transform: 'translateX(0) scale(1)',
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(100px) scale(1)',
      })),
      state('shrunken', style({
        backgroundColor: 'green',
        transform: 'translateX(0) scale(.5)',
      })),

      transition('normal => highlighted', animate(400)),
      transition('highlighted => normal', animate(800)),
      transition('shrunken <=> *', [
        style({
          backgroundColor: 'orange',
        }),
        animate(1000, style({
          borderRadius: '50px'
        })),
        animate(500)
      ]),
    ]),

    trigger('anything', [
      state('in', style({
        opacity: '1',
        transform: 'translateX(0)'
      })),
      // when add item
      transition('void => *', [
        style({
          opacity: '0',
          transform: 'translateX(-100px)'
        }),
        animate(300)
      ]),
      // when delete item
      transition('* => void', [
        animate(300, style({
          opacity: '0',
          transform: 'translateX(100px)'
        }),)
      ])
    ])
  ]
})
export class MaxComponent {
  state = 'normal';

  onAnimate() {
    this.state = this.state === 'normal' ? 'highlighted' : 'normal';
  }
  onShrink() {
    this.state = 'shrunken'
  }

  items = ['Arabic', 'English'];

  onAdd(value: string) {
    this.items.push(value);
  }

  onDelete(value: string) {
    this.items = this.items.filter(item => item !== value);
  }
}
