import { Component, computed, inject, input, DestroyRef } from '@angular/core';
import { UsersService } from '../users.service';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterLink,
  RouterOutlet,
  RouterState,
  RouterStateSnapshot,
} from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent {
  //=> the first way to get the user id but => the name of input here must be the same as the name op parameter in routers file
  //=> and you should add provideRouter(routes, withComponentInputBinding()) in config file
  // userId = input.required<string>();
  // private usersService = inject(UsersService);
  // username = computed(() => this.usersService.users.find(u => u.id === this.userId())?.name);

  //=> message come from routes data with first way
  message = input.required<string>();

  //=> the second way
  // private usersService = inject(UsersService);
  // private activatedRoute = inject(ActivatedRoute);
  // private destroyRef = inject(DestroyRef);
  // userId?: string | null;
  // username?: string | null;

  // ngOnInit(): void {
  //   console.log(this.message());
  //   const subscription = this.activatedRoute.paramMap.subscribe((params) => {
  //     this.userId = params.get('userId');
  //     this.username = this.usersService.users.find(
  //       (u) => u.id === this.userId
  //     )?.name;
  //   });

  //   this.destroyRef.onDestroy(() => subscription.unsubscribe);
  // }

  //=> from resolve (dynamic data in app.routes)
  username = input.required<string>();

  //=> another way to get data (static and dynamic) from app.routes
  private activatedRoute = inject(ActivatedRoute);
  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      // console.log(data); // message, username
    })
  }
}

export const resolveUsername: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  const usersService = inject(UsersService);
  const username = usersService.users.find(
    (u) => u.id === activatedRoute.paramMap.get('userId')
  )!.name || '';
  return username;
};

export const resolveTitle: ResolveFn<string> = (activatedRoute, routerState) => {
  return resolveUsername(activatedRoute, routerState) + "'s tasks"; 
};


