import { Component, input } from '@angular/core';

@Component({
  selector: 'app-post',
  standalone: true,
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  title = input<string>();
  content = input<string>();
}
