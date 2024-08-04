import { Component } from '@angular/core';
import {
  trigger,
  animateChild,
  group,
  transition,
  animate,
  style,
  query,
} from '@angular/animations';
import {
  ChildrenOutletContexts,
  RouterLink,
  RouterOutlet,
} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, RouterOutlet],
  animations: [
    trigger('routeAnimations', [
      transition('araPage <=> maxPage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
          }),
        ]),
        query(':enter', [style({ left: '-100%' })], { optional: true }),
        query(':leave', animateChild(), { optional: true }),
        group([
          query( ':leave', [animate('300ms ease-out', style({ left: '100%' }))], { optional: true}),
          query(':enter', [animate('300ms ease-out', style({ left: '0%' }))], {optional: true}),
        ]),
      ]),
      transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
          })],
          { optional: true }
        ),
        query(':enter', [style({ left: '-100%' })], { optional: true }),
        query(':leave', animateChild(), { optional: true }),
        group([
          query(':leave', [animate('200ms ease-out', style({ left: '100%', opacity: 0 }))],
            {optional: true}
          ),
          query(':enter', [animate('300ms ease-out', style({ left: '0%' }))], {
            optional: true,
          }),
          query('@*', animateChild(), { optional: true }),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent {
  constructor(private contexts: ChildrenOutletContexts) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
