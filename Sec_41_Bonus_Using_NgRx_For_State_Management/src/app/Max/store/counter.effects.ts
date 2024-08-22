import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap, tap, withLatestFrom, of } from 'rxjs';

import { decrement, increment, init, set } from './counter.actions';
import { selectCount } from './counter.selectors';

@Injectable()
export class CounterEffects {
  private actions$ = inject(Actions);
  private store: Store<{ counter: number }> = inject(Store);

  loadCount = createEffect(() =>
    this.actions$.pipe(
      ofType(init),
      switchMap(() => {
        const storedCounter = localStorage.getItem('count');
        return of(set({ value: storedCounter ? +storedCounter : 0 }));
      })
    )
  );

  saveCount = createEffect(
    () =>
      this.actions$.pipe(
        ofType(increment, decrement),

        withLatestFrom(this.store.select(selectCount)),

        tap(([action, counter]) => {
          console.log(action);
          localStorage.setItem('count', counter.toString());
        })
      ),
    { dispatch: false }
  );
}
