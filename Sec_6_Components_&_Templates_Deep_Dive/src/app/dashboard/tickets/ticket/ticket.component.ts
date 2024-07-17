import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.scss'
})
export class TicketComponent {
  ticket = input.required<Ticket>();
  close = output();
  detailsVisible = signal(false);
  
  onToggleDetails() {
    // this.detailsVisible.set(!this.detailsVisible());
    this.detailsVisible.update((wasVisible) => !wasVisible); // value in param is prev value and return the new value
  }

  onMarkAsCompleted() {
    this.close.emit();
  }
}
