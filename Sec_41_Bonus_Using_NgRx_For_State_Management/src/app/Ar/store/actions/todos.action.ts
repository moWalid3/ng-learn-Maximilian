
export const SUCCESS = '[Todos] success';
export const FAILED = '[Todos] failed';
export const LOAD = '[Todos] load';

export class LoadTodosAction {
  type = LOAD;
}

export class SuccessTodosAction {
  type = SUCCESS;
  payload: any;

  constructor(payload: any) {
    this.payload = payload;
  }
}

export class FailedTodosAction {
  type = FAILED;
  payload: any;

  constructor(payload: any) {
    this.payload = payload;
  }
}
