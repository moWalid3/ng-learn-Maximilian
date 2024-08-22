import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./Ar/home/home.component";
import { CounterOutputComponent } from "./Max/counter-output/counter-output.component";
import { CounterControlsComponent } from "./Max/counter-controls/counter-controls.component";
import { Store } from '@ngrx/store';
import { init } from './Max/store/counter.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, CounterOutputComponent, CounterControlsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private store = inject(Store);

  ngOnInit(): void {
    this.store.dispatch(init())
  }
}
