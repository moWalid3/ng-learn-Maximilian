
export const INCREMENT = '[Counter] increment';
export const DECREMENT = '[Counter] decrement'

export class IncrementAction {
  type = INCREMENT;
  payload: number;

  constructor(payload: number) {
    this.payload = payload;
  }
}

export class DecrementAction {
  type = DECREMENT;
  payload: number;

  constructor(payload: number) {
    this.payload = payload;
  }
}
