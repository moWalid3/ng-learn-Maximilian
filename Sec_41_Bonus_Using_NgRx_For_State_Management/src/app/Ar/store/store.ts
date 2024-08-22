import { ActionReducerMap } from '@ngrx/store';
import { Counter, counterReducer } from './reducers/counter.reducer';
import { Todo, TodosReducer } from './reducers/todos.reducer';

export interface StoreInterface {
  counter: Counter;
  todos: Todo[];
}

interface CustomAction {
  type: string;
  payload: any;
}

export const reducers: ActionReducerMap<StoreInterface> = {
  counter: counterReducer,
  todos: TodosReducer,
};
