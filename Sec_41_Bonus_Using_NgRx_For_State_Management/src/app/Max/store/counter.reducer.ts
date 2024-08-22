import { Action, createReducer, on } from '@ngrx/store';
import { decrement, increment, set} from './counter.actions';
// import { CounterAction, INCREMENT, IncrementAction } from './counter.actions';

const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => state + action.value),
  on(decrement, (state, action) => state - action.value),
  on(set, (state, action) => action.value)
);


//=> alternative way (old way)

// export function counterReducer(state = initialState, action: CounterAction | Action) {
//   if(action.type === INCREMENT) {
//     return state + (action as IncrementAction).value
//   }

//   return state;
// }
