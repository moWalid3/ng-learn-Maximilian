import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { ServerStatusComponent } from "./dashboard/server-status/server-status.component";
import { TrafficComponent } from "./dashboard/traffic/traffic.component";
import { TicketsComponent } from "./dashboard/tickets/tickets.component";
import { RectFormComponent } from "./custom-2-way-binding/rect-form/rect-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ServerStatusComponent, TrafficComponent, TicketsComponent, RectFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
