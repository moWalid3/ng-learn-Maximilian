import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { FailedTodosAction, LOAD, SuccessTodosAction } from "../actions/todos.action";
import { catchError, map, mergeMap, of } from "rxjs";


@Injectable()
export class TodosEffect {
  private http = inject(HttpClient);
  private actions = inject(Actions);

  todoEffect = createEffect(() => this.actions.pipe(
    ofType(LOAD),
    mergeMap(() => this.http.get('https://jsonplaceholder.typicode.com/todos').pipe(
      map(todos => new SuccessTodosAction(todos)),
      catchError(err => of(new FailedTodosAction(err)))
    ))
  ))
}
