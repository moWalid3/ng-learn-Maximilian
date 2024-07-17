import { Directive, ElementRef, inject, input } from '@angular/core';
import { LogDirective } from './log.directive';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeave($event)'
  },
  hostDirectives: [LogDirective], // like you set logDirective as a directive on this component use appSafeLike directive
})
export class SafeLinkDirective { // custom attribute directive
  queryParam = input('myApp', {alias: 'appSafeLink'});
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef); // so this is the host element

  onConfirmLeave(event: MouseEvent) {
    const wantsToLeave = confirm("Do you want to leave the app?");

    if(wantsToLeave) {
      // const address = (event.target as HTMLAnchorElement).href;
      // (event.target as HTMLAnchorElement).href = `${address}?from=${this.queryParam()}`;

      const address = this.hostElementRef.nativeElement.href;
      this.hostElementRef.nativeElement.href = `${address}?from=${this.queryParam()}`;

    } else {

      event.preventDefault();
    }
  }

}
