import { Component, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreInterface } from '../store/store';
import { IncrementAction, DecrementAction } from '../store/actions/counter.action';
import { nSelector } from '../store/reducers/counter.reducer';
import { LoadTodosAction } from '../store/actions/todos.action';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private store = inject(Store);
  count = signal(0);

  ngOnInit(): void {
    // this.store.subscribe((store:StoreInterface) => this.count.set(store.counter.n))
    // this.store.select(nSelector).subscribe(n => this.count.set(n))

    this.store.subscribe(state => console.log(state))

  }

  onLoad() {
    this.store.dispatch(new LoadTodosAction())
  }

  increment() {
    this.store.dispatch(new IncrementAction(3));
  }

  decrement() {
    this.store.dispatch(new DecrementAction(3));
  }
}
