import { Component, DestroyRef, effect, inject, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent {
  // convert signal to observable
  clickCount = signal(0);
  clickCount$ = toObservable(this.clickCount);

  
  // convert observable to signal
  interval$ = interval(1000);
  intervalSignal = toSignal(this.interval$, {initialValue: 0}) 
  // take care here some Observable like function observable don't have an initial value so set to signal like this
  // and you don't need to unsubscribe it it's happen automatically


  // custom observable
  customInterval$ = new Observable((subscriber) => {
    let counter = 0;

    const interval = setInterval(() => {

      // subscriber.error("Unknown data");
      if(counter > 3){
        clearInterval(interval);
        subscriber.complete();
        return;
      }

      console.log("Emitting new value...");
      subscriber.next({msg: 'New Value!'});
      counter++;
    }, 2000);
  })


  private destroyRef = inject(DestroyRef);

  constructor() {
    // effect(() => {
    //   console.log(`clicked ${this.clickCount()}`);
    // });
  }

  ngOnInit(): void {
    // const subscription = interval(1000).pipe(
    //   map((val) => val * 2)
    // ).subscribe({
    //   next: (value) => console.log(value)
    // });
    
    const subs = this.clickCount$.subscribe((val) => console.log(`clicked ${val}`));
    
    this.destroyRef.onDestroy(() => { 
      // subscription.unsubscribe(); 
      subs.unsubscribe()
    })

    this.customInterval$.subscribe({
      next: (val) => console.log(val),
      complete: () => console.log("completed....."),
      error: () => console.log("error happen ???")
    })
  }

  onClick() {
    this.clickCount.update((prevCount) => prevCount+1);
  }
}
/*
  => rxjs ==> is best at events
  => signal ==> is great at changes values
*/
