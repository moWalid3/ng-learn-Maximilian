import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { reducers } from './Ar/store/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { TodosEffect } from './Ar/store/effects/todos.effect';
import { counterReducer } from './Max/store/counter.reducer';
import { CounterEffects } from './Max/store/counter.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),

    // provideStore(reducers),
    provideStore({counter: counterReducer}),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    // provideEffects([TodosEffect])
    provideEffects([CounterEffects])
],
};
