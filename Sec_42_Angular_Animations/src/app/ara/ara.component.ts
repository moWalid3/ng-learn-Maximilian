import {
  animate,
  group,
  keyframes,
  query,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-ara',
  standalone: true,
  imports: [],
  templateUrl: './ara.component.html',
  styleUrl: './ara.component.scss',
  animations: [
    trigger('fadeIn', [

      //- 'void => *'  --> it means that from element not exist to any state not void(element not exist yet)
      /**
      transition('void => *', [
        //=> you can make them without group but the second animate work after first finish
        /*
          style({
            opacity: 0,
            transform: 'translateX(5rem)'
          }),
          group([
            animate(1000, style({
              opacity: 1,
            })),
            animate(300, style({
              transform: 'translateX(0)'
            }))
          ])
        */

        //=> use keyframe with it
        /*
          style({
            background: 'pink',
          }),
          animate(2000, keyframes([
              style({
                background: '#e26e',
                offset: 0.5,
              }),
              style({
                background: '#a95e',
                offset: 0.75,
              }),
              style({
                background: 'lightseagreen',
                offset: 1,
              }),
            ])
          ),
        */

        //=> create animation at parent and child
        /*
          style({
            transform: 'translateX(3rem)'
          }),
          group([
            animate(2000, style({
              transform: 'translateX(0)'
            })),
            query('span', [
              style({background: 'green'}),
              animate(1000, style({background: 'blue'}))
            ])
          ])
        */
      // ]),
      // ----------------------------------

      //- custom states

      state('state1', style({
        background: 'orange'
      })),
      state('state2', style({
        background: 'brown'
      })),
      transition('state1 => state2', [
        animate(1000)
      ])

    ]),
  ],
})
export class AraComponent {
  state = signal('state1');

  ngOnInit(): void {
    // it still at state1 then after 1s start work animation and change to state2
    setTimeout(() => {
      this.state.set('state2');
    }, 1000);
  }

  fadeStart() {
    console.log('fade Start');
  }
  fadeDone() {
    console.log('fade Done');
  }
}
