import { inject } from '@angular/core';
import { CanMatchFn, RedirectCommand, Router } from '@angular/router';

export const testGuard: CanMatchFn = (route, segments) => {
  const router = inject(Router);
  const num = Math.random();
  
  if (num > 0.5) 
    return true;
  else 
    return new RedirectCommand(router.parseUrl('unauthorized'));
};
