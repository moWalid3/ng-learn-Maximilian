import { inject, Injectable, signal } from '@angular/core';

import { Place } from './place.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap, throwError } from 'rxjs';
import { ErrorService } from '../shared/error.service';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private errorService = inject(ErrorService);
  private httpClient = inject(HttpClient);
  private userPlaces = signal<Place[]>([]);

  loadedUserPlaces = this.userPlaces.asReadonly();

  loadAvailablePlaces() {
    return this.fetchPlaces('places');
  }

  loadUserPlaces() {
    return this.fetchPlaces('user-places').pipe(
      tap({
        next: (userPlaces) => {
          this.userPlaces.set(userPlaces);
        },
      })
    );
  }

  addPlaceToUserPlaces(place: Place) {
    return this.httpClient
      .put<{ userPlaces: Place[] }>('user-places', {
        placeId: place.id,
      })
      .pipe(
        tap({
          next: (res) => {
            this.userPlaces.set(res.userPlaces);
          },
        }),
        catchError((error) => {
          console.log(error);
          this.errorService.showError('Failed to store the selected place!');
          return throwError(
            () => new Error('Failed to store the selected place!')
          );
        })
      );
  }

  removeUserPlace(placeId: string) {
    return this.httpClient
      .delete<{ userPlaces: Place[] }>(
        `user-places/${placeId}`
      )
      .pipe(
        tap({
          next: (res) => {
            this.userPlaces.set(res.userPlaces);
          },
        }),
        catchError((error) => {
          console.log(error);
          return throwError(
            () => new Error('Something wrong when removing from favorite!')
          );
        })
      );
  }

  private fetchPlaces(endPoint: string) {
    return this.httpClient
      .get<{ places: Place[] }>(endPoint)
      .pipe(
        map((res) => res.places),
        catchError((error) => {
          console.log(error);
          return throwError(() => {
            new Error('Something wrong, please try again');
          });
        })
      );
  }
}
