import { Injectable, signal } from '@angular/core';
import { AnnualData, Investment } from './models/investment.model';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  resultsData = signal<AnnualData[]>([]);

  calcResults(investment: Investment) {
    const annualData: AnnualData[] = [];
    let investmentValue = investment.initialInvestment;
  
    for (let i = 0; i < investment.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (investment.expectedReturn / 100);
      investmentValue += interestEarnedInYear + investment.annualInvestment;
      const totalInterest =
        investmentValue - investment.annualInvestment * year - investment.initialInvestment;
      annualData.push({
        year: (i+1),
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: investment.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: investment.initialInvestment + investment.annualInvestment * year,
      });
    }
  
    this.resultsData.set(annualData);
  }
}
