import { Component, inject } from '@angular/core';

import { Store } from '@ngrx/store';
import { decrement, increment } from '../store/counter.actions';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
  standalone: true,
})
export class CounterControlsComponent {
  private store: Store<{ counter: number }> = inject(Store);

  increment() {
    this.store.dispatch(increment({ value: 3 }));

    // this.store.dispatch(increment(new IncrementAction(3)));
  }

  decrement() {
    this.store.dispatch(decrement({value: 3}))
  }
}
