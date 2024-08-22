import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DECREMENT, INCREMENT } from "../actions/counter.action";

export interface Counter {
  n: number
  changes: number
}

let initialState = {
  n: 0,
  changes: 0
}

export function counterReducer(state = initialState, action: any) {
  if(action.type === INCREMENT) {

    return {
      ...state,
      n: state.n + action.payload
    }

  } else if (action.type === DECREMENT) {

    return {
      ...state,
      n: state.n - action.payload
    }

  } else {

    return state;

  }
}

let counterFs = createFeatureSelector<Counter>('counter')
export let nSelector = createSelector(counterFs, state => state.n)
