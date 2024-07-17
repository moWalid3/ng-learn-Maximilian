import { Component, EventEmitter, Input, model, Output } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.scss'
})
export class RectComponent {
  // @Input({required: true}) size!: {height: string, width: string};
  // @Output() sizeChange = new EventEmitter<{height: string, width: string}>() // the name of variable must be => (input name) + 'Change'

  size = model.required<{height: string, width: string}>();

  onReset() {
    // this.sizeChange.emit({height: '100', width: '300'});

    this.size.set({height: '100', width: '300'});
  }
}
