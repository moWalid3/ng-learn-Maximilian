import { Component, inject, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {type Investment } from '../models/investment.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './investment-form.component.html',
  styleUrl: './investment-form.component.scss'
})
export class InvestmentFormComponent {
  investment = signal<Investment>({} as Investment);
  private investmentService = inject(InvestmentService);
  
  onSubmit() {
    this.investmentService.calcResults(this.investment());
  }
}
