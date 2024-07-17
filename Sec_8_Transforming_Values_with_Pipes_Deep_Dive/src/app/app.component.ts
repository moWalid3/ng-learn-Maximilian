import { DatePipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { TemperaturePipe } from "./pipes/temperature.pipe";
import { SortPipe } from "./pipes/sort.pipe";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [DatePipe, DecimalPipe, TemperaturePipe, SortPipe]
})
export class AppComponent {
  currentDate = new Date();
  currentTemperatures = {
    berlin: 4.2749812,
    newYork: 18.1214,
    paris: 72.1209001,
    chicago: 65.0775238,
  };

  historicTemperatures = [
    25, 37, 19, -4, 28, 21, 19, 28, 33, 31, 9, 11, 5, -12, -5,
  ];

  ngOnInit(): void {
    // in this case (sort) you shouldn't use pipe use this below 
    //! and when you need to use pipe think twice before use it because the performance
    this.historicTemperatures.sort((a, b) => a > b ? 1 : -1);
  }

  onReset(index: number) {
    // * this will not work because you use a pipe on this array so pipe look at pointer array reference not value
    // * so to fix it you must assign an array to this array again due you use a pipe with it
    this.historicTemperatures[index] = 18;

    // let newArr = [...this.historicTemperatures];
    // newArr[index] = 18;
    // this.historicTemperatures = newArr;
  }
}
