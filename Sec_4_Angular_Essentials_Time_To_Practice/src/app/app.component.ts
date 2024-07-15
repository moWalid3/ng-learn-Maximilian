import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { InvestmentFormComponent } from './investment-form/investment-form.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    InvestmentFormComponent,
    InvestmentResultsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
