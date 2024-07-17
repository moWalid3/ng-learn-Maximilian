import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RectComponent } from "../rect/rect.component";

@Component({
  selector: 'app-rect-form',
  standalone: true,
  imports: [FormsModule, RectComponent],
  templateUrl: './rect-form.component.html',
  styleUrl: './rect-form.component.scss'
})
export class RectFormComponent {
  rectSize = {
    height: '200',
    width: '200'
  }


}
