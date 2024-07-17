import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { DashboardItemComponent } from "../dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [DashboardItemComponent],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.scss'
})
export class ServerStatusComponent implements OnInit{
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  // private interval! : ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef);

  constructor() {
    effect(() => {
      // run code when signal value changes 
      // it's like to make a subscribe here in ts like in html file because without it the signal value it's will be the same in ts even it's changes so use effect in this case 
      // console.log(this.currentStatus());
    })
  }

  ngOnInit(): void {
    const interval = setInterval(() => {
      const rand = Math.random();
      
      if(rand < 0.5) this.currentStatus.set('online');
      else if(rand < 0.9) this.currentStatus.set('offline');
      else this.currentStatus.set('unknown');
  
    }, 5000);

    this.destroyRef.onDestroy(() => clearInterval(interval)); // and you can use it in any place in your component and many times as you need and it's modern v16
  }

  // ngOnDestroy(): void {
  //   clearTimeout(this.interval);
  // }
}


/*
!Signal Effects Cleanup Functions

It does provide you with an onCleanup hook 
which you can execute as part of your effect function 
*to define what should happen before the effect code runs the next time:

effect((onCleanup) => {
  const tasks = getTasks();

  const timer = setTimeout(() => {
    console.log(`Current number of tasks: ${tasks().length}`);
  }, 1000);

  onCleanup(() => {
    clearTimeout(timer);
  });
});

*/
