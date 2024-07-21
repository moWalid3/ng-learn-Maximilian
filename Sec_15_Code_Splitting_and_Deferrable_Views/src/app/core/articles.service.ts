import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { Article } from './article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  private httpClient = inject(HttpClient);

  getArticles() {
    return this.httpClient
      .get<{ articles: Article[] }>(
        'https://newsapi.org/v2/everything?q=apple&from=2024-07-20&to=2024-07-20&sortBy=popularity&apiKey=694237c0c155420aa55ec1f485d0dd30'
      )
      .pipe(
        map((res) => res.articles.slice(0, 30)),
        catchError((error) => {
          console.log(error);
          return throwError(
            () => new Error('something wrong with fetching articles!')
          );
        })
      );
  }
}
