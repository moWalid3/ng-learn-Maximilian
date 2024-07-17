import { afterNextRender, afterRender, Component, contentChild, ContentChild, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.scss',
  encapsulation: ViewEncapsulation.None, // to solve enabling css style for inner ng-content if it's not working
  host: { // this is the modern way and recommended ==> to set to this component in all places called there this property or events
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  // this 3 lines below like host above but in old versions
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log("clicked");
  // }

  label = input.required<string>();

  // private el = inject(ElementRef); // sign to this component

  // this if you need to access an element in html like viewChild but the element is in ng-content so you use contentChild it's the same viewChild but due ng-content element you need
  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input'); // with signal

  ngAfterContentInit() {
    // it's like ngAfterViewInit() but with ng-content
    // some handling on control you need...
  }

  constructor() {
    afterRender(() => {
      // here a code that work infinity after any change happen in all app
    })

    afterNextRender(() => {
      // here a code that work once after any change happen in all app
    })
  }

  onClick() {
    console.log("clicked");
    // console.log(this.el);

    // console.log(this.control());
  }
}
