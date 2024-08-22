import { FAILED, SUCCESS } from "../actions/todos.action";

export interface Todo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

const initialState = {

}

export function TodosReducer(state: Todo[] | undefined, action: any) {
  if(action.type === SUCCESS) {
    return action.payload;
  } else if(action.type === FAILED) {
    console.log('error', action.payload);
    return state;
  }
}
