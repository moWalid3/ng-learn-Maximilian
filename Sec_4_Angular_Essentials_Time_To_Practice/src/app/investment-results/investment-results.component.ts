import { Component, computed, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.scss'
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);

  resultsData = computed(() => this.investmentService.resultsData());
  // resultsData = this.investmentService.resultsData.asReadonly();
  
}
