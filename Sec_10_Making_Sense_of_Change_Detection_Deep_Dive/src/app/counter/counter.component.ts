import { ChangeDetectionStrategy, Component, inject, NgZone, signal } from '@angular/core';

import { InfoMessageComponent } from '../info-message/info-message.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
  imports: [InfoMessageComponent],
  changeDetection: ChangeDetectionStrategy.OnPush, // this line is important even you rid zone.js
})
export class CounterComponent {
  count = signal(0);

  get debugOutput() {
    console.log('[Counter] "debugOutput" binding re-evaluated.');
    return 'Counter Component Debug Output';
  }

  // private zone = inject(NgZone);

  ngOnInit(): void {
    // here any changes happen in any place in app the zone.js check all app, all files to find if value need to change from this changed happen
    // so in this setTimeOut when work --> zone.js check again 
    // and that is bad for performance if you don't use any changes value or data in your method
    // so the solution in this case to use this below method this.zone.runOutsideAngular() 
    // and set into it your code that you don't need zone.js checking after it ==> because this code does'nt make any change in data

    // zone will work here
    setTimeout(() => {
      this.count.set(0);
    }, 5000);

    // here you tell zone ==> 'don't work here ;)' ==> so zone will not work here 
    // this.zone.runOutsideAngular(() => {
    // now you can comment and don't use this above line zone because you rid zone.js from app
      setTimeout(() => {
        console.log("timer don't change any thing");
      }, 6000);
    // })
  }

  onDecrement() {
    this.count.update((prevCount) => prevCount - 1);
  }

  onIncrement() {
    this.count.update((prevCount) => prevCount + 1);
  }
}
/*
  ! change detection mechanism (zone) ==> it work twice by angular in develop mood
  ? but in deploy i think work once ==> so keep that in your mind
*/
