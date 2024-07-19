import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  
  const nextReq = req.clone({
    url: `http://localhost:3000/${req.url}`,
  });

  return next(nextReq).pipe(
    tap({
      next: (event) => {
        if(event.type === HttpEventType.Response) {
          console.log(event.status);
          console.log(event.body);
        }
      }
    })
  );
};
