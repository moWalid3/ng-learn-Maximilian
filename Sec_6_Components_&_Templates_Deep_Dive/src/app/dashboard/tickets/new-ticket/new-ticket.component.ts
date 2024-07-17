import { Component, ElementRef, output, viewChild, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.scss'
})
export class NewTicketComponent {
  // @ViewChild('form') private myForm!: ElementRef<HTMLFormElement>;
  private myForm = viewChild.required<ElementRef<HTMLFormElement>>('form'); // signal

  ngAfterViewInit(): void { // use it with @ViewChild due ngOnInit does'nt work with it
    // console.dir(this.myForm); 
  }

  add = output<{title: string, request: string}>();

  onSubmit(title: string, request: string) {
    this.add.emit({title, request});
    
    this.myForm().nativeElement.reset();
  }
}
