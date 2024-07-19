import { Component, inject, signal, OnInit, DestroyRef } from '@angular/core';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { Place } from '../place.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent implements OnInit {
  private placesService = inject(PlacesService);
  private destroyRef = inject(DestroyRef);

  userPlaces = this.placesService.loadedUserPlaces;

  ngOnInit(): void {
    const subscription = this.placesService.loadUserPlaces().subscribe({
      error: (error: Error) => {
        console.log(error);
      }
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    })
  }

  onDeleteUserPlace(place: Place) {
    const subscription = this.placesService.removeUserPlace(place.id).subscribe();

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    })
  }
}
