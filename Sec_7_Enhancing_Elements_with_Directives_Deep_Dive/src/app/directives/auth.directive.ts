import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Permission } from '../auth/auth.model';

@Directive({
  selector: '[appAuth]',
  standalone: true,
  // here you can't set logDirective in hostDirectives:[], 
  // but you can add logDirective to this component in html directly not in ts file because this is a structural directive not attr directive
})
export class AuthDirective { // custom structural directive
  userType = input.required<Permission>({alias: 'appAuth'});
  private authService = inject(AuthService);

  private templateRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);

  constructor() {
    effect(() => {
      if(this.userType() === this.authService.activePermission()) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainerRef.clear();
      }
    })
  }
}
