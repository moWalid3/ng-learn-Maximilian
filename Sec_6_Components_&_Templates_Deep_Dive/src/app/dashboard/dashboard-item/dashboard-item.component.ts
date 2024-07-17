import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.scss'
})
export class DashboardItemComponent {
  imgPath = input.required<string>();
  title = input.required<string>();
}
