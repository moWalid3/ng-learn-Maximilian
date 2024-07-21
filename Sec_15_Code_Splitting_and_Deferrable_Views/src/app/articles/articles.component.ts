import { Component, DestroyRef, inject, signal } from '@angular/core';
import { ArticlesService } from '../core/articles.service';
import { Article } from '../core/article.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
  articles = signal<Article[]>([])

  private articlesService = inject(ArticlesService);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    const subscription = this.articlesService.getArticles().subscribe({
      next: (articles) => {
        this.articles.set(articles);
      },
    });

    this.destroyRef.onDestroy(() => subscription.unsubscribe);
  }
}
